'use client';

import Loading from "@/components/ui/Loading";
import { useMovies }  from "@/hooks/useMovie";
import Card from "@/components/ui/Card";
export default function PopularMovies() {
  const { data: movies, isLoading, isError } = useMovies();
  console.log(movies, "movies")

  if (isLoading) return <div><Loading /></div>;
  return (
    <div className=" sm:px-6 lg:px-8">
      <h1 className="font-marker text-2xl font-medium text-defjam-gold ">Popular Movies</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full  gap-3 mt-6">
        {/* Movie cards would go here */}
        {movies?.map((movie) => (
          <Card key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
}