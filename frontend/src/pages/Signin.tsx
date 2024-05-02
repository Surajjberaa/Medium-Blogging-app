import Auth from "../components/Auth"
import Quotes from "../components/Quotes"
import isLoggedIn from "@/controller/IsLoggedIn";

function Signin() {
  
  isLoggedIn();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="">
            <Auth type="signin"/>
        </div>
        <div className="hidden lg:block">
        <Quotes/>
        </div>
    </div>
  )
}

export default Signin