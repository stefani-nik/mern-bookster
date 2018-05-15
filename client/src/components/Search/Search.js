import React, { Component } from 'react'
import { Search, Grid, Header } from 'semantic-ui-react'
import './search.css'


export default class SearchField extends Component {
  render() {
    return (
        <Grid.Column className='search-input'>
          <Search />   
        </Grid.Column> 
    )
  }
}