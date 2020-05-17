import { Reducer } from 'redux';
import { BookTypes, BooksState } from './types';

const InitialState: BooksState = {
    data: [],
    error: false,
    loading: false
};

const reducer: Reducer<BooksState> = (state = InitialState, action) => {
    switch (action.type) {
        case BookTypes.LOAD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case BookTypes.LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data
            }
        case BookTypes.LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                data: []
            }
        default:
            return state;
    }
}

export default reducer;