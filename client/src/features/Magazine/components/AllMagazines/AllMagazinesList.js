import React from 'react';
import PropTypes from 'prop-types';
import { Header, Divider, Image } from 'semantic-ui-react'

const AllMagazinesList = ({magazines}) => {
    return (
        <div>
              {
                  magazines.map((m, i) =>
        <article className="masonry-brick entry format-standard">
        <div className="brick-thumb">
            <a href="post.html" className="brick-thumb-link">
                <Image src={m.imageUrl} alt="" size="small" aligned="center"/>
                <Divider hidden />
            </a>
        </div>

        <div className="brick-text">
            <div className="brick-header">
                <h1 className="brick-title">
                    <a href="post.html">{m.title}<br/> by <i>{m.author}</i></a>
                </h1>
            </div>
        </div>
        </article>
                  )}
        </div>
    )
};

AllMagazinesList.propTypes = {
    books: PropTypes.array.isRequired
};

export default AllMagazinesList;