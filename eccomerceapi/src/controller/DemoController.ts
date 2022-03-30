import APILogger  from '../log/api.logger'
import {DemoService} from '../service/DemoService'


 class DemoControllers{

    public demoservice:DemoService;
    constructor(){
        this.demoservice = new DemoService();
    }   

    async getDemo() {
        console.log(this.demoservice)
        // this.logger.info('Controller: getDemo', null)
        return await this.demoservice.getDemo();
    }

    async createDemo(demo:any) {
        APILogger.info('Controller: createDemo', demo);
        return await this.demoservice.createDemo(demo);
    }

    async updateDemo(demo:any) {
        APILogger.info('Controller: updateDemo', demo);
        return await this.demoservice.updateDemo(demo);
    }

    async deleteDemo(demoid:any) {
        APILogger.info('Controller: deleteDemo', demoid);
        return await this.demoservice.deleteDemo(demoid);
    }
    
}


export default new DemoControllers();