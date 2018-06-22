import actionTypes from '../../../actions/actionTypes';
import UserService from '../../../services/userService';
import constants from '../../../utils/constants';

export const loadUserRead = read => ({
    type: actionTypes.LOAD_USER_READ,
    read
});

export const loadUserCurrentlyReading = reading => ({
    type: actionTypes.LOAD_USER_CURRENTLY_READING,
    reading
});

export const loadUserWantToRead = toread => ({
    type: actionTypes.LOAD_USER_WANT_TO_READ,
    toread
});


export function getUserRead(username) {
    return dispatch => {
        UserService.getUserReadPosts(username)
            .then(res => {
                dispatch(loadUserRead(res));
            })
            .catch(err => console.log(err));
    };
}

export function getUserReading(username) {
    return dispatch => {
        UserService.getUserCurrentlyRedingPosts(username)
            .then(res => {
                dispatch(loadUserCurrentlyReading(res));
            })
            .catch(err => console.log(err));
    };
}

export function getUserToRead(username) {
    return dispatch => {
        UserService.getUserWantToReadPosts(username)
            .then(res => {
                dispatch(loadUserWantToRead(res));
            })
            .catch(err => console.log(err));
    };
}
