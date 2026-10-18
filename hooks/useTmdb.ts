    import { useQuery } from "@tanstack/react-query";
    import { getMovieByTmdbId } from "@/lib/tmdb";

export const useTmdbMovie  = ({movie} : any) => {
        return useQuery({
        queryKey: ['tmdbMovie', movie.tmdbId],
        queryFn: () => getMovieByTmdbId(movie.tmdbId),
        enabled: !!movie.tmdbId, 
    });
};