import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import bcrypt from 'bcrypt'
import {middleware}  from './middleware'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
const app = new Hono<{
  Bindings:{
    DATABASE_URL: string,
    JWT_SECRET: string
  }

}>()
middleware(app)
app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)




export default app