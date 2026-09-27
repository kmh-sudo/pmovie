'use client';
 
import { useState } from 'react';
import {SearchMoviebyName} from '@/lib/tmdb';
import { searchMovie } from '@/types/definitions';

interface AdminMovieSearchProps {
    onSearchMovie: (movie: searchMovie) => void;
    // Add any props that the component needs here
}

export default function AdminMovieSearch({onSearchMovie}: AdminMovieSearchProps) 
{
    const [movieName, setMovieName] = useState('');
    const [movies, setMovies] = useState<searchMovie[]>([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);

    const handleConfirmSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        
        const movie = await SearchMoviebyName(movieName);
        setMovies(movie);
        setLoading(false);
        setSearched(true);
        onSearchMovie(movie);
    }

    console.log(movies.map((m) => console.log(m.id)), "movies")
    
    return (
        <div className="bg-[#1C1611] p-5 rounded-xl border border-[#D4AF37]/30 text-[#F5F5DC]">
            {/* Search Input & Confirm Button Form */}
      <form onSubmit={handleConfirmSearch} className="flex gap-2">
        <input
          type="text"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          placeholder="Enter movie name (e.g. Fight Club)..."
          className="flex-1 bg-[#0F0C08] border border-[#D4AF37]/30 p-3 rounded-lg text-white focus:outline-none focus:border-[#D4AF37]"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-[#8B0000] px-5 py-3 rounded-lg text-white font-bold hover:bg-red-700 transition disabled:opacity-50"
        >
          {loading ? 'Searching...' : 'Confirm'}
        </button>
      </form>

      {/* Loading State */}
      {loading && <p className="text-sm text-[#D4AF37] mt-3">TMDB မှ ရှာဖွေနေပါသည်...</p>}

      {/* Search Results List */}
      {!loading && searched && (
        <div className="mt-4 space-y-2 max-h-60 overflow-y-auto">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => {
                  onSearchMovie(movie);
                  setMovieName(movie.title); 
                  setMovies([]); 
                }}
                className="p-3 bg-[#0F0C08] border border-white/5 rounded-lg flex justify-between items-center cursor-pointer hover:border-[#D4AF37]/50 transition"
              >
                <div>
                  <p className="font-semibold text-white">{movie.title}</p>
                  <p className="text-xs text-gray-400">
                    Release: {movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}
                  </p>
                </div>
                <span className="text-xs bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-1 rounded font-mono">
                  ID: {movie.id}
                </span>
              </div>
            ))
          ) : (
            <p className="text-sm text-red-400 mt-2">ဇာတ်ကား ရှာမတွေ့ပါ။ နာမည်အမှန် ပြန်စစ်ပါ။</p>
          )}
        </div>)}
    </div>  

        
    )
}