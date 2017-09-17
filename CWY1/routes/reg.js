var express = require('express');
var query=require('./sql');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('reg', { title: '注册' });
});

router.post('/', function(req, res, next) {

    var password=req.body.password;
    var username=req.body.username;

    query("insert into user(username,password)values(?,?)", [username,password], function(err,results,fields){
        console.log('注册成功');
        res.locals.success = '注册成功,请点击   <a class="btn btn-link" href="/" role="button"> 登录 </a>'
        res.render('reg',{title:'注册'});
    });

});

module.exports = router;