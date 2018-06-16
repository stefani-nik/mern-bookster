import TrendingPostModel from './Models/TrendingPostModel';
import PopularPostModel from './Models/PopularPostModel';
import NewPostModel from './Models/NewPostModel';
import constants from './constants';

const defaultCoverUrl = constants.defaultBookCover;


class Utils {

    static getCurrentUserId() {
        return localStorage.getItem('userId');
    } 

    static getAccessToken() {
        return localStorage.getItem('accessToken');
    }

    static parsePopularPosts(res) {
        return res.map(a => {
            let title = a.title;
            let author = a.author
            let imageUrl = a.imageUrl == null ? defaultCoverUrl : a.imageUrl;
            let rating = a.rating;
             //let detailsNavigation = `/user/${a.owner.id}/playlist/${a.id}`;
            return new PopularPostModel(title, author, imageUrl, a.id, rating);
        });
    }

    static parseNewPosts(res) {
        return res.map(a => {
            let title = a.title;
            let author = a.author
            let imageUrl = a.imageUrl == null ? defaultCoverUrl : a.imageUrl;
            let date = a.date;
            //let detailsNavigation = `/user/${a.owner.id}/playlist/${a.id}`;
            return new NewPostModel(title, author, imageUrl, a.id, date);
        });
    }
}

export default Utils;