var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

router.get('/', function(req, res){
  let urls = [
    'https://api.fortnitetracker.com/v1/profile/pc/lonefreak',
    'https://api.fortnitetracker.com/v1/profile/pc/Grùmpy',
    'https://api.fortnitetracker.com/v1/profile/pc/ellis endo',
    'https://api.fortnitetracker.com/v1/profile/pc/Ambrosiann',
    'https://api.fortnitetracker.com/v1/profile/pc/BawseMane',
  ];
  let requests = urls.map(url => fetch(url, {
      method: "GET",
      mode: "no-cors",
      credentials: "include",
      headers: {
      "TRN-Api-Key": "582365b9-87d8-4c86-af13-a4c0caaec1b1"
      }
  }));

  Promise.all(requests)
    .then(responses=> Promise.all(responses.map(r => r.json())))
    // .then(users => users.forEach(user => user.json()))
    .then((data)=> {
      return res.render('index', {data:JSON.stringify(data)})
    })
});

module.exports = router;
