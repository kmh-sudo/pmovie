export type SearchMovie = {
    name: string;
    tmdbId: string;
    url: string;
    id: string;
    title: string;
    release_date: string;
}

export type AddMovie = {
    name: string;
    tmdbId: string;
    fileId: string;
}

export type UpdateMovie = {
    id: string;
    name: string;
    tmdbId: string;
    fileId: string;
}


