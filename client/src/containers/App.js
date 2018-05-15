import React, { Component } from 'react';
import WithLoading from '../components/HOC/Loader/WithLoading'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Layout from '../Layout';

import './app.css';
import 'semantic-ui-css/semantic.min.css';

const HeaderWithLoading = WithLoading(Header);

class App extends Component {
    state = {
        isLoading: false
    }
    render() {
        return (

            <div className = "App" >
                <HeaderWithLoading isLoading={this.state.isLoading}/>
                <Layout/>
                <Footer/>
            </div>
        );
    }
}

export default App;