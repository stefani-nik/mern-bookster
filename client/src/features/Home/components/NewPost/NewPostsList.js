import React from 'react';
import PropTypes from 'prop-types';
import NewPost from './NewPost';
import { Header, Divider } from 'semantic-ui-react'


const NewPostsList = ({posts}) => {
    return (
        <div> 
            <Header size='huge' textAlign='center'>New Posts</Header>
            <Divider />
            <div className="masonry-wrap">
                {posts.map((p, i) => <NewPost imageUrl={p.imageUrl} title={p.title} author={p.author} date={p.date} id={p.id} />)}
            </div>
        </div>
    )
};

NewPostsList.propTypes = {
    posts: PropTypes.array.isRequired
};

export default NewPostsList;