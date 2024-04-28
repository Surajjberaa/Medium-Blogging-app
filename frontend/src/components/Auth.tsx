import { ChangeEvent, useState } from "react"
import { Link,  useNavigate } from "react-router-dom"
import { Signupschema } from "@surajbera/medium-common/dist"
import axios from "axios"
import {BACKEND_URL} from "../config"
import Alert from "./Alert"

function Auth({type}: {type: "signup" | "signin"}) {
    const navigate = useNavigate()
    const [alert, setAlert] = useState(false)
    const [postInput, setPostInput] = useState<Signupschema>({
        name: "",
        email: "",
        password: ""
    })

    async function submitHandler  (){
       try{
        // @ts-ignore 
         const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type == "signup" ? "signup" : "signin"}`, postInput)
         const jwt = response.data.jwt
         localStorage.setItem("token", "Bearer " + jwt);
         navigate("/blogs")
        }catch(e){
           setAlert(true)
        }
    }
    function removeAlert(){
        setAlert(false)
    }

  return (
    <div className="h-screen  flex flex-col justify-center items-center">
        <div className="flex  justify-center">
            <div >
                <div className="px-10">
                    <div className="text-3xl font-bold text-center">
                        {type == "signup" ? "Create an account" : "Log in"}
                    </div>
                    <div className="text-slate-600">
                       {type == "signup" ? " Already have an account? " : "Don't have an account?"}
                        <Link to={type == "signup" ? "/signin" : "/signup"} className="underline pl-2">
                        {type == "signup" ? " Log in " : "Sign up"}
                        </Link>
                    </div>
                </div>
                <div className="pt-4">
                    {type == "signup" ? 
                        <LabelledInputBox  label="Name" placeholder="Suraj Bera..." onchange={(e)=>{
                            setPostInput({
                                ...postInput,
                                name: e.target.value
                            })
                        }} />
                     : ""}
                    <LabelledInputBox label="Email" placeholder="suraj@gmail.com" onchange={(e)=>{
                        setPostInput({
                            ...postInput,
                            email: e.target.value
                            
                        })
                    }} />
                    <LabelledInputBox label="Password" type={"password"} placeholder="123456" onchange={(e)=>{
                        setPostInput({
                            ...postInput,
                            password: e.target.value
                            
                        })
                    }} />

                    <button onClick={submitHandler} type="button" className="text-white w-full mt-8  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>
                    {alert == true ? <Alert desc="Invalid inputs or invalid credentials" onclick={removeAlert} />: null}
                </div>
            </div>
        </div>
    </div>
  )
}

interface LabelledInputBoxType {
    label: string,
    placeholder: string,
    onchange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}

function LabelledInputBox({label, placeholder, type, onchange}: LabelledInputBoxType){
    return <div>
        <div>
            <label  className="block mb-2 text-sm font-semibold pt-4 text-gray-900">{label}</label>
            <input onChange={onchange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
        </div>
    </div>
}

export default Auth