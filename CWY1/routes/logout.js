var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
    console.log("22222");
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;