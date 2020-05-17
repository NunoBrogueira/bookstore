import React, { useEffect, useState } from 'react';

import './BookDetails.scss';
import { formatDate } from '../../utils/helper';
import { Books } from '../../store/ducks/books/types';
import Loading from '../Loading';

interface StateProps {
    book: Books;
    loading: boolean;
}

type Props = StateProps;

const BookDetails: React.FC<Props> = ({
    book,
    loading
}) => {
;
    const emptyBooks = (Object.keys(book).length === 0);
    const [isPageLoading, setPageLoading] = useState(true);

    useEffect(() => {

        setPageLoading(false);
    }, [emptyBooks])
    

    if (loading || isPageLoading) {
        return (
            <Loading />
        )
    }

    return (
        <div id="book">
            <div className="book-container">
                <img width="100%" src={book?.image} alt={book?.name}/>
            </div>
            <div className="book-container">
                <h1>{book?.name}</h1>
                <p>{book?.genre}</p>
                <p>{book && formatDate(book?.date)}</p>
                <hr />
                <p>{book?.author.name}</p>
            </div>
        </div>
    )
}

export default (BookDetails);