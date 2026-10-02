
export default function Page() {
  return (
    <div className=" sm:px-6 lg:px-8">
      <h2 className="font-marker text-2xl font-medium text-defjam-gold "> Movies</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full  gap-3 mt-6">
        {/* Movie cards would go here */}
        {[1, 2, 3, 4, 5, 6].map((movie) => (
          <div key={movie} className="bg-gray-200 h-50 md:h-64 rounded-lg"></div>
        ))}
      </div>
    </div>
  );
}