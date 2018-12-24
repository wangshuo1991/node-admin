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

