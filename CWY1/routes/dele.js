var express = require('express');
var query=require('./sql');
var router = express.Router();

router.get("/:username/:id",function(req,res){
    var id = req.params.id;
    //var qpage=req.params.qpage;
    var username=req.params.username;
    query("delete from talk where id = " + id,function(err,rows){
        if(err){
            res.send("删除失败"+err);
        }else {
            query("select * from talk where username=? limit 0,5", [username],function (err, results, fields) {
                res.render('mytalk',{datas:results,username:username,qpage:1})
            });
        }
    });
});
module.exports = router;


