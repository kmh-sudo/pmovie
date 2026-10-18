import axios from "axios";

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const TMDB_BASE_URL= process.env.NEXT_PUBLIC_TMDB_BASE_URL;

export const SearchMoviebyName = async (name: string) => {
    if(!name.trim()) return [];

    try{
        const res = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
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

export async function getMovieByTmdbId(tmdbId: number | string) {
  if (!tmdbId) return null;
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/${tmdbId}`, {
      params: {
        api_key: TMDB_API_KEY,
      },
    });
    return response.data; 
  } catch (error: any) {
    console.error(`Error fetching movie with ID ${tmdbId}:`, error.response?.data || error.message);
    return null;
  }
}
