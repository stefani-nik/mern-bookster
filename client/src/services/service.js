import axios from 'axios';

class Service {
    static getRequest(url, token, params) {
        return axios({
            method: 'GET',
            url: url,
            headers: {
                'Authorization': 'Bearer ' + token
            },
            params: params
        })
    }
}

export default Service;