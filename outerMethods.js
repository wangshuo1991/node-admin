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

// 点击编辑页面 通过id获取这条数据

exports.findByIndex = (id,callback)=>{

    fs.readFile(dbPath,'utf8',(err,data)=>{
        if (err) {
            return callback(err)
        }
        //callback(null,JSON.parse(data).members);
        id = parseInt(id);
        let members = JSON.parse(data).members;
        let result = members.find(item=>{
            return item.id === id;
        });

        callback(null,result);
    });

}

// 保存编辑 

exports.save = (member,callback)=>{

    fs.readFile(dbPath,'utf8',(err,data)=>{
        if (err) {
            return callback(err)
        }
        //callback(null,JSON.parse(data).members);

        let members = JSON.parse(data).members;
        member.id = parseInt(member.id);
        let result = members.find(item=>{
            return item.id === member.id;
        });

        // 改变result 这个取出来的内容
        for (const key in result) {
            if (result.hasOwnProperty(key)) {
                result[key]=member[key];
            }
        }

        let fileData = JSON.stringify({
            members: members
        });

        fs.writeFile('./db.json',fileData,(err)=>{
            if (err) {
                return callback(err);
            }

            callback(null);
        });
    });


}
