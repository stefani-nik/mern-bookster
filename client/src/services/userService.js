import Service from './service';
import Utils from '../utils/utils';
import axios from 'axios'

const baseUrlUser = '/api/user';

class UserService {

    static getUserInfo(username){
        return Service.getRequest(baseUrlUser + '/profile/' + username)
        .then(res => res.data)
        .catch(err => console.log(err));
    }

    static updateUserInfo(username, params){
        axios.post(baseUrlUser + '/profile/' + username, params)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    static getUserReadPosts(username){
        return Service.getRequest(baseUrlUser + '/read/' + username)
        .then(res => res.data)
        .catch(err => console.log(err));
    }

    static getUserCurrentlyRedingPosts(username){
        return Service.getRequest(baseUrlUser + '/reading/' + username)
        .then(res => res.data)
        .catch(err => console.log(err));
    }

    static getUserWantToReadPosts(username){
        return Service.getRequest(baseUrlUser + '/toread/' + username)
        .then(res => res.data)
        .catch(err => console.log(err));
    }
}

export default UserService;