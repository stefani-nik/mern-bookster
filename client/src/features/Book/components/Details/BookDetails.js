import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/book';
import axios from 'axios';
import { Loader, Grid, Image, Header, Divider, Label, Button, Rating} from 'semantic-ui-react';
import './bookDetails.css'


class BookDetails extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        let bookId = this.props.match.params.id;
        this.props.actions.getBookDetails(bookId);
    }

    render(){
        const book = this.props.bookDetails;
        if(!book)
        {
            return(
              <Loader/>
            )
        }
        return(

            <div class='entry-details-wrapper'>
                <Divider/>
                <Header size='huge' textAlign='center' className='page-title'>{book.title} </Header>
                <Divider/>
                <Grid>
                    <Grid.Column width={4}>
                        <Image src={book.imageUrl} size='big' rounded/>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <Header size='large'  textAlign='center'>by {book.author}</Header>
                        <span>Posted on : </span><Label tag>{book.date.substring(0,10)}</Label>
                        <p className='entry-content'>{book.content}</p>
                        <span>Rating: {book.rating}</span><Rating icon='star' defaultRating={book.rating} maxRating={5} disabled />
                        <p>Rated : <Label color='red' key='red'> {book.ratesCount}</Label> times</p>
                        <div>
                            <Button secondary>Read</Button>
                            <Button secondary>Currently Reading</Button>
                            <Button secondary>Want to Read</Button>
                        </div>
                    </Grid.Column>
                </Grid>
                <Header size='big' textAlign='left' className='page-title'>Comments:  </Header>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        bookDetails: state.book.bookDetails,
    }
);


const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);