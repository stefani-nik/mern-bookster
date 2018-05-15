import React from 'react';
import { withRouter } from 'react-router'
import StaticLinksGroup from './components/StaticLinks';

import './navBar.css'

class NavBar extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const path = this.props.location.pathname.split('/');
        const active = path[1];
        return(
                <StaticLinksGroup/>
        );
    }
}



export default withRouter(NavBar);