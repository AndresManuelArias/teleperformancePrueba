import {Schema, model, Document} from "mongoose";
export interface IRandom extends Document {
    number:string;
    uuid:string;
    image:string;
    name:string;
}

const randomSchema = new Schema({
    number:{
        type:String
    },
    uuid:{
        type:String
    },
    image:{
        type:String
    },
    name:{
        type:String
    },
})




export default  model<IRandom>('IRandom', randomSchema)