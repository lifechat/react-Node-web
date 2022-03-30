import {Application,Response,Request } from 'express'
import DemoControllers from '../controller/DemoController'

export class Routes{

    private auth:undefined;

    constructor(){}

    getAllRoute(app:Application,auth:any){

        // User模块
        
        app.route('/api/test').get((res,req)=>{
            req.send('test api ')
        })

        app.post('/api/task', (req, res) => {
            console.log(req.body);
            DemoControllers.createDemo(req.body).then(data => res.json(data));
        });

        app.get('/api/tasks', (req, res) => {
            DemoControllers.getDemo().then(data => res.json(data));
        });
        // Cart模块

        // Order模块

        // product模块

        // app.route('/api/demo').get(())
        // , (req, res) => {
        //     // res.json()
        //     // this.DemoControllers.getDemo.then(data => res.json(data));
        // });
        // 匹配不到后台路由路径
        app.use("*", (req, res, next) => {
            res.send("Make sure url is correct!!!");
        });
    }   

}


export default new Routes();