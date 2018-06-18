import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/book';
import axios from 'axios';
import { Loader, Grid, Image, Header, Divider, Label, Button, Rating, Comment, Form, Dropdown} from 'semantic-ui-react';
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
                        <span style={{paddingTop : '30px'}}>Rating: {book.rating}</span><Rating icon='star' defaultRating={book.rating} maxRating={5} disabled />
                        <p style={{paddingTop : '30px'}}>Rated : <Label color='red' key='red'> {book.ratesCount}</Label> times</p>
                        <div style={{paddingTop : '30px', float : 'right'}}>
                            <Button secondary>Read</Button>
                            <Button secondary>Currently Reading</Button>
                            <Button secondary>Want to Read</Button>
                        </div>
                        <Dropdown text='Rate' icon='star' floating labeled button className='icon' style={{marginTop : '30px'}}>
                        <Dropdown.Menu>
                        <Dropdown.Item>1 Bad</Dropdown.Item>
                        <Dropdown.Item>2 Not good</Dropdown.Item>
                        <Dropdown.Item>3 Good</Dropdown.Item>
                        <Dropdown.Item>4 Great</Dropdown.Item>
                        <Dropdown.Item>5 Super</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Grid.Column>
                </Grid>
                <Header size='big' textAlign='left' className='page-title'>Comments:  </Header>
                <div>
                <Comment.Group>
                <Comment>
                    <Comment.Avatar as='a' src='https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100'/>
                    <Comment.Content>
                        <Comment.Author as='a'>Matt</Comment.Author>
                        <Comment.Metadata>
                        <span>Today at 5:42PM</span>
                        </Comment.Metadata>
                        <Comment.Text>How artistic!</Comment.Text>
                    </Comment.Content>
                    </Comment>

                    <Comment>
                    <Comment.Avatar as='a' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDOXw59dfSMP0K1n5BWaLQzrTKrpiHjh4IvH2eD2XALwxVSZXv2g' />
                    <Comment.Content>
                        <Comment.Author as='a'>Elliot Fu</Comment.Author>
                        <Comment.Metadata>
                        <span>Yesterday at 12:30AM</span>
                        </Comment.Metadata>
                        <Comment.Text>
                        <p>This has been very useful for my research. Thanks as well!</p>
                        </Comment.Text>
                    </Comment.Content>
                    </Comment>
                    <Form reply>
                <Form.TextArea />
                    <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                </Form>
                </Comment.Group>
                </div>
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