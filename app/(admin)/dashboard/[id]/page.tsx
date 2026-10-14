"use client";
import AdminMovieSearch from "@/components/admin/adminMovieSearch";
import { usePathname } from "next/navigation";
import Loading from "@/components/ui/Loading";
import {
  useMovies,
  useUpdateMovie,
} from "@/hooks/useMovie";
import { useState } from "react";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
export default function UpdateForm() {
   const pathname = usePathname();
  const id = pathname.split("/").pop() || "";

  const { data: movies, isLoading, isError } = useMovies();
  const updateMovieMutation = useUpdateMovie(id);


  const movie = movies?.find((m) => m._id === id);
  console.log(movie, "movie")

  const [name, setName] = useState(movie?.name ?? "");
  const [tmdbId, setTmdbId] = useState(movie?.tmdbId ?? "");
  const [fileId, setFileId] = useState(movie?.fileId ?? "");
 
 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(movies?.find((m) => m.name === name)) {
      alert("Movie already exists");
      return;
    }
    updateMovieMutation.mutate({  id, name, tmdbId, fileId });
    setName("");
    setTmdbId("");
    setFileId("");
  };

  if(isLoading) return <div><Loading /></div>;



  return (
    <div className="space-y-5 max-w-[80%] mx-auto ">
        <div className="flex gap-5 items-center mb-10 items-center justify-around md:justify-start text-defjam-muted">
        <Link href="/dashboard" className="flex gap-2 items-center  ">
          {" "}
          <MoveLeft />{" "}
        </Link>
        <h2 className=" text-2xl font-bold font-marker">
          Update Movie
        </h2>
      </div>
      <AdminMovieSearch onSearchMovie={(movie) => console.log(movie.id)} />
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col gap-3">
          <label className="text">Movie Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter movie name"
            className=" flex-1 bg-[#1C1611] border border-[#D4AF37]/30 p-3 rounded-lg text-white focus:outline-none focus:border-[#D4AF37]"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text">Movie code</label>
          <input
            type="text"
            value={tmdbId}
            onChange={(e) => setTmdbId(e.target.value)}
            placeholder="Enter TMDB's movie ID"
            className=" flex-1 bg-[#1C1611] border border-[#D4AF37]/30 p-3 rounded-lg text-white focus:outline-none focus:border-[#D4AF37]"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text">Movie Id</label>
          <input
            type="text"
            value={fileId}
            onChange={(e) => setFileId(e.target.value)}
            placeholder="Enter Telegram movie id"
            className=" flex-1 bg-[#1C1611] border border-[#D4AF37]/30 p-3 rounded-lg text-white focus:outline-none focus:border-[#D4AF37]"
          />
        </div>
        <div className="flex  gap-3 items-center justify-end">
          <button
            type="submit"
            className=" p-3 px-6 text-white bg-defjam-gold rounded-md hover:border-defjam-bright hover:text-blue cursor-pointer text-sm"
          >
            Update
          </button>
          <button
          onClick={() => {
            setName("");
            setTmdbId("");
            setFileId("");
          }}
            type="reset"
            className=" p-3 px-6 text-white bg-defjam-red rounded-md cursor-pointer text-sm"
          >
            CLEAR
          </button>
        </div>
      </form>
    </div>
  );
}
