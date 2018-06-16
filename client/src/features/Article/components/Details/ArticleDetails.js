import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/article';
import axios from 'axios';
import { Loader } from 'semantic-ui-react';


class ArticleDetails extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        let articleId = this.props.match.params.id;
        this.props.actions.getArticleDetails(articleId);
    }

    render(){
        const article = this.props.articleDetails;
        if(!article)
        {
            return(
              <Loader/>
            )
        }
       // debugger
        return(

            <div>
               <p>{article.title}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        articleDetails: state.article.articleDetails,
    }
);


const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetails);