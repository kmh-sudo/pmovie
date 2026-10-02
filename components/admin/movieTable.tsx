'use client';
import { useMovies } from '@/hooks/useMovie';
import DataTable from 'react-data-table-component';
import { columns } from '@/lib/columns';
export default function MovieTable() {
    const { data: movies, isLoading, isError } = useMovies();
    console.log(movies)
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading movies</div>;
    return (
        <DataTable
                    columns={columns}
                    data={movies}
                    pagination   
                />
    )
}