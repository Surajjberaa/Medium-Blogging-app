import AppBar from "../components/AppBar"
import BlogCard from "../components/BlogCard"
import BlogSkeleton from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"
import NonEligible from "@/components/NonEligible";

function Blogs() {
  
  const eligibile = localStorage.getItem("token")

  if (!eligibile) {
    return <div>
      <NonEligible/>
    </div>
  }

    const { loading, Blogs } = useBlogs();

    if(loading){
        return <div>
           <AppBar />
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
   <div className="flex justify-center   ">
    <div className=" lg:max-w-4xl w-[600px] max-w-xl px-7 lg:p-0 ">
    {Blogs.map(blog => 
         <BlogCard
        authorName={blog.author.name || "Anonymous"} content={blog.content} title={blog.title} publishedDate={"April 28 2024"} id={blog.id}         />
    )}
   
    </div>
   </div>
    </div>
  )
}



export default Blogs