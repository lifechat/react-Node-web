import app from './app'
import express from 'express';
import {DB} from './src/config/db.config'

import { APILogger } from './src/log/api.logger'
require('dotenv').config();



const PORT:number = 8090

const logger = new APILogger();

app.listen(process.env.PORT || PORT,()=>{
    logger.info(`server listening on port ${PORT}`,null);
})


const db = new DB();

db.connect();
// connect();