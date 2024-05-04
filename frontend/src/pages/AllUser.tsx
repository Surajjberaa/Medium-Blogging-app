import AppBar from "@/components/AppBar"
import UserCard from "@/components/UserCard"
import { useAllUsers } from "@/hooks";



function AllUser() {

    const { loading, User } = useAllUsers();
    

    if(loading){
        return <div>
            loading....
        </div>
    }

  return (
    <div>
        <AppBar/>
        <div className="flex justify-center   ">
            <div className=" lg:max-w-4xl w-[600px] max-w-xl px-7 lg:p-0 ">
                {User.map(user => 
                    <UserCard 
                    name={user.name}
                    email={user.email}
                    />
                )}
            </div>
        </div>
    </div>
  )
}

export default AllUser