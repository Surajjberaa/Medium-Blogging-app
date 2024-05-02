import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function isLoggedIn() {

    const navigate = useNavigate()

  useEffect(()=>{
    const loggedIn = localStorage.getItem("token")
    
  
    if(loggedIn){
      navigate("/blogs")
    }
  
    },[navigate])

}

export default isLoggedIn