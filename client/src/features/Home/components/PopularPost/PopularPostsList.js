import React from 'react';
import PropTypes from 'prop-types';
import PopularPost from './PopularPost';
import { Header, Divider, Grid } from 'semantic-ui-react'
import './popularPost.css'

const PopularPostsList = ({posts}) => {
    return (
        <div className='popular-posts-wrapper'> 
          <Divider className='title-divider' horizontal> <Header size='huge' textAlign='center'>Popular Posts</Header> </Divider> 
        <Grid relaxed columns={4}> 
                {posts.map((p, i) => <PopularPost detailsNavigation={p.detailsNavigation} imageUrl={p.imageUrl} title={p.title} author={p.author} rating ={p.rating} id={p.id}/>)}
        </Grid>
        </div>
    )
};

PopularPostsList.propTypes = {
    posts: PropTypes.array.isRequired
};

export default PopularPostsList;