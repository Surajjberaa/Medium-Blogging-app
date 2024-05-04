import AppBar from "@/components/AppBar"
import BlogSkeleton from "@/components/BlogSkeleton";
import UserCard from "@/components/UserCard"
import { useAllUsers } from "@/hooks";



function AllUser() {

    const { loading, User } = useAllUsers();
    

    if(loading){
        return <div>
        <AppBar />
        <div className="border-t-2  border-gray-400  flex justify-evenly">
          <div className=" border-gray-600 w-full text-center hover:bg-gray-400 bg-slate-200" >
            All Users
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

  return (
    <div>
        <AppBar/>
        <div className="border-t-2  border-gray-400  flex justify-evenly">
          <div className=" border-gray-600 w-full text-center hover:bg-gray-400 bg-slate-200" >
            All Users
          </div>
          {/* <div className="border-l-2 border-gray-600 w-full text-center hover:bg-gray-400 bg-slate-200">
            Likes
          </div> */}
        </div>
        <div className="flex justify-center   ">
            <div className=" lg:max-w-4xl w-[600px] max-w-xl px-7 lg:p-0 ">
                {User.map(user => 
                    <UserCard 
                    name={user.name}
                    email={user.email}
                    />
                )}
            </div>
        </div>
    </div>
  )
}

export default AllUser