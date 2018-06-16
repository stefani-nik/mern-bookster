import React from 'react';
import PropTypes from 'prop-types';
import PopularPost from './PopularPost';
import { Header, Divider } from 'semantic-ui-react'

const PopularPostsList = ({posts}) => {
    return (
        <div> 
            <Header size='huge' textAlign='center'>What will you find?</Header>
            <Divider />
            <div className="masonry-wrap">
                {posts.map((p, i) => <PopularPost imageUrl={p.imageUrl} title={p.title} author={p.author} rating ={p.rating} id={p.id} />)}
            </div>
        </div>
    )
};

PopularPostsList.propTypes = {
    posts: PropTypes.array.isRequired
};

export default PopularPostsList;