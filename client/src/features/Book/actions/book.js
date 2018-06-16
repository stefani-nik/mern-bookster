import actionTypes from '../../../actions/actionTypes';
import BookService from '../../../services/bookService';
import AllBooksModel from '../../../utils/Models/Book/AllBooksModel';
import BookByCategoryModel from '../../../utils/Models/Book/BookByCategoryModel';
import BookDetailsModel from '../../../utils/Models/Book/BookDetailsModel';
import BookModelsParser from '../../../utils/bookModelsParser'
import constants from '../../../utils/constants';

const defaultCoverUrl = constants.defaultBookCover;

export const loadAllBooks = allBooks => ({
    type: actionTypes.LOAD_ALL_BOOKS,
    allBooks
});

export const loadBooksByCategory = booksByCategory => ({
    type: actionTypes.LOAD_BOOKS_BY_CATEGORY,
    booksByCategory
});

export const loadBookDetails = bookDetails => ({
    type: actionTypes.LOAD_BOOK_DETAILS,
    bookDetails
});


export function getAllBooks() {
    return dispatch => {
        BookService.getAllBooks()
            .then(res => {
                const allBooks = BookModelsParser.parseAllBooks(res);
                dispatch(loadAllBooks(allBooks));
            })
            .catch(err => console.log(err));
    };
}

export function getBooksByCategory(categoryId) {
    return dispatch => {
        BookService.getBooksByCategory(categoryId)
            .then(res => {
                console.log(res);
                const booksByCategory = BookModelsParser.parseBookByCategory(res);
                dispatch(loadBooksByCategory(booksByCategory));
            })
            .catch(err => console.log(err));
    };
}

export function getBookDetails(bookId) {
    return dispatch => {
        BookService.getBookDetails(bookId)
            .then(res => {
                const bookDetails = BookModelsParser.parseBookDetails(res);
                dispatch(loadBookDetails(bookDetails));
            })
            .catch(err => console.log(err));
    };
}
