import { useEffect, useState } from "react"
import axios from "axios"
import {BACKEND_URL} from "../config"

export interface Blog  {
    title: string,
    content: string,
    id: number,
    author: {
        name: string 
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true)
    const [Blogs, setBlogs] = useState<Blog[]>([])

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(response => {
                setBlogs(response.data.blogs)
                setLoading(false)
            })

    },[])

    return {
        loading,
        Blogs
    }
}

export const useBlog = ({id}: {id: string}) => {
    const [loading, setLoading] = useState(true)
    const [Blog, setBlog] = useState<Blog>()

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(response => {
                setBlog(response.data.blog)
                setLoading(false)
            })

    },[])

    return {
        loading,
        Blog
    }
}