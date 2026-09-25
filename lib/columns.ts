'use client';

 export const columns = [
    {
        name: 'No',
        selector: (row: any, index: number) => index + 1,
        sortable: true,
        width: '50px',
    },
    {
        name: 'Name',
        selector: (row: any) => row.name,
        sortable: true,

    },
    {
        name: 'Tmdb-ID',
        selector: (row: any) => row.tmdbId,
        sortable: true,
    },
    {
        name: 'Movie link',
        selector: (row: any) => row.url,
        sortable: true,
    }

]