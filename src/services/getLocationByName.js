import axios from 'axios'

//const url = "https://rickandmortyapi.com/api/location/";

export const getLocationByName = async (page) => {
    try {
        const res = await axios.get("https://rickandmortyapi.com/api/location/",{params: {page}}); 
        return res.data.results.map(item=>({id: item.id, name: item.name}))
    } catch (error) {
        console.error(error);
    }
}