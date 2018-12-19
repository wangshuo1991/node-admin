const express = require('express');
const app = express();

// 模板引擎
app.engine('html', require('express-art-template'));

// 静态资源
app.use('/public/',express.static('./public/'));
app.use('/node_modules/',express.static('./node_modules/'));

app.get('/',(req,res)=>{
    res.render('index.html',{
        students: [
            {
                id: 1,
                name: 'wangshuo',
                age: 27,
                gender: 0,
                from: 'HeNan',
                job: 'man'
            }
        ]
    });
});

app.listen(2020,()=>{
    console.log('server is running on port 2020');
});