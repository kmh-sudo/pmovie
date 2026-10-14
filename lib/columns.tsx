'use client';
import { AddMovie } from "@/types/definitions";
import Link from "next/link";

export const columns = ({
    onDelete,
 }: {
    onDelete: (row: AddMovie) => void;
 }) => [
    {
        name: 'No',
        selector: (row: AddMovie, index: number) => index + 1,
        sortable: true,
        width: '50px',
    },
    {
        name: 'Name',
        selector: (row: AddMovie) => row.name,
        sortable: true,

    },
    {
        name: 'Tmdb-ID',
        selector: (row: AddMovie) => row.tmdbId,
        sortable: true,
    },
    {
        name: 'Movie Id',
        selector: (row: AddMovie) => row.fileId,
        sortable: true,
    },
    {
    name: 'Actions',
    cell: (row: AddMovie) => (
        
      <div className="flex gap-2">
        <Link href={`/dashboard/${row._id}`} className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
          Edit
        </Link>
      
        <button
          onClick={() => onDelete(row)}
          className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
    width: '180px',
  },
]