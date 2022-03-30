const pine = require('pine');

const logger = pine();


 class APILogger{

    info(message:string,data:any){
        logger.info(`${message} ${undefined != data ? JSON.stringify(data) : ''}` );
    }

    error(message:string){
        logger.error(message);
    }
}

export default new APILogger();