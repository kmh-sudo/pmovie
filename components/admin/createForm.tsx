"use client";
import AdminMovieSearch from "@/components/admin/adminMovieSearch";
import {
  useMovies,
  useAddMovie,

} from "@/hooks/useMovie";
import { useState } from "react";

export default function CreateForm() {
  const { data: movies } = useMovies();
  const createMovieMutation = useAddMovie();
  const [name, setName] = useState("");
  const [tmdbId, setTmdbId] = useState("");
  const [fileId, setFileId] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(movies?.find((m) => m.name === name)) {
      alert("Movie already exists");
      return;
    }
    createMovieMutation.mutate({ name, tmdbId, fileId });
    setName("");
    setTmdbId("");
    setFileId("");
  };

  return (
    <div className="space-y-5 max-w-[80%] mx-auto">
      <AdminMovieSearch onSearchMovie={(movie) => console.log(movie.id)} />
      <form onSubmit={handleSubmit} className="space-y-5 text-defjam-muted">
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
        <div className="flex flex-col gap-3 ">
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
            ADD
          </button>
          <button
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
