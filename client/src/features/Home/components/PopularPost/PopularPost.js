import React from 'react'
import { Divider, Image, Header, Rating, Button } from 'semantic-ui-react'

import './popularPost.css'

class PopularPost extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div> 
                <Header size='huge' textAlign='center'>What will you find?</Header>
                <Divider />
            <div className="masonry-wrap">
            <div className="masonry">

                <article className="masonry-brick entry format-standard">
                    <div className="brick-thumb">
                        <a href="post.html" class="brick-thumb-link">
                            <Image src="https://i.pinimg.com/736x/88/c2/5e/88c25eb20dd750d70384937dbf55a4d2--travel-books-classic-books.jpg" alt="" size="small" aligned="center"/>
                            <Divider hidden />
                        </a>
                    </div>

                    <div className="brick-text">
                        <div class="brick-header">
                            <h1 className="brick-title">
                                <a href="post.html">On the Road <br/> by <i>Duluoz Legend </i></a>
                            </h1>
                        </div>
                        <div className="entry-meta">
                         <Rating maxRating={5} defaultRating={3} icon='star' disabled/>
                        </div>
                        <div className="entry-btn">
                            <Button secondary>Learn More</Button>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        </div>
        )
    }
}

export default PopularPost;