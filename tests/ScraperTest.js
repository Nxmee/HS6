const scraper = require('../custom-modules/website-scraper');

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
  scraper.basicScrape(url,10,function(){
  	console.log("\nScrape Calledback!\nBasic Scrape finished!\n\n");
  });
  readline.close();
});