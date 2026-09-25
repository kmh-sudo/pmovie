'use client';
type MovieRow = {
    name: string;
    tmdbId: string;
    url: string;
};
 export const columns = [
    {
        name: 'No',
        selector: (row: MovieRow, index: number) => index + 1,
        sortable: true,
        width: '50px',
    },
    {
        name: 'Name',
        selector: (row: MovieRow) => row.name,
        sortable: true,

    },
    {
        name: 'Tmdb-ID',
        selector: (row: MovieRow) => row.tmdbId,
        sortable: true,
    },
    {
        name: 'Movie link',
        selector: (row: MovieRow) => row.url,
        sortable: true,
    }

]