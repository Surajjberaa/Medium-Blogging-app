import { Avatar } from "./BlogCard"

interface UserCardProps {
    name: string,
    email: string,
}

function UserCard({name, email}: UserCardProps) {
  return (
    <div>
        <div className="border-b-[1px] border-slate-300 pb-5 pt-5 cursor-pointer">
            <div className="flex justify-between ">
            <div className="text-xl font-semibold pt-2 pl-2">
                {name}
                </div>
                {/* <div className="flex justify-center flex-col pl-2 "> 
                    <div className="h-[3px] w-[3px] rounded-full bg-slate-500">
                    </div>
                </div> */}
                    <div className=" pr-4">
                        <Avatar name={name} size={10}/>    
                    </div>
               
            </div>
            <div className="flex justify-center flex-col pl-2 font-extralight text-sm">
                    {email}
                </div>
            
            
        </div>
    </div>
  )
}

export default UserCard

