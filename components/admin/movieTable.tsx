'use client';
import { useMovies } from '@/hooks/useMovie';
import DataTable from 'react-data-table-component';
import { columns } from '@/lib/columns';
import { useDeleteMovie } from '@/hooks/useMovie';
import { AddMovie } from '@/types/definitions';
import Loading from '../ui/Loading';

export default function MovieTable() {
    const { data: movies, isLoading, isError } = useMovies();
    const { mutate: deleteMovie, isPending } = useDeleteMovie();
    console.log(movies)
    if (isLoading) return <div><Loading /></div>;
    if (isError) return <div>Error loading movies</div>;

  
    const handleDelete = (row: AddMovie) => {
        console.log('Delete movie:', row);
        deleteMovie(row._id);
    }

    const tableColumnsAction = columns({
        onDelete: handleDelete,
    });
    return (
        <DataTable
                    columns={tableColumnsAction}
                    data={movies || []}
                          pagination
                     progressPending={isPending}   
                />
    )
}