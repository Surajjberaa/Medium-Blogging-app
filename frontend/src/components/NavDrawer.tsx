import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Link, useNavigate } from "react-router-dom"


function NavDrawer() {

    
    const navigate = useNavigate()

    function logoutHandler(){

        localStorage.clear()
        navigate("/signin")
      }

  return (
    <div>
        <Sheet>
  <SheetTrigger>
    <div >
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-7" viewBox="0 0 64 64">
    <path d="M7 29v5l50 1v-7L7 29zM7 11v6h50v-6H7zM7 46v7l50-1v-5L7 46z"></path>
    </svg>
    </div>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>
        <div className="text-4xl">
            Menu
        </div>
      </SheetTitle>
      <SheetDescription>
        <div className="text-xl pt-8 cursor-pointer">
            <Link to={"/profile"} >
            Profile
            </Link>
        </div>
      </SheetDescription>
      <SheetDescription>
        <div className="text-xl"> 
          <Link to={"/allusers"}>
            All Users
          </Link>
        </div>
      </SheetDescription>
      <SheetDescription>
        <Link to={"/signin"} onClick={logoutHandler}>
        <div className="text-xl"> 
            Log out
        </div>
        </Link>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

    </div>
  )
}

export default NavDrawer