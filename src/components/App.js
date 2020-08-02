import React from "react";
import axios from "axios";
import { SearchBar } from "./SearchBar";

export class App extends React.Component {
  onSearchSubmit(term) {
    // console.log('from App comp:', term)
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
      },
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

/*

export const App = () => {
  return (
    <div className="ui container" style={{ marginTop: '10px'}}>
      <SearchBar />
    </div>
  );
};

*/
