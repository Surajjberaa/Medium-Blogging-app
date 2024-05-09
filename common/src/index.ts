import zod, { string } from "zod"


export const signupschema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(6)
})

export const signinschema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6)
})

export const createBlogSchema = zod.object({
    title: zod.string(),
    content: zod.string(),
})

export const updateBlogSchema = zod.object({
    title: zod.string(),
    content: zod.string(),
    id: zod.number()
})

export type Signupschema = zod.infer<typeof signupschema>
export type Signinschema = zod.infer<typeof signinschema>
export type CreateBlogSchema = zod.infer<typeof createBlogSchema>
export type UpdateBlogSchema = zod.infer<typeof updateBlogSchema>
