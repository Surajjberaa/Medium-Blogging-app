import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

function AppBar() {
  return (
    <div className="border-b flex justify-between px-3 py-2  lg:px-10 ">
        <Link to={"/blogs"} className="flex flex-col justify-center">
        <div > 
            Medium
        </div>
        </Link>
        <div>
            <Link to={"/publish"}>
        <button type="button" className=" mr-4 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2">Create</button>
            </Link>
            <Avatar size={10} name="Suraj"/>
        </div>
    </div>
  )
}

export default AppBar