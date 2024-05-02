import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"
import { useUser } from "../hooks";
import NavDrawer from "./NavDrawer";

// import { UserDetails } from "../controller/UserDetails"

function AppBar() {

  // @ts-ignore
  const {User, Email}: string = useUser()
  console.log(User);
  
  return (
    <div className="border-b flex justify-between px-3 py-2  lg:px-10 ">
        <div className="flex  justify-center" > 
          <div className="pr-4 text-xl flex flex-col justify-center">
            <NavDrawer/>
          </div>
          <Link to={"/blogs"} className="flex flex-col justify-center">
          <div className="text-xl flex flex-col w-40 pb-2">
            <img src="/Logo.png" alt="" />
          </div>
          </Link>
        </div>
       
        <div>
            <Link to={"/publish"}>
              <button type="button" className=" mr-4 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2">Create</button>
            </Link>
            <Link to={"/profile"}>
                <Avatar size={10} name={User || ""}/>
            </Link>
        </div>
    </div>
  )
  
}

export default AppBar