import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions/article';
import axios from 'axios';
import { Loader } from 'semantic-ui-react';
import AllArticlesList from './components/AllArticles/AllArticlesList';


class Articles extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.actions.getAllArticles();
    }

    render(){
        if(!this.props.allArticles)
        {
            return(
              <Loader/>
            )
        }
       // debugger
        return(

            <div>
                <AllArticlesList articles={this.props.allArticles}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        allArticles: state.article.allArticles,
    }
);


const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Articles);