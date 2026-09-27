import { MoveLeft } from 'lucide-react';
import { CircleAlert } from 'lucide-react';
import CreateForm from '@/components/admin/createForm';

export default function Page() {
  return (
    <div className="text-black p-20">
        <div className="flex gap-2 items-center mb-10 items-center justify-start"><MoveLeft/> <h2 className="text-defjam-bg text-2xl font-bold font-marker">Add Movie</h2></div>
      <div>
       <CreateForm />
      </div>
    </div>
  );
}