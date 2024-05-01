import AppBar from "@/components/AppBar"
import { Avatar } from "@/components/BlogCard"
import { useUser } from "@/hooks"

function Profile() {
    // @ts-ignore
    const {User, Email}: string = useUser()

  return (<div>
    <AppBar/>
    <div className="grid grid-cols-12 h-screen bg-black">
        <div className=" col-span-7 bg-gray-600">
            <div className=" pt-20 flex justify-center">
                <Avatar name={User || ""} size={20}/>
            </div>
        </div>
        <div className="bg-slate-200 col-span-5">

        </div>
    </div>
  </div>
  )
}

export default Profile