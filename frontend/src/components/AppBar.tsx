import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"
import { useUser } from "../hooks";
import NavDrawer from "./NavDrawer";

// import { UserDetails } from "../controller/UserDetails"

function AppBar() {

  // @ts-ignore
  const {User, Email}: string = useUser()
  // console.log(User);
  
  return (
    <div className="border-b flex justify-between px-3 py-2  lg:px-10 ">
        <div className="flex  justify-center" > 
          <div className="pr-4 text-xl flex flex-col justify-center">
            <NavDrawer/>
          </div>
          <Link to={"/blogs"} className="flex flex-col justify-center">
          <div className="text-xl flex flex-col w-40 pb-2">
            <img src="https://ucbd382d867eda2285bc3724c2e9.previews.dropboxusercontent.com/p/thumb/ACRzOCcIw0I6-O3x-5dbMvIiwFw4GGyf71aXo8vpRAGvHRip3m37F5hHgqqQxCKz_Q_Y7rATRXFuxnbmmcw7358lwL9eHluLW-mucLF-7ydg7X5RCjSiRAZWierxm6_iYE5PenPmPGyrtHJ5LUh1k0OoQjlC6C8qONwG224v6EKiz_47_y3eV2vQu1n2NsraFEmfXnXQfELICj8cHTVshsg8ppJN98_i3hjvlODzxaUDys4NzmPBbDe9qAS_8oiWlgYEIz7Yx5M_w1Y1PEMRyGZqYICfLjj4QgL1fSs5587Hxe7odj7f9waxfbKSydrn7kK-HcJH2CSRvFCAiYTeYBmlXm2ZYc1ML3s_4qxrIr0rofgwv3l8J8Ir9e9TonRkwHBHdmrFxveQDTRwN620YUkdkV6j9JpNc-nHAq1GL75NmskhxaFbjRYcQ3uj1kt2H0aUo2PsBhM8ZbEUv4x9fCffZc4Dv2OLdFDTo2iriLMsSLx0M6Spg64nPIO6skgK9TucA4edzIXyjXSnmlsx4rKlNnHpr_DheIAm9jb6L5uR34DUzUU_mxPc70hSYtIVi_cqeK5r2Li6u_VO2APzoeJj9pf52tNagpnypGg7dbozOFUiejtZ5txHPw9_XJHqEMVuUjIThhsQR3or5VnGIkKpp1CRHHVhGjaNuIZrse5kYhxpN3DniVrjsv1DxO8gQJu42KT9DHaIexz_NopF0F2j7HFuTJsgkA61em-lFIbNiAF3O-b6z2bHUDQDjei62Ye3kAMya_SI2S4st1Oh7E-8ok6fQzT6zwXr6M7TL3gpe-IzmjfNNcPJLkYK-XptgQjEXVySPA8gJHPUBGaTmuPRPWURJmrzAO7mqTKa-oK3eyM2nf4QrdA6OJJZQBMFTpOpOUOj0ESmagqA5cgB7A10iJJkTH8jeaI_Uh56S3CGG0Wk0RkFA1JzBNjaqukelgdxnwL2-l9Khvh_BVCIMsvgHwfQ710Yw0jyDyRgJRF6qQOsjszfM61j7ymRfZfFFNvgaomyUFRDFeb7F3f33o-vUG_5Tsyii2WFIemwyQN5seF46ZZo5tTwtx1gGtxtmldMoBGYUsiFnMpNmlKf_VNYIbnxpBXBx5WfBeO9AYW5cyfbifEWyLgxp27rkrQ8FBBeq_9oqZFEkXyG94S15dzrf9plib6Al0e1Z4M-xFY7Nl0xBsHihOy14cnfIlyWJyU/p.png" alt="" />
          </div>
          </Link>
        </div>
       
        <div>
            <Link to={"/publish"}>
              <button type="button" className=" mr-4 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2">Create</button>
            </Link>
            
            <Avatar size={10} name={User || ""}/>
        </div>
    </div>
  )
  
}

export default AppBar