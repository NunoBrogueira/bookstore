export enum BookTypes {
    LOAD_REQUEST = '@books/LOAD_REQUEST',
    LOAD_SUCCESS = '@books/LOAD_SUCCESS',
    LOAD_FAILURE = '@books/LOAD_FAILURE'
}

export interface Books {
    id: string;
    name: string;
    genre: string;
    date: string;
    image: string;
    author: Author;
}

export interface Author {
    name: string;
    gender: string;
}

export interface BooksState {
    readonly data: Books[]
    readonly loading: boolean
    readonly error: boolean
}