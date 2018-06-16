import actionTypes from '../../../actions/actionTypes';
import initialState from '../../../store/initialState';
import update from 'immutability-helper';

const magazineReducer = (state = initialState , action) => {
    switch (action.type) {
        case actionTypes.LOAD_ALL_MAGAZINES:
            return update(state, {allMagazines: {$set: action.allMagazines}});
        case actionTypes.LOAD_MAGAZINES_BY_CATEGORY:
            return update(state, {magazinesByCategory: {$set: action.magazinesByCategory}});
        case actionTypes.LOAD_MAGAZINES_DETAILS:
            return update(state, {magazineDetails: {$set: action.magazineDetails}});
        default:
            return state;
    }
};

export default magazineReducer;