var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

app.get('/', function(req, res){
request('https://www.zhihu.com/', function (error, response, body) {
  //https://www.zhihu.com/robots.txt  robots.txt 文件是设置是否允许爬的
  if (!error && response.statusCode == 200) {
    $ = cheerio.load(body);//当前的$他是拿到了整个body前端选择器
    //console.log(body) // Show the HTML for the Google homepage. 
    //https://www.npmjs.com/package/cheerio更多的操作看这里
    res.json({
      'sns':$('.sns-buttons').length
    })
  }
})
});

app.listen(3000);