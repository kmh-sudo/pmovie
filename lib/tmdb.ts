import axios from "axios";

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export const SearchMoviebyName = async (name: string) => {
    if(!name.trim()) return [];

    try{
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        query: name,
      },
    });
        return res.data.results;
    }catch(err){
        console.log(err);
        return [];  
    }
}
