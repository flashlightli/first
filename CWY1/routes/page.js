var express = require('express');
var query=require('./sql');
var router = express.Router();

router.get('/one', function(req, res, next) {
    var username=req.session.username;
    query("select * from talk limit 0,5", function (err, results, fields) {
        res.render('talk',{datas:results,qpage:1,username:username});
    });
});


router.get('/:qpage', function(req, res, next) {
    var username=req.session.username;
    var qpage=req.params.qpage;
    if(qpage<=1){
        query("select * from talk limit 0,5", function (err, results, fields) {
            res.render('talk',{datas:results,qpage:1,username:username});
        });
    }
    if(qpage>1) {
        query("select * from talk limit ?,?", [(qpage-1)*5,(qpage-1)*5+5],function (err, results, fields) {
               if(results==""){
                   res.render('talk',{datas:results,qpage:qpage--,username:username});
               }else {
                   res.render('talk',{datas:results,qpage:qpage++,username:username});
               }
        });
    }
});


module.exports = router;


