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
            let detailsNavigation = `books/${a._id}`;
            let id = a._id;
            return new PopularPostModel(title, author, imageUrl, id, rating, detailsNavigation);
        });
    }

    static parseNewPosts(res) {
        console.log("DATE" + res[0].date);
        return res.map(a => {
            let title = a.title;
            let author = a.author
            let imageUrl = a.imageUrl == null ? defaultCoverUrl : a.imageUrl;
            let detailsNavigation = `books/${a._id}`;
            let id = a._id;
            return new NewPostModel(title, author, imageUrl, id, a.date, detailsNavigation);
        });
    }
}

export default Utils;