import {model,Schema,Document,Model} from 'mongoose'

export interface ICart extends Document {

}

const CartSchema = new Schema({

})


export const ICartModel:Model<ICart> = model<ICart>('cart',CartSchema);