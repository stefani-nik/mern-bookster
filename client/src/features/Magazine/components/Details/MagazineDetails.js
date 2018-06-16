import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/magazine';
import axios from 'axios';
import { Loader } from 'semantic-ui-react';


class MagazineDetails extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        let magazineId = this.props.match.params.id;
        this.props.actions.getMagazineDetails(magazineId);
    }

    render(){
        const magazine = this.props.magazineDetails;
        if(!magazine)
        {
            return(
              <Loader/>
            )
        }
       // debugger
        return(

            <div>
               <p>{magazine.title}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        magazineDetails: state.magazine.magazineDetails,
    }
);


const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(MagazineDetails);