import actionTypes from '../../../actions/actionTypes';
import ArticleService from '../../../services/articleService';
import AllArticlesModel from '../../../utils/Models/Article/AllArticlesModel';
import ArticleByCategoryModel from '../../../utils/Models/Article/ArticleByCategoryModel';
import ArticleDetailsModel from '../../../utils/Models/Article/ArticleDetailsModel';
import ArticleModelsParser from '../../../utils/articleModelsParser'
import constants from '../../../utils/constants';

const defaultCoverUrl = constants.defaultArticleCover;

export const loadAllArticles = allArticles => ({
    type: actionTypes.LOAD_ALL_ARTICLES,
    allArticles
});

export const loadArticlesByCategory = articlesByCategory => ({
    type: actionTypes.LOAD_ARTICLES_BY_CATEGORY,
    articlesByCategory
});

export const loadArticleDetails = articleDetails => ({
    type: actionTypes.LOAD_ARTICLE_DETAILS,
    articleDetails
});


export function getAllArticles() {
    return dispatch => {
        ArticleService.getAllArticles()
            .then(res => {
                const allArticles = ArticleModelsParser.parseAllArticles();
                dispatch(loadAllArticles(allArticles));
            })
            .catch(err => console.log(err));
    };
}

export function getArticlesByCategory(categoryId) {
    return dispatch => {
        ArticleService.getArticlesByCategory(categoryId)
            .then(res => {
                const articlesByCategory = ArticleModelsParser.parseArticleByCategory(res);
                dispatch(loadArticlesByCategory(articlesByCategory));
            })
            .catch(err => console.log(err));
    };
}

export function getArticleDetails(articleId) {
    return dispatch => {
        ArticleService.getArticleDetails(articleId)
            .then(res => {
                const articleDetails = ArticleModelsParser.parseArticleDetails(res);
                dispatch(loadArticleDetails(articleDetails));
            })
            .catch(err => console.log(err));
    };
}
