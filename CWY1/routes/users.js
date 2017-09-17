var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    if(req.session.username)
    {
        res.locals.username= req.session.username;
        res.render('user', { title: '登陆' });
    }

});

module.exports = router;
