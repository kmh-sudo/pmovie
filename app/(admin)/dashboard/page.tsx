import { Plus } from "lucide-react";
import Link from "next/link";
import MovieTable from "@/components/admin/movieTable";
export default function Page() {
  return (
    <div className="max-w-[95%] mx-auto p-3 py-5">
      <div className="flex justify-between items-center">
        {" "}
        <h2 className="text-defjam-bg text-2xl font-bold py-4 font-marker text-center">
          {" "}
          Movies
        </h2>
        <Link href="/dashboard/create">
          {" "}
          <div className="border p-3 text-white bg-defjam-bg rounded-md cursor-pointer hover:bg-defjam-hover transition-all duration-300 ease-in-out">
            <Plus className="text-3xl " />
          </div>
        </Link>
      </div>

      <div className="">
        <MovieTable />
      </div>
    </div>
  );
}
