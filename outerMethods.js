const fs = require('fs');


let dbPath = './db.json';

exports.find = (callback)=>{
    fs.readFile(dbPath,'utf8',(err,data)=>{
        if (err) {
            return callback(err)
        }
        callback(null,JSON.parse(data).members);
    });
}

