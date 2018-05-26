import React from 'react'
import Featured from './components/Featured/Featured'
import PopularPost from './components/PopularPost/PopularPost'

class Home extends React.Component{

    constructor(){
        super();
    }

    state = {
        response: ''
      };
    
      componentDidMount() {
        this.callApi()
          .then(res => this.setState({ response: res.message }))
          .catch(err => console.log(err));
      }
    
      callApi = async () => {
        const response = await fetch('/api/home');
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
    
        return body;
      };

    render(){
        return(
            <div>
                <p>{this.state.response}</p>
                <Featured />
                <PopularPost />
            </div>
        );
    }
}

export default Home;