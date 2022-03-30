'use strict'

import Mongoose from 'mongoose'
import APILogger from '../log/api.logger'
require('dotenv').config();


class DB{

    private  database:Mongoose.Connection | undefined

    url: String | undefined;

    constructor(){}

    // private static DB_URI:String = `${process.env.MONGO_URL}`
    connect(url:string = `${process.env.MONGO_URL}`){
        if(this.database){
            return;
        }

        Mongoose.connect(url).then(()=>{
            APILogger.info("connect is succesful",null)
        }).catch((err)=>{
            APILogger.error(err)
        })
        this.database = Mongoose.connection;
        this.database.once('open',async () =>{
            APILogger.info("Connected to database",null);
        })
        this.database.on('error',()=>{
            APILogger.error("Error connecting to database");
        })
    }

    disconnect(){
        if(!this.database){
            return;
        }
        Mongoose.disconnect();
        this.database.once("close", async () => {
            APILogger.info("Diconnected  to database",null);
        });
    }

}


export default new DB();
