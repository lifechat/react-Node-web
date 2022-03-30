import {DB} from "../config/db.config"
import {IDemoModel} from "../model/DemoModel"
import {APILogger} from "../log/api.logger"



export class mapperDemo {
    private logger:APILogger;

    constructor(){
        new DB().connect();
        this.logger = new APILogger();
    }   

    async getDemo(){
        const Demo = await IDemoModel.find({});
        console.log('tasks:::', Demo);
        return Demo;
    }

    async createDemo(demo:any){
        let data = {};
        try {
            data = await IDemoModel.create(demo);
        } catch (error) {
            this.logger.error('Error::' + error);
        }

        return data;
    }

    async updateDemo(demo:any){
        let data = {};
        try {
            data = await IDemoModel.updateOne(demo);
        } catch (error) {
            this.logger.error("Error::"+error);
        }

        return data;
    }
    async deleteDemo(demoid:any){
        let data:any = {}
        try {
            data = await IDemoModel.deleteOne({_id:demoid});
        } catch (error) {
            this.logger.error("Error::"+error);
        }

        return {status:`${data.deletedCount > 0 ? true : false}`}
    }
}