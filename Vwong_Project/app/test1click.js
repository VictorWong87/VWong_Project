const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://www.imdb.com/title/tt0120812/?ref_=nv_sr_1';

// puppeteer
//   .launch()
//   .then(function(browser) {
//     return browser.newPage();
//   })
//   .then(function(page) {
//     return page.goto(url).then(function() {
//       return page.content();
//     });
//   })
//   .then(function(html) {
//     $('a', html).each(function() {
//       console.log($(this).text());
//     })
//   })
//   .catch(function(err) {
//     //handle error
//   });

  puppeteer
  .launch()
  .then(function(browser) {
    return browser.newPage();
  })
  .then(function(page) {
    return page.goto(url).then(function() {
      return page.content();
    });
  })
  .then(function(html) {
    $('div#titleDetails.article', html).each(function() {
      console.log($(this).text());
    })
  })
  .catch(function(err) {
    //handle error
  });

  // return $(".div").append('div');

return 