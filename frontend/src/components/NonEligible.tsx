import { Link } from "react-router-dom"

function NonEligible() {
  return (
    <div>
        <div className="flex justify-center flex-col item-center h-screen ">

<div className="flex items-center justify-center text-4xl text-black">
    You are not logged in....
</div>
<div className="flex items-center justify-center">
  <div className="text-xl underline p-5">
  <Link to={"/signin"}>Log in</Link>
  </div>
  <div className="text-xl underline p-5">
  <Link to={"/signup"}>Create an account</Link>
  </div>
</div>
</div> 
    </div>
  )
}

export default NonEligible