import React, {useState} from "react";
import SearchImageAPI from "./api";
import SearchBar from "./component/searchBar";
import ImageList from "./component/imageList"

function App(){
    const [images,setImage] = useState([])

    const handleSubmit = async (term) => {
        const response =  await SearchImageAPI(term)
        setImage(response)
    }
    
    return (
        <div>
           <SearchBar onSubmit={handleSubmit}/>
           <ImageList images={images}/>
        </div>
    )
}

export default App