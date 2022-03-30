import express from "express";
import  APILogger  from "./src/log/api.logger";
import Routes from './src/route'



class App {
    public app: express.Application;

    constructor(){
        this.app = express();
        this.middleware();
        this.routes();
    }

    private middleware():void{
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:false}))
    }

    private routes():void{
        Routes.getAllRoute(this.app,"");
    }
}

export default  new App().app;



