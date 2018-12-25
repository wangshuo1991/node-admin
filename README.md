## 基于node的增删改查的功能

### 项目运行

```shell

    cd node-admin

    npm install

    node app.js

    ## server is running on port 2020

``` 

### 主要功能

- 删除功能
  
  ```javascript

    // splice 不可 数组元素随机删除 
    ary.splice(index,1);

    // -> 正确： filter , 只保留不是目标删除id
    ary.filter(item=>{
        return item.id != id;
    });

  ```
  
  ### node中mongoose数据库的使用
  
  - 设计schema 发布model
  
    ```javascript
    
        const mongoose = require('mongoose')
        
        // 链接数据库
        mongoose.connect('mongodb://localhost/users')
        
        // 创建 schema
        const Schema = mongoose.Schema
        
        // 设计schema 
        let dataSchema = new Schema({
            name: {
                type: String
            },
            age: {
                type: Number
            }
        })
        
        // 发布 model
        module.exports = moongoose.model('data',dataSchema)
    ```

