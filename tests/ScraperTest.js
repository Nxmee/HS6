const scraper = require('../custom-modules/website-scraper');
const fs = require('fs');
//Place scraper in verbose mode.

scraper.setVerbose(true);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('What website would you like to scrape? ', url => {
	if(url == ""){
		url = "https://nxmee.com";
	}
  console.log(`Test Scraping ${url}, now passing off to website scraper class!`);
  scraper.basicScrape(url,10,function(res){
   
  	var name = Math.round(Date.now() / 1000)+"_"+url.split("/")[2];

  	fs.writeFileSync('./'+name+'.css', res["css"]);
	fs.writeFileSync('./'+name+'.json', JSON.stringify(res["json"]));
	fs.writeFileSync('./'+name+'-chrisColours.json', JSON.stringify(res["chrisColours"]));

  	console.log("\nScrape Calledback!\nBasic Scrape finished!\n\n");
  });
  readline.close();
});