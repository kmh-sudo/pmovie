import {  MoveLeft } from 'lucide-react';
import Link from 'next/link';
import CreateForm from '@/components/admin/createForm';

export default function Page() {
  return (
    <div className="text-black md:p-20 py-5">
        <div className="flex gap-5 items-center mb-10 items-center justify-around md:justify-start">
          <Link href="/dashboard" className="flex gap-2 items-center"> <MoveLeft/>  </Link>
          <h2 className="text-defjam-bg text-2xl font-bold font-marker">Add Movie</h2></div>
      <div>
       <CreateForm />
      </div>
    </div>
  );
}