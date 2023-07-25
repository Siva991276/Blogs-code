import { useState, useEffect } from "react";
import axios from "axios"

function App(){
const [blogsList,setBlogsList] = useState([]);
const [selectedBlog, setSelectedBlog] = useState(null);

useEffect(()=>{
    fetechBlogs()
})

const fetechBlogs =async()=>{
    const api = "https://apis.ccbp.in/blogs"

    const response = await axios.get(api)//fetching data from server or api
console.log(response.data);

}


    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Blogs List</h1>

                </div>
                <ul className="col-md-4">
                    
                </ul>

                <div className="col-md-8">
                    blogs Details
                </div>

            </div>
             
        </div>
    )
    //siva
}
export default App;