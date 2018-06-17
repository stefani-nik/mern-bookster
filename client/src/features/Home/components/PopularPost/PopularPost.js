import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image, Rating, Button, Divider, Grid, Header } from 'semantic-ui-react';

const PopularPost = (props) => {

        return(
            <Grid.Column>
                
                    <Image as={ Link } to={props.detailsNavigation} src={props.imageUrl} alt="" size="small" aligned="center" bordered/>
                    <Divider hidden />

                    <div>
                        <div>
                            <h1>
                                <Header className='book-title' as={Link} to={props.detailsNavigation}>{props.title}<br/> by <i className='book-author'>{props.author}</i></Header>
                            </h1>
                        </div>
                        <div className='book-rating'>
                         <Rating maxRating={5} defaultRating={props.rating} icon='star' disabled/>
                        </div>
                        <div className='learn-more-btn'>
                            <Button as={Link} to={props.detailsNavigation} basic color='blue'>Learn More</Button>
                        </div>
                    </div>
        </Grid.Column>
        )
};

PopularPost.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
};

export default PopularPost;