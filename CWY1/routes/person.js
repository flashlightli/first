var express = require('express');
var query=require('./sql');
var router = express.Router();
var promise=require('promise');
var mytalkcount,talkcount,usercount;

router.get('/:username', function(req, res, next) {
    var username=req.params.username;
    var promise = new Promise(function(resolve, reject) {
        resolve(username);//resolve（）会在本轮最后一个被执行 传入username的值
    });

    promise.then(function (username) {
        query("select count(*) from talk where username=?",[username], function (err, results, fields) {
            console.log(username);
            var array=results[0];
            mytalkcount=array['count(*)'];  //获取集合元素 [集合的属性名称]
        });
    })
        .then(function () {
            query("select count(*) from user", function (err, results, fields) {
                var array=results[0];
                usercount=array['count(*)'];  //获取集合元素 [集合的属性名称]
            });
        })
        .then(function () {
            query("select count(*) from talk", function (err, results, fields) {
                var array=results[0];
                talkcount=array['count(*)'];  //获取集合元素 [集合的属性名称]
            });
        })
        .then(function () {
            res.render('person',{username:username,talkcount:talkcount,usercount:usercount,mytalkcount:mytalkcount});
        })
});

module.exports = router;


