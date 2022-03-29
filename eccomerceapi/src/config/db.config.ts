'use strict'

import Mongoose from 'mongoose'
import {APILogger} from '../log/api.logger'
require('dotenv').config();


export class DB{
    private logger:APILogger

    private  database:Mongoose.Connection | undefined

    url: String | undefined;

    constructor(){
        this.logger = new APILogger();
    }

    // private static DB_URI:String = `${process.env.MONGO_URL}`
    connect(url:string = `${process.env.MONGO_URL}`){
        if(this.database){
            return;
        }

        Mongoose.connect(url).then(()=>{
            this.logger.info("connect is succesful",null)
        }).catch((err)=>{
            this.logger.error(err)
        })
        this.database = Mongoose.connection;
        this.database.once('open',async () =>{
            this.logger.info("Connected to database",null);
        })
        this.database.on('error',()=>{
            this.logger.error("Error connecting to database");
        })
    }

    disconnect(){
        if(!this.database){
            return;
        }
        Mongoose.disconnect();
        this.database.once("close", async () => {
            this.logger.info("Diconnected  to database",null);
        });
    }

}

