import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/book';
import axios from 'axios';
import { Loader } from 'semantic-ui-react';


class BookDetails extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        let bookId = this.props.match.params.id;
        console.log(`Book Id : ${bookId}`);
        this.props.actions.getBookDetails(bookId);
    }

    render(){
        const book = this.props.bookDetails;
        console.log(`Book ====> ${book}`);
        if(!book)
        {
            return(
              <Loader/>
            )
        }
       // debugger
        return(

            <div>
               <p>{book.title}</p>
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