import React from "react";

import { SearchBar } from './SearchBar'
import youtube from '../api/youtube'

export class App extends React.Component {
  onTermSubmit = (term) => {
    // console.log('from app.js:', term)
    youtube.get('/search', {
      params: {
        q: term,
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    )
  }
}
