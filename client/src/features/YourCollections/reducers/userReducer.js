import actionTypes from '../../../actions/actionTypes';
import initialState from '../../../store/initialState';
import update from 'immutability-helper';

const userReducer = (state = initialState.userCollections , action) => {
    switch (action.type) {
        case actionTypes.LOAD_USER_READ:
            return update(state, {read: {$set: action.read}});
        case actionTypes.LOAD_USER_CURRENTLY_READING:
            return update(state, {reading: {$set: action.reading}});
        case actionTypes.LOAD_USER_WANT_TO_READ:
            return update(state, {toread: {$set: action.toread}});
        default:
            return state;
    }
};

export default userReducer;