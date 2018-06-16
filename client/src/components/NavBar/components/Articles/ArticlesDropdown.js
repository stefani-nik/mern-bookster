import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/category';
import axios from 'axios';
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
                <Dropdown text="" options={options} item />
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