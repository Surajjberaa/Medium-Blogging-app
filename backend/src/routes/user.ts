import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, jwt, sign, verify } from 'hono/jwt'
import { signupschema, signinschema } from "@surajbera/medium-common/dist"

export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string
      JWT_SECRET: string
    }
  }>()


userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json();
    const { success } = signupschema.safeParse(body)
    if(!success){
        c.status(411)
        return c.text("Invalid inputs")
    }
  try{
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password, 
        name: body.name
      }
    })
  
    const token = await sign({id: user.id}, c.env.JWT_SECRET)
  
    return c.json({
      jwt: token
    })}catch(e){
      console.log(e);
      
      c.status(411)
      return c.text("Invalid")
    }
  })
  
  
  userRouter.post('/signin', async (c) => {
      const prisma = new PrismaClient({
          datasourceUrl: c.env?.DATABASE_URL	,
      }).$extends(withAccelerate());
  
      const body = await c.req.json();
      const {success} = signinschema.safeParse(body)
    if(!success){
        c.status(411)
        return c.text("Invalid inputs")
    }
      try{
      const user = await prisma.user.findFirst({
          where: {
                email: body.email,
                password: body.password
          }
      })
    console.log(user);
    
  
      if (!user) {
          c.status(403);
          return c.json({ error: "Invalid Credentials" });
      }
  
      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({ jwt });
  }catch(e){
    c.status(403)
    return c.json({
      message: "Invalid Credentials"
    })
  }
  })
  