import Image from "next/image";

export default function Card({ movie }: { movie: any }) {
  return (
    <div className="bg-gray-200 h-50 md:h-64 rounded-lg">
      <Image
        src={movie.posterUrl}
        alt={movie.title}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="p-2">
        <h3 className="text-sm font-medium">{movie.title}</h3>
        <p className="text-xs text-gray-600">{movie.releaseDate}</p>
      </div>
    </div>
  );
}   