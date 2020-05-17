import React, { useEffect, useState } from 'react';

import './BookDetails.scss';
import { ReactComponent as Writer } from '../../assets/man.svg';
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
            <img className="image" src={book.image} alt={book.name}/>
            <div className="book-information">
                <p className="name">{book.name}</p>
                <p className={`category ${(book.genre).toLowerCase()}`}>{book?.genre}</p>
                <p className="date">{formatDate(book.date)}</p>
                <div className="author-details">
                    <Writer />
                    <p className="author-name">{book.author.name}</p>
                </div>
            </div>
        </div>
    )
}

export default (BookDetails);