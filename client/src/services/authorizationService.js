
import axios from 'axios';

class AuthorizationService {

    static getAuthorizationInfo(accessToken) {
            return  axios({
                method: 'GET',
                url: '',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            });
    }
}

export default AuthorizationService;