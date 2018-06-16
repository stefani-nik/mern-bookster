import Service from './service';
import Utils from '../utils/utils';

const baseUrlCategory = '/api/category';

class CategoryService {

    static getArticleCategories(){
        return Service.getRequest(baseUrlCategory + "/article")
        .then(res => res.data)
        .catch(err => console.log(err));
    }

    static getBookCategories(){
        return Service.getRequest(baseUrlCategory + "/book")
        .then(res => res.data)
        .catch(err => console.log(err));
    }

    static getMagazineCategories(){
        return Service.getRequest(baseUrlCategory  + "/magazine")
        .then(res => res.data)
        .catch(err => console.log(err));
    }

}

export default CategoryService;