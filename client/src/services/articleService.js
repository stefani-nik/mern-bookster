import Service from './service';
import Utils from '../utils/utils';

const baseUrlArticle = '/api/posts/articles';
const baseUrlCategory = '/api/category';

class ArticleService {

    static getAllArticles(){
        return Service.getRequest(baseUrlArticle)
        .then(res => res.data)
        .catch(err => console.log(err));
    }

    static getArticlesByCategory(categoryId){
        return Service.getRequest(baseUrlCategory + '/article/' + categoryId)
        .then(res => res.data)
        .catch(err => console.log(err));
    };

    static getArticleDetails(articleId){
        return Service.getRequest(baseUrlArticle + '/' + articleId)
        .then(res => res.data)
        .catch(err => console.log(err));
    }

}

export default ArticleService;