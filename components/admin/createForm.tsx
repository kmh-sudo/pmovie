"use client";
import AdminMovieSearch from "@/components/admin/adminMovieSearch";
import {
  useMovies,
  useMovieById,
  useAddMovie,
  useDeleteMovie,
  useUpdateMovie,
} from "@/hooks/useMovie";
import { useState } from "react";

export default function CreateForm() {
  const createMovieMutation = useAddMovie();
  const [name, setName] = useState("");
  const [tmdbId, setTmdbId] = useState("");
  const [fileId, setFileId] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createMovieMutation.mutate({ name, tmdbId, fileId });
    setName("");
    setTmdbId("");
    setFileId("");
  };

  return (
    <div className="space-y-5 max-w-[80%] mx-auto">
      <AdminMovieSearch onSearchMovie={(movie) => console.log(movie.id)} />
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col gap-3">
          <label className="text">Movie Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter movie name"
            className=" border p-3"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text">Movie code</label>
          <input
            type="text"
            value={tmdbId}
            onChange={(e) => setTmdbId(e.target.value)}
            placeholder="Enter TMDB's movie ID"
            className=" border p-3"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text">Movie Id</label>
          <input
            type="text"
            value={fileId}
            onChange={(e) => setFileId(e.target.value)}
            placeholder="Enter Telegram movie id"
            className=" border p-3"
          />
        </div>
        <div className="flex  gap-3 items-center justify-end">
          <button
            type="submit"
            className="border p-3 px-6 text-white bg-defjam-gold rounded-md hover:border-defjam-bright hover:text-blue cursor-pointer text-sm"
          >
            ADD
          </button>
          <button
            type="reset"
            className="border p-3 px-6 text-white bg-defjam-red rounded-md cursor-pointer text-sm"
          >
            CLEAR
          </button>
        </div>
      </form>
    </div>
  );
}
