import DataTable from 'react-data-table-component';
import {movies} from '@/lib/constant'
import { columns } from '@/lib/columns';
import { Plus } from 'lucide-react';
import Link from 'next/link';
export default function Page() {

   
    return (
        <div className="max-w-[95%] mx-auto">
            <div className="flex justify-between items-center"> <h1 className="text-defjam-bg text-2xl font-bold py-4 font-marker text-center"> Movies</h1>
            <Link href="/dashboard/create">  <div className="border p-3 text-white bg-defjam-bg rounded-md cursor-pointer hover:bg-defjam-hover transition-all duration-300 ease-in-out"><Plus className="text-3xl "/></div></Link>
          
            </div>
           
            <div className="">
                <DataTable
                    columns={columns}
                    data={movies}
                    pagination
                    
                />
            </div>
        </div>
    )
}