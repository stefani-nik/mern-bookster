import actionTypes from '../../../actions/actionTypes';
import initialState from '../../../store/initialState';
import update from 'immutability-helper';

const homeReducer = (state = initialState.homePage , action) => {
    switch (action.type) {
        case actionTypes.LOAD_POPULAR_POSTS:
            return update(state, {popular: {$set: action.popular}});
        case actionTypes.LOAD_TRENDING_POSTS:
            return update(state, {trending: {$set: action.trending}});
        case actionTypes.LOAD_NEW_POSTS:
            return update(state, {newPosts: {$set: action.newPosts}});
        default:
            return state;
    }
};

export default homeReducer;