import app from './app'

import  APILogger from './src/log/api.logger'
require('dotenv').config();



const PORT:number = 8090


app.listen(process.env.PORT || PORT,()=>{
    APILogger.info(`server listening on port ${PORT}`,null);
})