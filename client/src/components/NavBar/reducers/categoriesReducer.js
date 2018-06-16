import actionTypes from '../../../actions/actionTypes';
import initialState from '../../../store/initialState';
import update from 'immutability-helper';

const categoriesReducer = (state = initialState , action) => {
    switch (action.type) {
        case actionTypes.LOAD_ARTICLE_CATEGORIES:
            return update(state, {articleCategories: {$set: action.articleCategories}});
        case actionTypes.LOAD_BOOK_CATEGORIES:
            return update(state, {bookCategories: {$set: action.bookCategories}});
        case actionTypes.LOAD_MAGAZINE_CATEGORIES:
            return update(state, {magazineCategories: {$set: action.magazineCategories}});
        default:
            return state;
    }
};

export default categoriesReducer;