import { Link } from "react-router-dom"

interface BlogCardProps {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string,
    id: number
}

function BlogCard({authorName, content, title, publishedDate, id}: BlogCardProps) {
  return (
   <Link to={`/blog/${id}`}>
        <div className="border-b-[1px] border-slate-300 pb-5 pt-5 cursor-pointer">
            <div className="flex">
                <div className="">
            <Avatar name={authorName}/> 
                </div>
                <div className="flex justify-center flex-col pl-2 font-extralight text-sm">
            {authorName} 
                </div>
                <div className="flex justify-center flex-col pl-2"> 
                    <div className="h-[3px] w-[3px] rounded-full bg-slate-500">

                    </div>
                </div>
                <div className="pl-2 font-thin text-slate-500 flex justify-center flex-col text-sm">

            {publishedDate}
                </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
                </div>
            <div className="text-md font-thin">
                {content.slice(0,100) + "..."}
                </div>
            <div className="text-slate-500 text-sm font-thin pt-2 ">
                {`${Math.ceil(content.length / 100)} minute(s) read`}
                </div>
            
        </div>
    </Link>
  )
}

export function Avatar({name, size=6}: {name:string, size?: number}){
    return(
        <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 h-${size} w-${size}`}>
            <span className={` ${size == 6 ? "font-medium text-xs" : "font-medium text-lg"}  text-gray-600 dark:text-gray-300 capitalize`}>{name[0]}</span>
        </div>
    )
}

export default BlogCard