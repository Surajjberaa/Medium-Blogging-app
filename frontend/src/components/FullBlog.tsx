import { Blog } from "../hooks"
import AppBar from "./AppBar"
import { Avatar } from "./BlogCard"

function FullBlog({blog}: {blog: Blog }) {
  return (
    <div>
        <AppBar  />
        <div className="flex justify-center"> 

        <div className="grid lg:grid-cols-12 px-10 w-full pt-10 max-w-screen-xl
        ">
            <div className="col-span-8 pb-20 lg:pb-0">
                <div className="font-extrabold text-5xl">
                    {blog.title}
                </div>
                <div className="pt-2 text-slate-400">
                    Posted on 28 April
                </div>
                <div className="pt-4 text-xl text-gray-600">
                    {blog.content}
                </div>
            </div>
            <div className="col-span-4 ">
                <div className="text-slate-500 text-lg ">

                Author
                </div>
                <div className="flex justify-center pt-2 ">
                    <div className="flex flex-col justify-center pr-4">
                        <Avatar size={10} name={blog.author.name} />
                    </div>
                    <div>
                        <div className="capitalize text-2xl font-extrabold">
                        {blog.author.name || "Anonymous"}
                        </div>
                        <div className="text-xl pt-2 text-slate-500">
                            I like to build software products. I'm an open source enthusiast and am excited about recent technologies of AR and VR.
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default FullBlog