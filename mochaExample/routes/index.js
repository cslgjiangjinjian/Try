var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'testPage' });
});
router.get('/about',function(req,res){
    res.render('about',{
        title:'this is a title',
        test:'this is a test for about',
        pageTestScript:'/qa/tests-about.js'
    });
});

module.exports = router;
