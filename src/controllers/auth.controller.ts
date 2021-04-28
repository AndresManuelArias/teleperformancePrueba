import {Request,Response} from 'express'
import User ,{IUser} from '../models/User.model';
import jwt from 'jsonwebtoken';

export const signup = async (req:Request,res:Response)=>{
   // save new user
    console.log(req.body)
    const user:IUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    console.log({user})
    user.password = await user.encryptPassword(user.password)
    let saved = await user.save();
    console.log({saved})
    // token
   let token:string = jwt.sign({_id:saved._id},process.env.TOKEN_SECRET||'DKDKDK')

    res.header('auth-token',token).send(saved);
}

export const signin =async (req:Request,res:Response)=>{
   const user =  await User.findOne({email:req.body.email})
   if(!user) return res.status(400).json("Email or password is wrong")
   const correctPassword:boolean = await user.validatePassword(req.body.password,user.password)
   if(!correctPassword) return res.status(400).json("invalid password")
   let token:string = jwt.sign({_id:user._id},process.env.TOKEN_SECRET||'DKDKDK',{
    expiresIn: '1h'
   })

    res.header('auth-token',token).send(user);

}

export const profile = async (req:Request,res:Response)=>{
    console.log(req.header('auth-token')) 
    const user =  await  User.findById(req.userId,{password:0})
    if(!user) return res.status(404).json('no user')

    res.json(user);
}