import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/category';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Loader } from 'semantic-ui-react';


class BooksDropdown extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.actions.getBookCategories();
    }

    render(){
        return(
            
                <Dropdown.Menu>
                {
                    this.props.bookCategories.map((c,i) =>
                        <Dropdown.Item as={Link} name={c.name} to={c.detailsNavigation} item>{c.name}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
        );
    }
}

const mapStateToProps = (state) => (
    {
        bookCategories: state.category.bookCategories,
    }
);


const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(BooksDropdown);