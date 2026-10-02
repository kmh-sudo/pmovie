'use client';
import { addMovie } from "@/types/definitions";
 export const columns = [
    {
        name: 'No',
        selector: (row: addMovie, index: number) => index + 1,
        sortable: true,
        width: '50px',
    },
    {
        name: 'Name',
        selector: (row: addMovie) => row.name,
        sortable: true,

    },
    {
        name: 'Tmdb-ID',
        selector: (row: addMovie) => row.tmdbId,
        sortable: true,
    },
    {
        name: 'Movie Id',
        selector: (row: addMovie) => row.fileId,
        sortable: true,
    }

]