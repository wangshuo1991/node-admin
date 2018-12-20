const express = require('express');

const fs = require('fs');

const outerMethods = require('./outerMethods');

const router = express.Router();

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


// 记得导出路由
module.exports = router;