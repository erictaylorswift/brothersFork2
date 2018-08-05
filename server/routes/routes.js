var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();
router.get('/', function(req, res){
    fetch('https://api.fortnitetracker.com/v1/profile/pc/lonefreak', {
        method: "GET",
        mode: "no-cors",
        credentials: "include",
        headers: {
        "TRN-Api-Key": "582365b9-87d8-4c86-af13-a4c0caaec1b1"
    }
    }).then(results => {
        return results.json();
    }).then((data)=>{
        return res.render('index', {data:JSON.stringify(data)})

    })
});
module.exports = router;
