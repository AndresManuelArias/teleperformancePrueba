import RandomSchema ,{IRandom} from '../models/random.model';
import faker from "faker";
import {Request,Response} from 'express';


export const randomup = async (req:Request, res:Response)=>{
    // save new user
     console.log(req.body)
     const random:IRandom = new RandomSchema({
        number:faker.datatype.number(),
        uuid:faker.datatype.uuid(),
        image:faker.random.image(),
        name:faker.name.findName(),
     })
     console.log({random})
     let saved = await random.save();
     console.log({saved})
     // token
     const ram:IRandom[] =  await RandomSchema.find()
     
     res.status(200).json(ram)
 }