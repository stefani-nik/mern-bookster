import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/book';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Loader, Divider, Image } from 'semantic-ui-react';


class BooksByCategory extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        let categoryId = this.props.match.params.id;
        this.props.actions.getBooksByCategory(categoryId);
    }

    render(){
        const books = this.props.booksByCategory;
        console.log(books);
        if(!books)
        {
            return(
              <Loader/>
            )
        }
        return(

            <div>
                  {
                  books.map((b, i) =>
                    <article className="masonry-brick entry format-standard">
                    <div className="brick-thumb">
                        <Link to={b.detailsNavigation} className="brick-thumb-link">
                            <Image src={b.imageUrl} alt="" size="small" aligned="center"/>
                        </Link>
                    <Divider hidden />
                </div>

                <div className="brick-text">
                    <div className="brick-header">
                        <h1 className="brick-title">
                            <Link to={b.detailsNavigation}>{b.title}<br/> by <i>{b.author}</i></Link>
                        </h1>
                    </div>
                </div>
                </article>
                  )}
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        booksByCategory: state.book.booksByCategory,
    }
);


const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(BooksByCategory);