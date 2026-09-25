import { MoveLeft } from 'lucide-react';

export default function Page() {
  return (
    <div className="text-black p-20 ">
        <div className="flex gap-2 items-center mb-10 items-center justify-start"><MoveLeft/> <h2 className="text-defjam-bg text-2xl font-bold font-marker">Add Movie</h2></div>
      <div>
        <form action="" className="space-y-5 max-w-[80%] mx-auto">
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
                <input type="text" placeholder="Enter movie url or link" className=" border p-3"/>
            </div>
            <div className="flex  gap-3 items-center justify-end"><button type="submit" className="border p-3 px-6 text-white bg-defjam-gold rounded-md hover:border-defjam-bright hover:text-blue cursor-pointer text-sm">ADD</button>
            <button type="reset" className="border p-3 px-6 text-white bg-defjam-red rounded-md cursor-pointer text-sm">CLEAR</button></div>
        </form>
      </div>
    </div>
  );
}