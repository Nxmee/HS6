class WebsiteScraper {
// This class will be responsible for getting the HTML DOM, then CSS files.
// Andrew Aubury

constructor(options) {  // Constructor
    this.options = options;
}

setVerbose(b){
	this.options["verbose"] = b;

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
basicScrape(url, x = 10){
	console.log("Preforming Basic Scrape '%s' for %d colours",url,x);
}


}

//This line is needed to allow the class to be included from other locations.
module.exports = new WebsiteScraper(
						{verbose: fasle}
					);