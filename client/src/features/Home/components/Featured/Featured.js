import React from 'react'

import './featured.css'

class Featured extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="featured">
                    <div className="featured-column featured-column-big">
                        <div className="entry first">
                            <div className="article-content">
                                <span className="article-category"><a href="category.html">Trending</a></span>

                                <h1><a href="post.html" title="">What Your Books Preference Says About You and Your Personality.</a></h1>

                                <div className="article-info">
                                    <ul className="entry-meta">
                                        <li>Stefani Nikolova</li>
                                        <li>April 9, 2018</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="featured-column featured-column-small">

                        <div className="entry second">
                            <div className="article-content">
                                <span className="article-category"><a href="category.html">Lifestyle</a></span>

                                <h1><a href="post.html" title="">Meet Jully</a></h1>

                                <div className="article-info">
                                    <ul className="entry-meta">
                                        <li>Stefani Nikolova</li>
                                        <li>April 9, 2018</li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="entry third">

                            <div className="article-content">
                                <span className="article-category"><a href="category.html">Art</a></span>

                                <h1><a href="post.html" title="">Throwback To The Good Old Days.</a></h1>

                                <div className="article-info">
                                    <ul className="entry-meta">
                                        <li>Stefani Nikolova</li>
                                        <li>April 9, 2018</li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
            </div>
        );
    }
}

export default Featured;