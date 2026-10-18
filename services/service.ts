import {axiosInstance} from "@/lib/axios";
import {AddMovie}  from "@/types/definitions";

export const getMovie = async (): Promise<AddMovie[]> => {
    const { data } = await axiosInstance.get("/movie");
    return data.data;
}

export const getMovieById = async (id: string): Promise<AddMovie> => {
    const { data } = await axiosInstance.get(`/movie/${id}`);
    return data;
}


export const addMovieToDB = async (movie: AddMovie): Promise<AddMovie> => {
    const { data } = await axiosInstance.post("/movie", movie);
    return data;
}

export const deleteMovieFromDB = async (id: string): Promise<void> => {
    await axiosInstance.delete(`/movie/${id}`);
}

export const updateMovieInDB = async (id: string, movie: AddMovie): Promise<AddMovie> => {
    const { data } = await axiosInstance.put(`/movie/${id}`, movie);
    return data;
}

export const requestWatch = async (movieId: string): Promise<any> => {
   const { data } = await axiosInstance.post(`/movie/watch-request/${movieId}`);
    return data;
}