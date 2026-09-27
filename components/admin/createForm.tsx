'use client';
 import AdminMovieSearch from '@/components/admin/adminMovieSearch';

export default function CreateForm() {
    return (
         <div className="space-y-5 max-w-[80%] mx-auto">
            {/* <div className="flex flex-col gap-3">
                <div className="flex gap-2 items-center justify-end"><CircleAlert className="text-defjam-red w-5 h-5"/><label className="text-sm text-defjam-red">Search name and copy movie ID or code</label></div>
                
                <input type="text" placeholder="Enter movie name" className=" border p-3"/>

            </div> */}
  <AdminMovieSearch onSearchMovie={(movie) => console.log(movie.id)} />  
    <form >
         <div className="flex flex-col gap-3">
                <label className="text">Movie Name</label>
                <input type="text" placeholder="Enter movie name" className=" border p-3"/>
            </div>
            <div className="flex flex-col gap-3">
                <label className="text">Movie code</label>
                <input type="text" placeholder="Enter movie code" className=" border p-3"/>
            </div>
            <div className="flex flex-col gap-3">
                <label className="text">Movie Link</label>
                <input type="text" placeholder="Enter movie url or link" className="border p-3"/>
            </div>
            <div className="flex  gap-3 items-center justify-end">
                <button type="submit" className="border p-3 px-6 text-white bg-defjam-gold rounded-md hover:border-defjam-bright hover:text-blue cursor-pointer text-sm">ADD</button>
            <button type="reset" className="border p-3 px-6 text-white bg-defjam-red rounded-md cursor-pointer text-sm">CLEAR</button>
            </div>
    </form>
           
        </div>
    )
}