import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {  sign } from 'hono/jwt'
import bcrypt from 'bcrypt'
export const userRouter = new Hono<{
  Bindings:{
    DATABASE_URL: string,
    JWT_SECRET: string
  }
  
  

}>()

//SIGNUP

userRouter.post('/signup' , async(c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())
  const body = await c.req.json()
  
  // const hashedPassword = await bcrypt.hash(body.password, 3) // 3 is the number of rounds of hashing to be done more rounds more secure
    await prisma.user.create({
      data:{
        email : body.email,
        name : body.name,
        password: body.password,
      } 
    })
    const token = await sign({email: body.email}, c.env.JWT_SECRET)
    return c.json({message: 'Signup Success' , token})
  })
  
  //SIGNIN
  
  userRouter.post('/signin' , async (c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())
    const body = await c.req.json()
  
    const user = prisma.user.findFirst({
      where:{
        email: body.email,
      }
    })
  
  
    if(!user){
      return c.json({message: 'User not found'})
    }
    const userResult = await user; // we cant do user.password directly because it is a promise so we have to await it
    if (!userResult) {
      return c.json({ message: 'User not found' });
    }
  
    // const isPasswordMatch = await bcrypt.compare(body.password, userResult.password);
    // const isPasswordMatch = body.password === userResult.password;
    // if(!isPasswordMatch){
    //   return c.json({message: 'Password does not match'})
    // }
  
    //all good then sign the token
    const token = await sign({email: body.email}, c.env.JWT_SECRET)
    return c.json({message: 'Signin Success' , token})
  })