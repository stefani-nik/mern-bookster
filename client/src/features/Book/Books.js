import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions/book';
import axios from 'axios';
import { Loader } from 'semantic-ui-react';
import AllBooksList from './components/AllBooks/AllBooksList';


class Books extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.actions.getAllBooks();
    }

    render(){
        if(!this.props.allBooks)
        {
            return(
              <Loader/>
            )
        }
       // debugger
        return(

            <div>
                <AllBooksList books={this.props.allBooks}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        allBooks: state.book.allBooks,
    }
);


const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Books);