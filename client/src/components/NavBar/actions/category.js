import actionTypes from '../../../actions/actionTypes';
import CategoryDropdownModel from '../../../utils/Models/Category/CategoryDropdownModel';
import CategoryService from '../../../services/categoryService'
import CategoryModelsParser from '../../../utils/categoryModelsParser'


export const loadArticleCategories = articleCategories => ({
    type: actionTypes.LOAD_ARTICLE_CATEGORIES,
    articleCategories
});

export const loadBookCategories = bookCategories => ({
    type: actionTypes.LOAD_BOOK_CATEGORIES,
    bookCategories
});

export const loadMagazineCategories = magazineCategories => ({
    type: actionTypes.LOAD_MAGAZINE_CATEGORIES,
    magazineCategories
});


export function getArticleCategories() {
    return dispatch => {
        CategoryService.getArticleCategories()
            .then(res => { 
                let articleCategories = CategoryModelsParser.parseCategoryDropdown(res);        
                dispatch(loadArticleCategories(articleCategories));
            })
            .catch(err => console.log(err));
    };
}

export function getBookCategories() {
    return dispatch => {
        CategoryService.getBookCategories()
            .then(res => {
                let bookCategories = CategoryModelsParser.parseCategoryDropdown(res);    
                console.log(bookCategories);  
                dispatch(loadBookCategories(bookCategories));
            })
            .catch(err => console.log(err));
    };
}

export function getMagazineCategories() {
    return dispatch => {
        CategoryService.getMagazineCategories()
            .then(res => {
                let magazineCategories = CategoryModelsParser.parseCategoryDropdown(res);      
                dispatch(loadMagazineCategories(magazineCategories));
            })
            .catch(err => console.log(err));
    };
}

