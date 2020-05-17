import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, Store } from 'redux';

import rootSaga from './ducks/rootSaga';
import rootReducer from './ducks/rootReducers';
import { BooksState } from './ducks/books/types';

export interface ApplicationState {
    books: BooksState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;