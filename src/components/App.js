import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };
  onTermSubmit = async (term) => {
    const response = youtube.get("search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: (await response).data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList />
      </div>
    );
  }
}

export default App;
