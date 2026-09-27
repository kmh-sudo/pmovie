
export default function Home() {
  return (
    <div className=" sm:px-6 lg:px-8">
      <h1 className="font-marker text-2xl font-medium text-defjam-gold ">Popular Movies</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full  gap-4 mt-6">
        {/* Movie cards would go here */}
        {[1, 2, 3, 4, 5, 6].map((movie) => (
          <div key={movie} className="bg-gray-200 h-64 rounded-lg"></div>
        ))}
      </div>
    </div>
  );
}