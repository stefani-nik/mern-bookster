import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import home from '../features/Home/reducers/homeReducer';
import book from '../features/Book/reducers/bookReducer';
import magazine from '../features/Magazine/reducers/magazineReducer';
import article from '../features/Article/reducers/articleReducer';
import category from '../components/NavBar/reducers/categoriesReducer';
import profile from '../features/Profile/reducers/profileReducer'

const rootReducer = combineReducers({
    routing,
    home,
    book,
    magazine,
    article,
    category,
    profile
   // bookCategories,
   // magazineCategories
});

export default rootReducer;