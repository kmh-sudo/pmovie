import {axiosInstance} from "@/lib/axios";
import {addMovie}  from "@/types/definitions";

export const getMovie = async (): Promise<addMovie[]> => {
    const { data } = await axiosInstance.get("/movie");
    return data.data;
}

export const getMovieById = async (id: string): Promise<addMovie> => {
    const { data } = await axiosInstance.get(`/movie/${id}`);
    return data;
}


export const addMovieToDB = async (movie: addMovie): Promise<addMovie> => {
    const { data } = await axiosInstance.post("/movie", movie);
    return data;
}

export const deleteMovieFromDB = async (id: string): Promise<void> => {
    await axiosInstance.delete(`/movie/${id}`);
}

export const updateMovieInDB = async (id: string, movie: addMovie): Promise<addMovie> => {
    const { data } = await axiosInstance.put(`/movie/${id}`, movie);
    return data;
}