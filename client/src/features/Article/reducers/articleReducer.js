import actionTypes from '../../../actions/actionTypes';
import initialState from '../../../store/initialState';
import update from 'immutability-helper';

const articleReducer = (state = initialState , action) => {
    switch (action.type) {
        case actionTypes.LOAD_ALL_ARTICLES:
            return update(state, {allArticles: {$set: action.allArticles}});
        case actionTypes.LOAD_ARTICLES_BY_CATEGORY:
            return update(state, {articlesByCategory: {$set: action.articlesByCategory}});
        case actionTypes.LOAD_ARTICLE_DETAILS:
            return update(state, {articleDetails: {$set: action.articleDetails}});
        default:
            return state;
    }
};

export default articleReducer;