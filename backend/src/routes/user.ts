import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, jwt, sign, verify } from 'hono/jwt'
import { signupschema, signinschema } from "@surajbera/medium-common/dist"
import { Jwt } from "hono/utils/jwt";

export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string
      JWT_SECRET: string
      ADMIN_KEY: string
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

  userRouter.get("/userdetails", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());

    const header = c.req.header("authorization")
    const token  = header?.split(" ")[1] || ""

    try{
      const id: number = decode(token).payload.id
      console.log(id);
      
      const user = await prisma.user.findFirst({
        where: {
          id: id
        },
        select: {
          name: true,
          email: true
        }
      })
      
      return c.json({
        user
      })
    }catch(e){

    }
  })

  userRouter.put('/createAdmin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());

    const {userId, key} = await c.req.json();
    try {
      
      if (key !== c.env.ADMIN_KEY) {
        c.status(401)
        return c.json({ message: 'Invalid admin key' });
      }

      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
          role: 'ADMIN',
        },
        select: {
          name: true,
          id: true,
          role: true,
          email: true

        }
      })

      return c.json({ message: 'User role updated to ADMIN successfully', user: updatedUser });

    } catch (error) {
      console.error('Error creating admin:', error);
      c.status(500)
      return c.json({ error: 'Failed to create admin' });
    }
    
})

  userRouter.put('/removeAdmin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());

    const {userId, key} = await c.req.json();
    try {
      
      if (key !== c.env.ADMIN_KEY) {
        c.status(401)
        return c.json({ message: 'Invalid admin key' });
      }

      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
          role: 'USER',
        },
        select: {
          name: true,
          id: true,
          role: true,
          email: true

        }
      })

      return c.json({ message: 'User role updated to USER successfully', user: updatedUser });

    } catch (error) {
      console.error('Error removing admin:', error);
      c.status(500)
      return c.json({ error: 'Failed to remove admin' });
    }
    
})
  

userRouter.get("/allUsers", async (c)=> {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL	,
}).$extends(withAccelerate());

  try{

    const allUsers = await prisma.user.findMany(
      {
        select: {
          name: true,
          id: true,
          email: true,
          role: true,

        }
      }
    )
    return c.json(allUsers)
  }catch(e){
    return c.json({
      meassage: "Error finding the users",
      error: e
    })
  }

})