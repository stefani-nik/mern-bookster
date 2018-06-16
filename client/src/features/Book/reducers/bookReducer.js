import actionTypes from '../../../actions/actionTypes';
import initialState from '../../../store/initialState';
import update from 'immutability-helper';

const bookReducer = (state = initialState , action) => {
    switch (action.type) {
        case actionTypes.LOAD_ALL_BOOKS:
            return update(state, {allBooks: {$set: action.allBooks}});
        case actionTypes.LOAD_BOOKS_BY_CATEGORY:
            return update(state, {booksByCategory: {$set: action.booksByCategory}});
        case actionTypes.LOAD_BOOK_DETAILS:
            return update(state, {bookDetails: {$set: action.bookDetails}});
        default:
            return state;
    }
};

export default bookReducer;