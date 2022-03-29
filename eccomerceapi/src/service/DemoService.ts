import {mapperDemo} from '../mapper/mapperDemo'


export class DemoService{

    private mapper:mapperDemo;

    constructor(){
        this.mapper = new mapperDemo();
    }

    async getDemo(){
        return await this.mapper
    }

    async createDemo(){
        return await this.mapper;
    }

    async updateDemo(){
        return await this.mapper;
    }

    async deleteDemo(){
        return await this.mapper;
    }

}