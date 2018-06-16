import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header, Divider, Image } from 'semantic-ui-react'

const AllBooksList = ({books}) => {
    return (
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
    )
};

AllBooksList.propTypes = {
    books: PropTypes.array.isRequired
};

export default AllBooksList;