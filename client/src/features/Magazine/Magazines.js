import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions/magazine';
import axios from 'axios';
import { Loader } from 'semantic-ui-react';
import AllMagazinesList from './components/AllMagazines/AllMagazinesList';


class Magazines extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.actions.getAllMagazines();
    }

    render(){
        if(!this.props.allMagazines)
        {
            return(
              <Loader/>
            )
        }
       // debugger
        return(

            <div>
                <AllMagazinesList magazines={this.props.allMagazines}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        allMagazines: state.magazine.allMagazines,
    }
);


const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Magazines);