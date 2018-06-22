import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header, Divider, Grid, Item } from 'semantic-ui-react'

const UserCollection = ({posts}) => {
    if(posts == null){
        return null;
    }
    return (
    <Item.Group className='books-category-wrapper'>
        {
        posts.map((b, i) =>
            <Item className='book-by-category' >
            <Link to={b.detailsNavigation} className='entry-image'>
                <Item.Image size='tiny' src={b.imageUrl} rounded />
            </Link>
                <Item.Content>
                <Item.Header as={Link} to={b.detailsNavigation}>{b.title} <br/>  {b.author}</Item.Header>
                <Item.Description className='entry-description'>
                    {b.content.substring(0, 300)}...
                </Item.Description>
                <Item.Extra>Rating:  {b.rating}</Item.Extra>
                </Item.Content>
                <Divider/>
            </Item>   
        )}
      </Item.Group>
    )
};

export default UserCollection;