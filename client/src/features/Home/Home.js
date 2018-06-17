import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions/home';
import Featured from './components/Featured/Featured'
import PopularPostsList from './components/PopularPost/PopularPostsList'
import NewPostsList from './components/NewPost/NewPostsList';
import axios from 'axios';
import { Loader } from 'semantic-ui-react';


class Home extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.actions.getTrendingPosts();
        this.props.actions.getPopularPosts();
        this.props.actions.getNewPosts();
    }

    render(){
        if(!this.props.popular || !this.props.newPosts)
        {
            return(
              <Loader/>
            )
        }
        return(

            <div>
                <Featured />
                <PopularPostsList posts={this.props.popular}/>
                <NewPostsList posts={this.props.newPosts}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        trending: state.home.trending,
        popular: state.home.popular,
        newPosts: state.home.newPosts
    }
);


const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);