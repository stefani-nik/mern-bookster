import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header, Divider, Image, Grid, Reveal} from 'semantic-ui-react'
import './allBooksList.css'

const AllBooksList = ({books}) => {
    return (
        <div className='all-books-wrapper'>
            <Divider/>
            <Header size='huge' textAlign='center' className='page-title'>All Books</Header>
            <Divider/>
            <Grid relaxed columns={6} divided>
              {
                  books.map((b, i) =>
                <Grid.Column>
                    <Reveal animated='move'>
                    <Reveal.Content visible>
                        <Link to={b.detailsNavigation} centered>
                            <Image src={b.imageUrl} alt="" size="small" centered rounded bordered/>
                        </Link>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                    <div class='allbook-title'>
                        <Link to={b.detailsNavigation} centered>
                            <p><b className='introduce'>Title:</b> <br/>{b.title}</p>
                        </Link>
                    </div>
                    </Reveal.Content>
                  </Reveal>
                </Grid.Column>
                  )}
            </Grid>
        </div>
    )
};

AllBooksList.propTypes = {
    books: PropTypes.array.isRequired
};

export default AllBooksList;