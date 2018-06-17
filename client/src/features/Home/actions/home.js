import actionTypes from '../../../actions/actionTypes';
import HomeService from '../../../services/homeService';
import TrendingPostModel from '../../../utils/Models/TrendingPostModel';
import PopularPostModel from '../../../utils/Models/PopularPostModel';
import NewPostModel from '../../../utils/Models/NewPostModel';
import Utils from '../../../utils/utils';
import constants from '../../../utils/constants';

const defaultCoverUrl = constants.defaultPictureUrl;

export const loadTrendingPosts = trending => ({
    type: actionTypes.LOAD_TRENDING_POSTS,
    trending
});

export const loadNewPosts = newPosts => ({
    type: actionTypes.LOAD_NEW_POSTS,
    newPosts
});

export const loadPopularPosts = popular => ({
    type: actionTypes.LOAD_POPULAR_POSTS,
    popular
});


export function getTrendingPosts() {
    return dispatch => {
        HomeService.getPostsCollections()
            .then(res => {
               // const trending = Utils.parseTrendingPosts(res);
                dispatch(loadTrendingPosts(res.trending));
            })
            .catch(err => console.log(err));
    };
}

export function getPopularPosts() {
    return dispatch => {
        HomeService.getPostsCollections()
            .then(res => {
                const popular = Utils.parsePopularPosts(res.popular);
                dispatch(loadPopularPosts(popular));
            })
            .catch(err => console.log(err));
    };
}

export function getNewPosts() {
    return dispatch => {
        HomeService.getPostsCollections()
            .then(res => {
                const newPosts = Utils.parseNewPosts(res.newPosts);
                dispatch(loadNewPosts(newPosts));
            })
            .catch(err => console.log(err));
    };
}
