import React from "react";
import { SearchBar } from "./SearchBar";
import youtube from "../api/youtube";
import { VideoList } from "./VideoList";
import { VideoDetail } from "./VideoDetail";

export class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    // console.log('from app.js:', term)
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    // console.log(response);
    // set state with response items array:
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    console.log("from app:", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {/* We have {this.state.videos.length} videos. */}
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
