import { model,Schema,Document,Model} from 'mongoose'


export interface IUser extends Document{
    username:string,
    email:string,
    password:string,
    isAdmin:boolean,
    timestamp:boolean
} 

const UserSchema = new Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:Boolean,required:true},
    isAdmin:{type:Boolean,default:false},
    timestamp:{type:Boolean,required:true}
})


export const IUserModel:Model<IUser> = model<IUser>('user',UserSchema);