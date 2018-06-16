import Service from './service';
import Utils from '../utils/utils';

const baseUrl = '/api/home';

class HomeService {

    // TODO: Separate them
    static getPostsCollections(){
        return Service.getRequest(baseUrl)
        .then(res => res.data);
    }

}

export default HomeService;