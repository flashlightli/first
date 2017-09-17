var express = require('express');
var query=require('./sql');
var router = express.Router();

router.get('/:username/one', function(req, res, next) {
    var username=req.params.username;
    console.log(username);
    query("select * from talk  where username=? limit 0,5", [username],function (err, results, fields) {
        res.render('mytalk',{datas:results,qpage:1,username:username});
    });
});


router.get('/:username/:qpage', function(req, res, next) {
    var username=req.params.username;

    var qpage=req.params.qpage;
    if(qpage<=1){
        query("select * from talk  where username=? limit 0,5", [username], function (err, results, fields) {
            res.render('mytalk',{datas:results,qpage:1,username:username});
        });
    }
    if(qpage>1) {
        query("select * from talk  where username=? limit ?,?", [username,(qpage-1)*5,(qpage-1)*5+5],function (err, results, fields) {
            if(results==""){
                res.render('mytalk',{datas:results,qpage:qpage--,username:username});
            }else {
                res.render('mytalk',{datas:results,qpage:qpage++,username:username});
            }
        });
    }
});


module.exports = router;


