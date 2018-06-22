import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Home from './features/Home/Home'
import Books from './features/Book/Books'
import Magazines from './features/Magazine/Magazines'
import Articles from './features/Article/Articles'
import Login from './features/Login/Login';
import Register from './features/Register/Register';
import Logout from './features/Logout/Logout'
import BookDetails from './features/Book/components/Details/BookDetails'
import ArticleDetails from './features/Article/components/Details/ArticleDetails'
import MagazineDetails from './features/Magazine/components/Details/MagazineDetails'
import BooksByCategory from './features/Book/components/Category/BooksByCategory';
import UserProfile from './features/Profile/UserProfile';
import YourCollections from './features/YourCollections/YourCollections'
import './layout.css';

const Layout = () => (
    <main className='layout'>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/books' exact component={Books} />
            <Route path='/magazines' exact component={Magazines} />
            <Route path='/articles' exact component={Articles} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <Route path='/logout' exact component={Logout} />
            <Route path='/books/:id' exact component={BookDetails} />
            <Route path='/articles/:id' exact component={ArticleDetails} />
            <Route path='/magazines/:id' exact component={MagazineDetails} />
            <Route path='/category/book/:id' exact component={BooksByCategory} />
            <Route path='/profile/:username' exact component={UserProfile} />
            <Route path='/collections/:username' exact component={YourCollections} />
         
        </Switch>
    </main>
);

export default Layout;