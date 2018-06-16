import AllArticlesModel from './Models/Article/AllArticlesModel';
import ArticleByCategoryModel from './Models/Article/ArticleByCategoryModel';
import ArticleDetailsModel from './Models/Article/ArticleDetailsModel';
import constants from './constants';

const defaultCoverUrl = constants.defaultArticleCover;

class ArticleModelsParser{


    static parseAllArticles(res) {
        return res.map(a => {
            let imageUrl = a.imageUrl == null ? defaultCoverUrl : a.imageUrl;
            let detailsNavigation = `articles/${a._id}`;
            return new AllArticlesModel(a.title, imageUrl, a._id, detailsNavigation);
        });
    }

    static parseArticleByCategory(res) {
        return res.map(a => {
            let imageUrl = a.imageUrl == null ? defaultCoverUrl : a.imageUrl;
            let detailsNavigation = `articles/${a._id}`;
            return new ArticleByCategoryModel(a.title, a.author, imageUrl, a._id, a.rating, detailsNavigation);
        });
    }

    static parseArticleDetails(res){
        let imageUrl = res.imageUrl == null ? defaultCoverUrl : res.imageUrl;
        let detailsNavigation = `books/${res._id}`;
            return new ArticleDetailsModel(res.title, res.author, res.content, res.date,  imageUrl, res.rating, res.ratesCount, res.category, res.comments, res._id, detailsNavigation );
    }
}

export default ArticleModelsParser;