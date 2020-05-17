import { all, takeLatest } from 'redux-saga/effects';

import { BookTypes } from './books/types';
import { load } from './books/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest(BookTypes.LOAD_REQUEST, load)
    ]);
}