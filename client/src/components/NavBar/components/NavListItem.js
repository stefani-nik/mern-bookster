import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'

let NavListItem = ({navigation, role, active}) => {
    let endPoint = navigation.split('/')[1];
    return(
        <Link to={navigation} className={active === endPoint ? 'link-item active-navbar' : 'link-item'} >{role}</Link>
    )
};

export default NavListItem;