import {mapperDemo} from '../mapper/mapperDemo'


export class DemoService{

    private mapper:mapperDemo;

    constructor(){
        this.mapper = new mapperDemo();
    }

    async getDemo(){
        return await this.mapper.getDemo();
    }

    async createDemo(demo:any){
        return await this.mapper.createDemo(demo);
    }

    async updateDemo(demo:any){
        return await this.mapper.updateDemo(demo);
    }

    async deleteDemo(demoId:any){
        return await this.mapper.deleteDemo(demoId);
    }

}