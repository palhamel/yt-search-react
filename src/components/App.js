import React from "react";

import { SearchBar } from "./SearchBar";
import youtube from "../api/youtube";

export class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    // console.log('from app.js:', term)
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response);
    // set state with response items array:
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        We have {this.state.videos.length} videos.
      </div>
    );
  }
}
