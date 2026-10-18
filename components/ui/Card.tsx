import { useTmdbMovie } from "@/hooks/useTmdb";
import Image from "next/image";
import { useRequestWatch } from "@/hooks/useTelegrambot";


export default function Card({ movie }: { movie: any }) {
    const { data: tmdbMovie, isLoading, isError } = useTmdbMovie({ movie });
    console.log(tmdbMovie, "tmdbMovie");
    console.log(movie, "movie")
   const telegramBotUsername = process.env.NEXT_PUBLIC_BOT_USERNAME || "hoodframe_bot";
    const posterUrl = tmdbMovie?.poster_path
        ? `https://image.tmdb.org/t/p/w500${tmdbMovie.poster_path}`
        : "/placeholder.png"; // Fallback image if poster_path is not available

        const { mutateAsync: requestWatch, isPending } = useRequestWatch();

       const handleClick = async (e) => {
        e.preventDefault();

        const res: any = await requestWatch(movie?._id);
        const token = res?.token;
        try{
        if(!token){
            throw new Error("Telegram token not found in response");
        }
       const telegramBotLink = res?.deepLink;
        window.open(telegramBotLink, "_blank", "noopener,noreferrer");
       }catch (error) {
      console.error("Failed to get watch token:", error);
      
    }}
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading movie data</div>;


  return (
    <div className="flex flex-col gap-2 cursor-pointer hover:scale-105 transition-transform duration-300">
        <button
        onClick={handleClick}
        className=""
      >
           <div className="relative overflow-hidden bg-gray-200 h-50 md:h-64 rounded-lg">
            

      <Image
      src={posterUrl}
        alt={tmdbMovie?.title}
       fill
            sizes="(max-width: 768px) 33vw, 16vw"
            className="object-cover rounded-lg"
          />

    </div>
    </button>
          <div className="">
        <h3 className="text-sm bg-defjam-muted text-black p-1 px-3 rounded-lg font-medium ">{tmdbMovie?.title}</h3>
        <p className="text-xs text-gray-600">{tmdbMovie?.release_date}</p>
      </div>
    </div>
  
  );
}   