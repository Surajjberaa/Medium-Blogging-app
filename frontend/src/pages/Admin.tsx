import AppBar from "@/components/AppBar"
import { ChangeEvent, useState } from "react"

function Admin() {
    const [postInput, setPostInput] = useState({})
  return (
    <div>
        <AppBar/>
        <div className="flex justify-center items-center h-screen">
            <div className=" ">
                <div className="text-4xl">
                    Admin Panel
                </div>
                <div>
                <LabelledInputBox  label="Secret" placeholder="Secret key for admin" onchange={(e)=>{
                            setPostInput({
                                ...postInput,
                                name: e.target.value
                            })
                        }} />
                        <div className="flex justify-center mt-4">

                        <button type="button" className="p-2 border-2  m-2 text-center hover:bg-slate-300">Submit</button>
                        </div>
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

export default Admin