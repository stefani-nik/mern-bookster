import React from 'react';
import PropTypes from 'prop-types';
import { Header, Divider, Image } from 'semantic-ui-react'

const AllArticlesList = ({articles}) => {
    return (
        <div>
              {
                  articles.map((a, i) =>
        <article className="masonry-brick entry format-standard">
        <div className="brick-thumb">
            <a href="post.html" className="brick-thumb-link">
                <Image src={a.imageUrl} alt="" size="small" aligned="center"/>
                <Divider hidden />
            </a>
        </div>

        <div className="brick-text">
            <div className="brick-header">
                <h1 className="brick-title">
                    <a href="post.html">{a.title}<br/> by <i>{a.author}</i></a>
                </h1>
            </div>
        </div>
        </article>
                  )}
        </div>
    )
};

AllArticlesList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default AllArticlesList;