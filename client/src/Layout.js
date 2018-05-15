import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Home from './features/Home/Home'
import Login from './features/Login/Login';
import Register from './features/Register/Register';
import './layout.css'

const Layout = () => (
    <main className='layout'>
        <Switch>
            {/* <Route exact path='/' render={() => (
                localStorage.hasOwnProperty('userId') ?
                    (<Redirect to='/your-music/playlists'/>) :
                    (<Redirect to='/login'/>)
            )}/> */}
            <Route path='/home' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
        </Switch>
    </main>
);

export default Layout;