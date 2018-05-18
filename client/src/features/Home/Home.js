import React from 'react'
import Featured from './components/Featured/Featured'
import PopularPost from './components/PopularPost/PopularPost'

class Home extends React.Component{

    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <Featured />
                <PopularPost />
            </div>
        );
    }
}

export default Home;