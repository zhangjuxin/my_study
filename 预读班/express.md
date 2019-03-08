# express

​    

app.get('/zhang', [function(req, res, next) {

​        res.end('1');

​        next();

​    }, function(req, res) {

​        console.log('-----------------哈哈');

​    }])





expressjs里的请求参数，4.x里只有3种

- req.params
- req.body
- req.query

#### req.params

```
app.get('/user/:id', function(req, res){ 
res.send('user ' + req.params.id);
});
```

俗点：取带冒号的参数

#### req.body

```
var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer'); 
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data
app.post('/', function (req, res) { 
  console.log(req.body); 
  res.json(req.body);
})
```

可以肯定的一点是req.body一定是post请求，express里依赖的中间件必须有bodyParser，不然req.body是没有的。

详细的说明在下面的3种post用法里。

#### req.query

query是querystring

说明req.query不一定是get

```js
// GET /search?q=tobi+ferret
req.query.q
// => "tobi ferret"// 
GET /shoes?order=desc&shoe[color]=blue&shoe[type]=conversereq.query.order
// => "desc"
req.query.shoe.color
// => "blue"
req.query.shoe.type
// => "converse"
```

因为有变态的写法

```
// POST /search?q=tobi+ferret
{a:1,b:2}
```

作者：俊瑶先森

链接：https://www.jianshu.com/p/c2cd8ee61722

来源：简书

简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。

url在解析过程是会被逐级删减。如：

```js
// app.js
...
var express = require('express');
var users = require('users');
var app = express();

app.use('/users', users);

module.exports = app;
// users.js
var express = require('express');
var router = express.Router();

router.count = 0;

// 错误的写法
/*
router.get('/users/id', function(req, res, next) {
    res.send('/user/id');
});
*/

// 正确的写法
router.get('/id', function(req, res, next) {
    res.send('/user/id');
});

module.exports = router;
```

采用第一种写法，浏览器会得到404 Not Found。第二种则正常。原因即在于，url在解析过程是会被逐级删减。

通过node-inspector调试上面的例子，可得到运行中req.url，req.originalUrl，req.baseUrl的值。

```
// Debug Console
> req.url
"/id"
> req.originalUrl
"/user/id"
> req.baseUrl
"/user"
```

解释如下：
req.url = req.originalUrl - req.baseUrl。也是router.get传入的匹配路径的匹配对象。这也就可以解释上面的例子的运行结果了。all，post，put等等函数同理。

req.originalUrl与req.url类似。不同的是，它用于备份最初的请求url，从而你可以随意重写req.url来到处跳转，而不用担心丢失初始的url。比如，用于挂载中间函数的app.use()就会重写req.url来压缩挂载点的长度。

req.baseUrl存储当前router挂载的路径。即`app.use('/path', router);`。此时/path就是baseUrl。即便在挂载的时候使用的是正则等匹配表达式，baseUrl存储的也会是匹配的字符串，而不是正则表达式

Cookie:https://blog.csdn.net/yangyiboshigou/article/details/72181958