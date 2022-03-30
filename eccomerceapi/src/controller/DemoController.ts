import { APILogger } from '../log/api.logger'
import {DemoService} from '../service/DemoService'


export class DemoControllers{

    private demoservice:DemoService;
    private logger:APILogger;
    constructor(){
        this.demoservice = new DemoService();
        this.logger = new APILogger();
    }   


    
}


