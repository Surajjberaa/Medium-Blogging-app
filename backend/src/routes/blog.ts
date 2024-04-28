import { Hono } from "hono";
import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, jwt, sign, verify } from 'hono/jwt'
import { createBlogSchema, updateBlogSchema } from "@surajbera/medium-common/dist";


export const blogRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string
      JWT_SECRET: string
    },
    Variables: {
        authorId: number
    }
  }>()

blogRouter.use('/*', async (c, next) => {

    const header = c.req.header("authorization")
    const token  = header?.split(" ")[1] || ""
  
    try{
        const response = await verify(token, c.env.JWT_SECRET)
    if(response.id){
        c.set("authorId", response.id)
        await next()

    }else{
      c.status(403)
      return c.json({error: "unauthorized"})
    }}catch(e){
        c.status(411)
        return c.json({msg: "You are not logged in"})
    }
    
  })
  

blogRouter.post('/', async (c) => {
    const body = await c.req.json()

    const {success} = createBlogSchema.safeParse(body)
    if(!success){
      c.status(411)
      return c.json({
        message: "Invalid inputs"
      })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
    
      const blog = await prisma.blog.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: c.get("authorId")
        }
      })
      return c.json({
        id: blog.id
      })

  })
  
blogRouter.put('/', async (c) => {
    const body = await c.req.json()

    const {success} = updateBlogSchema.safeParse(body)
    if(!success){
      c.status(411)
      return c.json({
        message: "Invalid inputs"
      })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
    
      const blog = await prisma.blog.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content,
        }
      })
      return c.json({
        id: blog.id
      })
  })

  blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

    const blogs = await prisma.blog.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true
          }
        }
      }
    })

    return c.json({
        blogs
    })
  })
  
blogRouter.get('/:id', async(c) => {
    const body = await c.req.param(`id`)
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
    try{
      const blog = await prisma.blog.findFirst({
        where: {
            id: Number(body)    
        },
        select: {
          title: true,
          content: true,
          author: {
           select: { name: true}
          }
        }
      })
      return c.json({
        blog
      })
    }catch(e){
        c.status(411)
        return c.json({
            error: "Error while fetching blog post"
        })
      }
  })
  

  