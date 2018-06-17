import React from 'react';
import PropTypes from 'prop-types';
import NewPost from './NewPost';
import { Header, Divider, Grid } from 'semantic-ui-react';
import './newPost.css';


const NewPostsList = ({posts}) => {
    return (
        <div className='new-posts-wrapper'>
          <Divider className='title-divider' horizontal> <Header size='huge' textAlign='center'>New Posts</Header> </Divider> 
            <Grid relaxed columns={4}>
                 {posts.map((p, i) => <NewPost detailsNavigation={p.detailsNavigation} imageUrl={p.imageUrl} title={p.title} author={p.author} rating ={p.rating} id={p.id}  date={p.date} />)}
             </Grid>
        </div>
    )
};

NewPostsList.propTypes = {
    posts: PropTypes.array.isRequired
};

export default NewPostsList;