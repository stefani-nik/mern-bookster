import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/category';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Loader } from 'semantic-ui-react';


class ArticlesDropdown extends React.Component{

    constructor(props){
        super(props);
    }

   
    componentDidMount(){
        this.props.actions.getArticleCategories();
    }

    render(){
        const options = this.props.articleCategories.map((c,i) => {
            return { key: i, text: c.name, value: c.name}
        });
        return(
            <Dropdown as={ Link } to='/articles' text="Articles" simple inverted pointing secondary  size='large' className='navbar-list'>
            <Dropdown.Menu>
            {
                this.props.articleCategories.map((c,i) =>

                    <Dropdown.Item as={Link} name={c.name} to={c.detailsNavigation}>{c.name}</Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>
        );
    }
}

const mapStateToProps = (state) => (
    {
        articleCategories: state.category.articleCategories,
    }
);


const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesDropdown);