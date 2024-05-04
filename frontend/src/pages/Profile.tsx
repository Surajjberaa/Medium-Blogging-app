import AppBar from "@/components/AppBar"
import BlogCard from "@/components/BlogCard"
import BlogSkeleton from "@/components/BlogSkeleton"
import { useUser, useUserBlogs } from "@/hooks"

function Profile() {
  // @ts-ignore
  const {User, Email}: string = useUser()
  const {Blog, loading} = useUserBlogs()

  if(loading){
    return <div>
       <AppBar />
       <div className="flex flex-col items-center mt-20">
        <div className={`relative inline-flex items-center justify-center cursor-pointer overflow-hidden rounded-full bg-gray-600  h-[100px] w-[100px] `} >
            <span className={` font-bold text-5xl text-gray-300 capitalize`}>{User?.[0]}</span>
        </div>
        <div className="pt-5 text-4xl">
          {User}
        </div>
        <div className="pt-3 text-md text-slate-600">
          {Email}
        </div>
        <div className="flex m-2">
          <div className="pr-2 font-semibold">
            Followers: 0
          </div>
          <div className="pl-2 font-semibold">
            Following: 0
          </div>
        </div>
      </div>
      <div className="border-t-2  border-gray-400 mt-5 flex justify-evenly">
          <div className=" border-gray-600 w-full text-center hover:bg-gray-400 bg-slate-200" >
            All Posts
          </div>
          {/* <div className="border-l-2 border-gray-600 w-full text-center hover:bg-gray-400 bg-slate-200">
            Likes
          </div> */}
      </div>
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
    </div>
}

  return (<div>
    <AppBar/>
    <div className=" ">
      <div className="flex flex-col items-center mt-20">
        <div className={`relative inline-flex items-center justify-center cursor-pointer overflow-hidden rounded-full bg-gray-600  h-[100px] w-[100px] `} >
            <span className={` font-bold text-5xl text-gray-300 capitalize`}>{User?.[0]}</span>
        </div>
        <div className="pt-5 text-4xl">
          {User}
        </div>
        <div className="pt-3 text-md text-slate-600">
          {Email}
        </div>
        <div className="flex m-2">
          <div className="pr-2 font-semibold">
            Followers: 0
          </div>
          <div className="pl-2 font-semibold">
            Following: 0
          </div>
        </div>
      </div>
      <div className="border-t-2  border-gray-400 mt-5 flex justify-evenly">
          <div className=" border-gray-600 w-full text-center hover:bg-gray-400 bg-slate-200" >
            All Posts
          </div>
          {/* <div className="border-l-2 border-gray-600 w-full text-center hover:bg-gray-400 bg-slate-200">
            Likes
          </div> */}
      </div>
      <div className="flex justify-center ">
        <div className=" lg:max-w-4xl w-[600px] max-w-xl px-7 lg:p-0 ">
          {
            Blog.map(blog => 
              
              <BlogCard title={blog.title} authorName={blog.author.name} content={blog.content} publishedDate={"April 28 2024"}/>
            )
          }
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profile