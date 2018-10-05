const rp = require('request-promise');
const url = 'https://www.dramafever.com';

rp(url)
  .then(function(html){
    //success!
    console.log(html);
  })
  .catch(function(err){
    //handle error
  });
