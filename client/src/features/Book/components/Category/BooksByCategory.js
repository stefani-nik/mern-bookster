import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/book';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Loader, Divider, Image, Header, Item } from 'semantic-ui-react';
import './bookByCategory.css'


class BooksByCategory extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        let categoryId = this.props.match.params.id;
        this.props.actions.getBooksByCategory(categoryId);
    }

    render(){
        const books = this.props.booksByCategory;
        console.log(books);
        if(!books)
        {
            return(
              <Loader/>
            )
        }
        return(

            <div>
                <Divider/>
                <Header size='huge' textAlign='center' className='page-title'>Books in category: </Header>
                <Divider/>

                <Item.Group className='books-category-wrapper'>
                  {
                  books.map((b, i) =>
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
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        booksByCategory: state.book.booksByCategory,
    }
);


const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(BooksByCategory);