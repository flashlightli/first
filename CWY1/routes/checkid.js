var express = require('express');
var query=require('./sql');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('reg', { title: 'Express'  });
});
router.post('/', function(req, res, next) {
    var username = req.body.username;
    query("select * from user where username=?", [username], function (err, results, fields) {
        if (results=="") {
           res.send("该用户名可以使用"+",1");
        }else {
            res.send("该用户名已被注册"+",0");
        }
        return;
    });
})

module.exports = router;