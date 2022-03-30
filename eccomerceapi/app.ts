import express from "express";
import { APILogger } from "./src/log/api.logger";
import { DemoControllers } from "./src/controller/DemoController";
import swaggerUi = require('swagger-ui-express');
import {Routes} from './src/route'
import fs = require('fs')



class App {
    public app: express.Application;
    public logger: APILogger;
    public route:Routes;

    constructor(){
        this.app = express();
        this.logger = new APILogger();
        this.route = new Routes();
        this.middleware();
        this.routes();
    }

    private middleware():void{
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:false}))
    }

    private routes():void{
        this.route.getAllRoute(this.app,"");
        // this.app.get("/",(req,res,next)=>{
        //     res.send("Typescript App works!!");
        //     this.logger.info("Typescript App works!!",null)
        // })

        // this.app.use("*", (req, res, next) => {
        //     res.send("Make sure url is correct!!!");
        // });
    }
}

export default  new App().app;



