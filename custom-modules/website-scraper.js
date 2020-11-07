let instance = null;
let jsdom = require("jsdom");
let { JSDOM } = jsdom;

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
	 			urlsToPull.push(doc.location.origin+nodes[i].href);
	 		}
	 	}
	 	ws.cssCombine(urlsToPull, styleNodes,function(combined){
	 		WebsiteScraper.getInstance().debugOut("Combined CSS Follows\n====\n"+combined+"====\n");
	 		callback();
	 	});
	});
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

	
	callback(styleNodesOut);
}

}
//This line is needed to allow the class to be included from other locations.
module.exports = WebsiteScraper.getInstance();