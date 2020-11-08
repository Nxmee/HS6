const express = require('express');
const path = require('path');
const scraper = require('./src/website-scraper');
const app = express();


app.use(express.static(path.join(__dirname, 'build')));

app.get('/enable-verbose',function(req,res){
	scraper.setVerbose(true);
	res.send("Verbose mode enabled!");
});

app.get('/disable-verbose',function(req,res){
	scraper.setVerbose(false);
	res.send("Verbose mode disabled!");
});

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
	  });
	
});

app.get('/hey', (req, res) => res.send('ho!'));

app.listen(8102, ()=>{ //Changed so that when running on the MinePoS server it is on a preallowed port.
	console.log(`Listening on http://localhost:8102`);
})