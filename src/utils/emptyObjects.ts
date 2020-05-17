import { Books } from "../store/ducks/books/types";

export const emptyBook: Books = {
    id: '',
    name: '',
    genre: '',
    date: '',
    image: '',
    author: {
        name: '',
        gender: ''
    }
}