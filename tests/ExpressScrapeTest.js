const express = require("express");
const scraper = require('../custom-modules/website-scraper');
scraper.setVerbose(true);
const app = express();
const port = 3001;

app.get('/colours.json', function(req,res){
	let url = req.query.url;
	if(url == undefined){
		res.send("MISSING PARAM");
		return;
	}
	url = Buffer.from(url, 'base64').toString();
	console.log(url);
	 scraper.basicScrape(url,10,function(resOut){
		res.json(({SiteUrl: url,colours:resOut["chrisColours"]}));
	  	console.log("\nScrape Calledback!\nBasic Scrape finished!\n\n");
	  });
	
});

app.listen(port, ()=>{
	console.log(`Listening on http://localhost:${port}`);
})