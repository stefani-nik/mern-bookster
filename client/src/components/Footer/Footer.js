import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

const Footer = () => {
        return(
            <footer className="App-footer">    
                         <ul className="footer-links-list">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/books'>Books</Link></li>
                            <li><Link to='/magazines'>Magazines</Link></li>
                            <li><Link to='/articles'>Articles</Link></li>
                        </ul>

               
                    <div className="footer-copyright">
                        <span>© Copyright Stefani Nikolova 2018</span>
                    </div>
            </footer>
        );
}

export default Footer;

