import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'

import './styles/App.css';

class App extends Component {
    render() {
        return (

            <div className = "App" >
                <Header title = "Stefcheto"/>
                <p className = "App-intro">To get started, edit <code> src / App.js </code> and save to reload.</p> 
                <Footer/>
            </div>
        );
    }
}

export default App;