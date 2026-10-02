import { getMovie, getMovieById, addMovieToDB, deleteMovieFromDB, updateMovieInDB } from "@/services/service";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addMovie } from "@/types/definitions";

// Query Keys
export const movieKeys = {
  all: ['movies'] as const,
  detail: (id: number) => [...movieKeys.all, id] as const,
};

export const useMovies = () => {
  return useQuery({
    queryKey: movieKeys.all,
    queryFn: getMovie,
  });
}

export const useMovieById = (id: string) => {
  return useQuery({
    queryKey: movieKeys.detail(Number(id)),
    queryFn: () => getMovieById(id),
  });
}

export const useAddMovie = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addMovieToDB,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: movieKeys.all });
    },
  });
}

export const useDeleteMovie = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteMovieFromDB,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: movieKeys.all });
    },
  });
}

export const useUpdateMovie = (id: string) => {
  const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (movie: addMovie) => updateMovieInDB(id, movie),
        onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: movieKeys.detail(Number(id)) });
        queryClient.invalidateQueries({ queryKey: movieKeys.all });
        },
    });
}