var express = require('express');
var query=require('./sql');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('user', { title: 'Express' });
});
router.post('/', function(req, res, next) {
    var text=req.body.text;
    var mytime=req.body.mytime;
    var username=req.body.username;
    query("insert into talk(username,talk,time)values(?,?,?)", [username,text,mytime], function(err,results,fields){
       res.send("发表成功");
    });
    return ;
})

module.exports = router;