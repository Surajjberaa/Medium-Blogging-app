import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import FullBlog from "../components/FullBlog"
import AppBar from "../components/AppBar"

function Blog() {
  const {id} = useParams()
  const {loading, Blog} = useBlog({
    id : id || ""
  })
  if(loading || !Blog){
    return <div>
      <AppBar/>
      <div className="flex justify-center items-center h-5/6">
        <div>
          <div className="flex items-center justify-center w-56 h-56   rounded-lg ">
            <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse">loading...</div>
          </div>
        </div>
      </div>
    </div>
  }
  return (
    <div>
      <FullBlog  blog={Blog}/>
    </div>
  )
}

export default Blog