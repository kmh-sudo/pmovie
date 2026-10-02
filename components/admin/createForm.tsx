'use client';
 import AdminMovieSearch from '@/components/admin/adminMovieSearch';

export default function CreateForm() {
    return (
         <div className="space-y-5 max-w-[80%] mx-auto">
          
  <AdminMovieSearch onSearchMovie={(movie) => console.log(movie.id)} />  
         <div className="flex flex-col gap-3">
           
                <label className="text">Movie Name</label>
                <input type="text" placeholder="Enter movie name" className=" border p-3"/>
            </div>
            <div className="flex flex-col gap-3">
                <label className="text">Movie code</label>
                <input type="text" placeholder="Enter TMDB's movie ID" className=" border p-3"/>
            </div>
            <div className="flex flex-col gap-3">
                <label className="text">Movie Id</label>
                <input type="text" placeholder="Enter Telegram movie id" className=" border p-3"/>
            </div>
            <div className="flex  gap-3 items-center justify-end">
                <button type="submit" className="border p-3 px-6 text-white bg-defjam-gold rounded-md hover:border-defjam-bright hover:text-blue cursor-pointer text-sm">ADD</button>
            <button type="reset" className="border p-3 px-6 text-white bg-defjam-red rounded-md cursor-pointer text-sm">CLEAR</button>
            </div>
           
        </div>
    )
}