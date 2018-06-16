import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import home from '../features/Home/reducers/homeReducer';
import book from '../features/Book/reducers/bookReducer';
import magazine from '../features/Magazine/reducers/magazineReducer';
import article from '../features/Article/reducers/articleReducer';
import category from '../components/NavBar/reducers/categoriesReducer';
//import bookCategories from '../components/NavBar/components/Books/reducers';
//import magazineeCategories from '../components/NavBar/components/Articles/reducers/articleCategoriesReducer';

const rootReducer = combineReducers({
    routing,
    home,
    book,
    magazine,
    article,
    category,
   // bookCategories,
   // magazineCategories
});

export default rootReducer;