import axios from "axios"
import AppBar from "./AppBar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Publish() {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    async function onclickHandler(){
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
            title: title,
            content: content,

        }, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        navigate(`/blog/${response.data.id}`)
    }
  return (
    <div >
        <AppBar />
        <div className="flex justify-center h-screen bg-gray-50">
            <div className="max-w-screen-lg w-full pt-8 px-5">
                            
                <textarea id="message" rows={1} onChange={(e)=>{
                    setTitle(e.target.value)
                }} className="block p-2.5 focus:outline-none bg-gray-50 font-serif w-full text-4xl text-gray-900 rounded-lg   focus:ring-blue-200 focus:border-blue-500 " placeholder="Title"></textarea>
                 <div>
                    <div className=" py-4  bg-gray-50  rounded-b-lg">
                        <textarea id="editor" rows={8} onChange={(e)=>{
                            setContent(e.target.value)
                        }
                        } className="block focus:outline-none  bg-gray-50 font-serif w-full px-0 text-lg text-gray-800 pl-4 rounded-lg focus:ring-0" placeholder="Tell your story..." required></textarea>
                    </div>
                 </div>
                <div>
                    <button type="button" onClick={onclickHandler} className="text-white  bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Publish Post</button>
                        </div>
            </div>
        </div>
    </div>
  )
}






export default Publish