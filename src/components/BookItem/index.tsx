import React from 'react';

import './BookItem.scss';
import { formatDate } from '../../utils/helper';
import { Books } from '../../store/ducks/books/types';
import { ReactComponent as Writer } from '../../assets/man.svg';

interface OwnProps {
    book: Books;
    openPopup: (isOpen: boolean) => void;
}

const BookItem: React.FC<OwnProps> = ({
    book,
    openPopup
}) => {

    return (
        <div id="book-item" onClick={() => openPopup(true)}>
            <img className="image" width="100%" src={book.image} alt={book.name} />
            <div className="book-details">
                <p className="name">{book.name}</p>
                <p className={`category ${(book.genre).toLowerCase()}`}>{book.genre}</p>
                <p className="date">{formatDate(book.date)}</p>
                <div className="author-details">
                    <Writer />
                    <p className="author-name">{book.author.name}</p>
                </div>
                
            </div>
        </div>
    )
};

export default (BookItem);