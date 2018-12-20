const fs = require('fs');


let dbPath = './db.json';

// 渲染首页
exports.find = (callback)=>{
    fs.readFile(dbPath,'utf8',(err,data)=>{
        if (err) {
            return callback(err)
        }
        callback(null,JSON.parse(data).members);
    });
}

// 添加新成员 
exports.add = (member,callback)=>{
    fs.readFile(dbPath,'utf8',(err,data)=>{
        if (err) {
            return callback(err)
        }
        let members = JSON.parse(data).members;
        member.id = members[members.length - 1].id + 1;
        members.push(member);

        let fileData = JSON.stringify({
            members: members
        });
        fs.writeFile(dbPath,fileData,(err)=>{
            if (err) {
                return callback(err);
            }
            callback(null);
        });
    });
}

