import { Response } from 'express'


export const responseError = (res:Response,statusCode:any,error:any) =>{
    res.status(statusCode).json(error);
}