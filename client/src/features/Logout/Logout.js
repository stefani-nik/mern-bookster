import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {
    constructor() {
        super();
    }

    
  componentWillMount(){
        
            axios.get('/api/account/logout')
              .then((res) => {
                localStorage.removeItem('accessToken');
                this.props.history.push("/");
              });   
      }

      render() {
        return (
          <Redirect to="/" />
        );
      }
}

export default Logout;