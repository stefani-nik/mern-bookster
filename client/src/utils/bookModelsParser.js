import AllBooksModel from './Models/Book/AllBooksModel';
import BookByCategoryModel from './Models/Book/BookByCategoryModel';
import BookDetailsModel from './Models/Book/BookDetailsModel';
import constants from './constants';

const defaultCoverUrl = constants.defaultBookCover;

class BookModelsParser{


    static parseAllBooks(res) {
        return res.map(a => {
            let imageUrl = a.imageUrl == null ? defaultCoverUrl : a.imageUrl;
            let detailsNavigation = `books/${a._id}`;
            return new AllBooksModel(a.title, imageUrl, a._id, detailsNavigation);
        });
    }

    static parseBookByCategory(res) {
        return res.map(a => {
            let imageUrl = a.imageUrl == null ? defaultCoverUrl : a.imageUrl;
            let detailsNavigation = `books/${a._id}`;
            return new BookByCategoryModel(a.title, a.author, a.content, imageUrl, a._id, a.rating, detailsNavigation);
        });
    }

    static parseBookDetails(res){
            let imageUrl = res.imageUrl == null ? defaultCoverUrl : res.imageUrl;
            let detailsNavigation = `books/${res._id}`;
            return new BookDetailsModel(res.title, res.content, res.author, res.date,  imageUrl, res.rating, res.ratesCount, res.category, res.comments, res._id, detailsNavigation);
    }
}

export default BookModelsParser;