import React from 'react';
import './footer.css';

const Footer = () => {
        return(
            <footer className="App-footer">
                 
                    <div className="footer-links">
                        <h4>Quick Links</h4>

                         <ul className="footer-links-list">
                            <li><a href="#0">Home</a></li>
                            <li><a href="#0">Books</a></li>
                            <li><a href="#0">Magazines</a></li>
                            <li><a href="#0">Articles</a></li>
                            <li><a href="#0">Art</a></li>
                            <li><a href="#0">Contacts</a></li>
                        </ul>

                    </div>
   
                <div className="row">
                    <div className="footer-copyright">
                        <span>© Copyright Stefani Nikolova 2018</span>
                    </div>
                </div>
            </footer>
        );
}

export default Footer;

