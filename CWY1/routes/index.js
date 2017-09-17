var express = require('express');
var router = express.Router();
var query=require('./sql');
var session=require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function(req, res, next) {
    var username=req.body.username;
    var password=req.body.password;
    query("select * from user where username=?", [username], function(err,results,fields){
        if(results==""){
            res.locals.err = '用户名或密码错误';
            res.render('index', { title: '登陆' });
        }
        else{
            if(results[0].password==password){
                res.locals.username =username;
                req.session.username = res.locals.username;
                //不要用id这个属性 因为id这个属性是session就有的 会出现乱码
                res.render('user', { title: '登陆' });
                return;
            }else {
                res.locals.err = '用户名或密码错误';
                res.render('index', { title: '登陆' });
            }
        }



    });
});

module.exports = router;
