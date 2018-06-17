import actionTypes from '../../../actions/actionTypes';
import initialState from '../../../store/initialState';
import update from 'immutability-helper';

const profileReducer = (state = initialState , action) => {
    switch (action.type) {
        case actionTypes.LOAD_USER_PROFILE:
            return update(state, {userInfo: {$set: action.userInfo}});
        case actionTypes.UPDATE_USER_PROFILE:
            return update(state, {updatedProfile: {$set: action.updatedProfile}});
        default:
            return state;
    }
};

export default profileReducer;