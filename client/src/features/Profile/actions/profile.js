import actionTypes from '../../../actions/actionTypes';
import UserService from '../../../services/userService';
import constants from '../../../utils/constants';

export const loadUserProfile = userInfo => ({
    type: actionTypes.LOAD_USER_PROFILE,
    userInfo
});

export const updateUserInfo = userInfo => ({
    type: actionTypes.UPDATE_USER_PROFILE,
    userInfo
});

export function getUserProfile(username) {
    return dispatch => {
        UserService.getUserInfo(username)
            .then(res => {
                dispatch(loadUserProfile(res));
            })
            .catch(err => console.log(err));
    };
}

export function updateUserProfile(username,params) {
    return dispatch => {
        UserService.updateUserInfo(username, params)
            .then(res => {
                dispatch(updateUserInfo(res));
            })
            .catch(err => console.log(err));
    };
}


