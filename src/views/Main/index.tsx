import React, { useState, useEffect } from 'react';

import './Main.scss';
import { filter } from 'lodash';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { emptyBook } from '../../utils/emptyObjects';
import { Books } from '../../store/ducks/books/types';
import * as BookActions from '../../store/ducks/books/actions';
import { lastFridayBetweenTwoYears } from '../../utils/helper';
import Sidebar from '../../components/Sidebar';
import BookList from '../../components/BookList';
import Loading from '../../components/Loading';
import NotFound from '../../components/NotFound';
import Header from '../../components/Header';
import Popup from '../../components/Popup';
import BookDetails from '../../components/BookDetails';

interface StateProps {
    books: Books[];
    loading: boolean;
}

interface DispatchProps {
    loadRequest: () => void
}

type Props = StateProps & DispatchProps;

const Main: React.FC<Props> = ({
    books,
    loading,
    loadRequest
}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [book, setBook] = useState(emptyBook);
    const [title, setTitle] = useState('All Books');
    const [booksList, setBooksList] = useState(books);
    const [isPageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        loadRequest();
    }, [loadRequest]);

    useEffect(() => {
        setBooksList(books);
        setPageLoading(false);
    }, [books])

    const handleSidebar = (isOpen: boolean) => {
        setSidebarOpen(isOpen);
    }

    const handlePopup = (isOpen: boolean, book?: Books) => {
        if (book !== undefined) {
            setBook(book);
        }
        
        setIsOpen(isOpen);
    }

    const handleFilterBy = (filterAttribute: string, option: string) => {
        setTitle(option);
        setSidebarOpen(false);

        if (option === 'All Books') {
            setBooksList(books);

            return;
        }

        if (option === 'Last Friday of the Month') {
            var items: any = []
            lastFridayBetweenTwoYears().forEach(i => {
                let value: any = filter(books, function (o) {
                    return o.date.slice(0, 11) === i;
                })
                
                if (value !== undefined && value.length > 0) {
                    items.push(value[0]);
                }
                
                return items
            });
            setBooksList(items);

            return;
        }

        const filtered = filter(books, [filterAttribute, option]);
        setBooksList(filtered);
    }
    
    if (loading || isPageLoading) {
        return (
            <Loading />
        )
    }

    return (
        <div id="main">
            {isOpen ?
                <Popup closePopup={handlePopup}>
                    <BookDetails book={book} loading={loading} />
                </Popup> : null
            }
            <Sidebar
                books={books}
                isSidebarOpen={sidebarOpen}
                handleFilterBy={handleFilterBy}
            />
            <div id="content" className="container">
                <Header handleSidebar={handleSidebar} />
                <div className="sub-container">
                    <Switch>
                        <Route exact path="/">
                            <BookList
                                title={title}
                                books={booksList}
                                loading={loading}
                                openBookPopup={handlePopup}
                            />
                        </Route>
                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state: ApplicationState) => ({
    books: state.books.data,
    loading: state.books.loading
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators(BookActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);