import Service from './service';
import Utils from '../utils/utils';

const baseUrlMagazine = '/api/posts/magazines';
const baseUrlCategory = '/api/category';

class MagazineService {

    static getAllMagazines(){
        return Service.getRequest(baseUrlMagazine)
        .then(res => res.data)
        .catch(err => console.log(err));
    }

    static getMagazinesByCategory(categoryId){
        return Service.getRequest(baseUrlCategory + '/magazine/' + categoryId)
        .then(res => res.data)
        .catch(err => console.log(err));
    };

    static getMagazineDetails(magazineId){
        return Service.getRequest(baseUrlMagazine + '/' + magazineId)
        .then(res => res.data)
        .catch(err => console.log(err));
    }

}

export default MagazineService;