import PopularMovies from "@/components/ui/popular-movie";
export default function Home() {
  
  return (
    <div className=" sm:px-6 lg:px-8">
      <h1 className="font-marker text-2xl font-medium text-defjam-gold ">Welcome to my Movie App</h1>
     <PopularMovies />
    </div>
  );
}