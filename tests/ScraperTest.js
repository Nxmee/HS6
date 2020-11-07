const scraper = require('../custom-modules/website-scraper');

//Place scraper in verbose mode.

scraper.setVerbose(true);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('What website would you like to scrape?', url => {
  console.log(`Test Scraping ${url}, now passing off to website scraper class!`);
  scraper.basicScrape(url);
  readline.close();
});