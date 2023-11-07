import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3";
const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGQyNGNiODE4MzA2NmNjYjgwZWFkN2Q2YjIzZjFiYiIsInN1YiI6IjY0Nzc3YmU5ZTMyM2YzMDEyNzRmZDdiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ACjhKl8iAOALosty9quIixNTM2WjtSCpyyRVrOMUwg"

const headers={
    Authorization:"bearer "+TMDB_TOKEN,
}

export const fetchDataFromApi=async(url,params)=>{
    try{
        const {data}=await axios.get(BASE_URL+url,{headers,
        params})
        return data;

    }catch(err){
        console.log(err);
        return err

    }
}