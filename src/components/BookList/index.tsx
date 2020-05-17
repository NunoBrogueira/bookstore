import React, { useEffect, useState } from 'react';

import './Books.scss';
import { sortBy } from 'lodash';
import { Books } from '../../store/ducks/books/types';
import { generateID } from '../../utils/helper';
import BookItem from '../BookItem';
import Sort from '../Sort';
import Loading from '../Loading';

interface StateProps {
    books: Books[];
    loading: boolean;
    title: string;
    openBookPopup: (isOpen:boolean, book: Books) => void;
}

type Props = StateProps;

const BooksList: React.FC<Props> = ({
    books,
    loading,
    title,
    openBookPopup
}) => {

    const [booksList, setBooksList] = useState(books);
    const [isPageLoading, setPageLoading] = useState(true);
    const [sortValue, setSortValue] = useState('name')

    useEffect(() => {
        handleSortBy(sortValue);
        setPageLoading(false);
        // eslint-disable-next-line
    }, [books])

    const handleSortBy = (option: string) => {
        const sorted = sortBy(books, option);
        setSortValue(option);
        setBooksList(sorted);
    }

    if (loading || isPageLoading) {
        return (
            <Loading />
        )
    }

    return (
        <div id="books-list">
            <div className="header">
                <h2>{title}</h2>
                <Sort handleSortBy={handleSortBy} />
            </div>
            <div className="books">
                {booksList.map(book => (
                    <BookItem
                        key={generateID()}
                        book={book}
                        openPopup={(isOpen: boolean) => openBookPopup(isOpen, book)}
                    />
                ))}
            </div>
        </div>
    )
}

export default (BooksList);