import { Response } from 'express'


export const responseSucces = (res:Response,statusCode:any,data:any) =>{
    res.status(statusCode).json(data);
}