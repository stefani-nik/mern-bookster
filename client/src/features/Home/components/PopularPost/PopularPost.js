import React from 'react';
import PropTypes from 'prop-types';
import { Image, Rating, Button, Divider } from 'semantic-ui-react';

import './popularPost.css'

const PopularPost = (props) => {

        return(
                <article className="masonry-brick entry format-standard">
                    <div className="brick-thumb">
                        <a href="post.html" className="brick-thumb-link">
                            <Image src={props.imageUrl} alt="" size="small" aligned="center"/>
                            <Divider hidden />
                        </a>
                    </div>

                    <div className="brick-text">
                        <div className="brick-header">
                            <h1 className="brick-title">
                                <a href="post.html">{props.title}<br/> by <i>{props.author}</i></a>
                            </h1>
                        </div>
                        <div className="entry-meta">
                         <Rating maxRating={5} defaultRating={props.rating} icon='star' disabled/>
                        </div>
                        <div className="entry-btn">
                            <Button secondary>Learn More</Button>
                        </div>
                    </div>
                </article>
        )
};

PopularPost.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
};

export default PopularPost;