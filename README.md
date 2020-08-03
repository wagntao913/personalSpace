# personalSpace
个人学习  nodejs+vue 全栈

#技术栈
- Node.js  
- [Nest.js](https://docs.nestjs.com/) 
- [Vue]()

# 项目运行
克隆项目
> git clone git@github.com:wagntao913/personalSpace.git  

打开项目目录,安装依赖
admin 后台管理系统
> cd admin
> npm install
> npm run serve    

server 服务端(admin --- admin后台服务   server --- web后台服务)
> cd server
> npm install
> nest start -w admin/server

# 项目目录
``` 
+---admin                   前端--后台管理系统
|   +---public   
|   \---src  
|       +---assets          静态资源文件
|       +---components      公用组件
|       +---plugins         插件
|       +---router          路由
|       \---views           页面
|           \---user
\---server                  后端--服务端代码
    +---apps                
    |   +---admin           后端管理系统服务端代码
    |   |   +---src
    |   |   |   \---user    用户模块
    |   |   \---test
    |   \---server          web界面服务端你代码
    |       +---src
    |       \---test
    \---libs                 
        \---db
            \---src
                \---models
```