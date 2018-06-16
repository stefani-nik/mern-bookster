import Service from './service';
import Utils from '../utils/utils';

const baseUrlBook = '/api/posts/books';
const baseUrlCategory = '/api/category';

class BookService {

    static getAllBooks(){
        return Service.getRequest(baseUrlBook)
        .then(res => res.data)
        .catch(err => console.log(err));
    }

    static getBooksByCategory(categoryId){
        return Service.getRequest(baseUrlCategory + '/book/' + categoryId)
        .then(res => res.data)
        .catch(err => console.log(err));
    };

    static getBookDetails(bookId){
        return Service.getRequest(baseUrlBook + '/' + bookId)
        .then(res => res.data)
        .catch(err => console.log(err));
    }

}

export default BookService;