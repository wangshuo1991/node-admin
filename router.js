const express = require('express');

const fs = require('fs');

const outerMethods = require('./outerMethods');

const router = express.Router();

// -> '/' 渲染首页
router.get('/',(req,res)=>{
    outerMethods.find((err,members)=>{
        if (err) {
            return res.status(500).send('server error');
        }
        res.render('index.html',{
            members: members,
            exs: ["成员统计","活跃人数","成员总数"]
        });
    });
});

// 渲染 新成员的页面
router.get('/members/add',(req,res)=>{  
    res.render('add.html');
});

// 添加新成员
router.post('/members/add',(req,res)=>{

    let content = req.body;
    
    new outerMethods(content).save((err)=>{
        if (err) {
            return res.status(500).send('server error');
        }
        res.redirect('/');
    });

})

// 编辑页面

router.get('/members/edit',(req,res)=>{

    let id = req.query.id.replace(/"/g,'');
    outerMethods.findById(id,(err,result)=>{
        if (err) {
            return res.status(500).send('server error');
        }
        res.render('edit.html',{
            member: result
        });
    });

});

//  确认编辑 提交编辑

router.post('/members/edit',(req,res)=>{

    let member = req.body;
    let id = req.body.id.replace(/"/g,'');
    outerMethods.findByIdAndUpdate(id,member,(err)=>{
        if (err) {
            return res.status(500).send('server error');
        }
        res.redirect('/');
    });

});


// 删除数据

router.get('/members/delete',(req,res)=>{

    let id = req.query.id.replace(/"/g,'');

    outerMethods.findByIdAndRemove (id,(err)=>{
        if (err) {
            return res.status(500).send('server error');
        }
        res.redirect('/');
    });
});


// 记得导出路由
module.exports = router;