let instance = null;
let jsdom = require("jsdom");
let JsonCSS = require('json-css');
let CustomJsonCSS = require('./cssToJson');
let { JSDOM } = jsdom;
let syncRequest = require('sync-request');
class WebsiteScraper {
// This class will be responsible for getting the HTML DOM, then CSS files.
// Andrew Aubury

constructor(options) {  // Constructor
    this.options = options;
    this.request = require('request');
    instance = this;
}

static getInstance(){
	if(instance == null){
		instance = new WebsiteScraper({verbose: false});
	}
	return instance;
}

setVerbose(b){
	this.options["verbose"] = b;
	this.debugOut("Website Scraper Verbose mode: \x1b[32mENABLED\x1b[0m");
	this.debugOut(" ");
}

debugOut(str){
	if(this.options["verbose"]){
		console.log(str);
	}
}


/**
 * Preform a basic website scrape
 * Returns x colours used in url
 *
 * @param {URL} url the URL to scrape.
 * @param {number} x The amount of colours to return.
 * @return {Array} Array where the hex code is the key, containing an array of the data.
 */
basicScrape(url, x = 10, callback){
	var host = url.split("/")[0]+"//"+url.split("/")[2]+"/";
	this.debugOut("Preforming Basic Scrape '"+url+"' for "+x+" colours");
	this.request(url, function (error, response, body) {
		var ws = WebsiteScraper.getInstance();
		console.error('error:', error);
		ws.debugOut('Status Code: '+response.statusCode);
		var doc  = (new JSDOM(body)).window.document;
		var nodes = doc.querySelectorAll("link");
		var styleNodes = doc.querySelectorAll("style");
		ws.debugOut("Found "+nodes.length+" Link Tags");
		var urlsToPull = [];
	 	for (var i = 0; i < nodes.length; i++) {
	 		ws.debugOut(nodes[i].rel.toLowerCase() + " | "+nodes[i].href);
	 		if(nodes[i].rel.toLowerCase() == "stylesheet"){
	 			if(nodes[i].href.toLowerCase().includes("awesome")){continue;} //SKIP FONTAWESOME
	 			if(nodes[i].href.startsWith("http")){
	 				urlsToPull.push(nodes[i]);
	 			}else{
	 			urlsToPull.push(host+nodes[i].href);
	 		}
	 	}
	 	}
	 	ws.cssCombine(urlsToPull, styleNodes,function(combined){
	 		var resJSON = (new CustomJsonCSS()).toJSON(combined);
	 		ws.cssFilter(combined, resJSON, callback);
	 	});
	});
}


cssFilter(inCSS ,inJsonCSS, callback){
	var outJsonCSS = {};

	var lookupMap = {};

	for (const [keyOne, valueOne] of Object.entries(inJsonCSS)) {
		//WebsiteScraper.getInstance().debugOut(`Checking ${keyOne}: ${valueOne}`);
		var tmpVar = {};
		for (const [keyTwo, valueTwo] of Object.entries(valueOne)) {
			var tmpKey = keyTwo.toLowerCase();
			if(tmpKey == "background" || tmpKey == "background-color"){
				if(valueTwo.includes("#")){
					tmpVar[keyTwo] = valueTwo;
				}
			}
		}
		if(Object.keys(tmpVar).length > 0){



		if(keyOne.trim() != ""){
			var lookedup = lookupMap[(new CustomJsonCSS()).toCSS(tmpVar)];

			if(lookedup != undefined){
				WebsiteScraper.getInstance().debugOut("Used Lookup map to redude elements: "+ lookedup);
				outJsonCSS[lookedup+","+keyOne] = outJsonCSS[lookedup]
				delete outJsonCSS[lookedup];
				lookupMap[(new CustomJsonCSS()).toCSS(tmpVar)] = lookedup+","+keyOne;
			}else{
				outJsonCSS[keyOne] = tmpVar;
				lookupMap[(new CustomJsonCSS()).toCSS(tmpVar)] = keyOne;
			}
		}
		}
	}
	var val = Object.keys(outJsonCSS).length;
	this.debugOut(`There are ${val} CSS elements with colour attributes`);
	var chrisColour = [];
	var rNumber = 0;
	for (const [keyOne, valueOne] of Object.entries(outJsonCSS)) {
		const [keyTwo, valueTwo] = Object.entries(valueOne)[0];
		chrisColour.push({
			id: rNumber,
            location: keyOne,
            colour: valueTwo
		});
		rNumber++;
		}
	
	callback({css: (new CustomJsonCSS()).toCSS(outJsonCSS), json: outJsonCSS, chrisColours: chrisColour});
}


/**
 * Puts all the CSS in to one long file.
 * Returns a long string with the style sheets WARNING: THIS MAY BE BIG IN MEMOROY
 *
 * @param {ArrayList<URL>} urls the style sheets
 * @param {StyleNodes} styleNodes the style sheets to include
 * @return {String} The combined CSS file.
 */
cssCombine(urls, styleNodes, callback){
	this.debugOut(" ")
	this.debugOut("Combining "+urls.length+" files and "+styleNodes.length+" Style tags together.");
	this.debugOut(" ")

	var styleNodesOut = "";
	for (var i = 0; i < styleNodes.length; i++) {
	 	styleNodesOut += (styleNodes[i].innerHTML+"\n");
	}
		var urlsStylesOut = "";
	urls.forEach(function(item){
		WebsiteScraper.getInstance().debugOut("Getting: "+item);
		var res = syncRequest('GET', item);
		urlsStylesOut += (res.getBody()+"\n");
	});	
	var joined = urlsStylesOut+styleNodesOut;
    const regex1 = /<!--(.*?)-->/gm; //REMOVE HTML COMMENTS?
    const regex2 = /(\/\*\!((.|\n)*)\*\/)/gm; //REMOVE CSS COMMENTS
    const regex3 = /(@import url.*\);)/gm; //REMOVE INCLUDES
    joined = joined.replace(regex1, "");
    joined = joined.replace(regex2, "");
    joined = joined.replace(regex3, "");
    // joined = joined.replace(regex1, "");
	callback(joined);
}

}
//This line is needed to allow the class to be included from other locations.
module.exports = WebsiteScraper.getInstance();