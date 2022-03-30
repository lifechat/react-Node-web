import {Application,Response,Request } from 'express'

export class Routes{

    private auth:undefined;

    constructor(){

    }

    getAllRoute(app:Application,auth:any){

        // User模块
        app.route('/api/test').get((res,req)=>{
            req.send('test api ')
        })

        // Cart模块

        // Order模块

        // product模块

        // 匹配不到后台路由路径
        app.use("*", (req, res, next) => {
            res.send("Make sure url is correct!!!");
        });
    }   

}