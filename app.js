const express = require('express');
const app = express();

// 引入路由
const router = require('./router');

// 引入 中间件 post
let bodyParser = require('body-parser');
//此中中间件的作用是获得请求体字符串，然后转成对象赋值给req.body
app.use(bodyParser.urlencoded({extended:true}));
//判断请求体格式是不是json格式，如果是的话会调用JSON.parse方法把请求体字符串转成对象
app.use(bodyParser.json());

// 模板引擎
app.engine('html', require('express-art-template'));

// 静态资源
app.use('/public/',express.static('./public/'));
app.use('/node_modules/',express.static('./node_modules/'));

// 挂载路由
app.use(router);

app.listen(2020,()=>{
    console.log('server is running on port 2020');
});