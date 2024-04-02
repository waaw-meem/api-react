import axios from "axios";

const SearchImageAPI = async (term) => {
    const result = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID S5Uz_OzoXIOn-Yu5T8jRCB2leBMCMhojsmhf9idgt2s'
        },
        params:{
            query:term
        }
    })
    return result
}

export default SearchImageAPI