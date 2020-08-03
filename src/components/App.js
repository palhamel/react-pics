import React from "react";
import unsplash from '../api/unsplash'
import { SearchBar } from "./SearchBar";

export class App extends React.Component {
  state = { images: [] }


  onSearchSubmit = async (term) => {
    // console.log('from App comp:', term)
    const response = await unsplash
      .get("/search/photos", {
        params: { query: term },
      });

    this.setState({ images: response.data.results}) 
  } 
 

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: { this.state.images.length } images
      </div>
    );
  }
}

/* 

onSearchSubmit(term) {
    // console.log('from App comp:', term)
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
        },
      })
      .then((response) => {
        console.log(response.data.results);
      });
  }

.............

export const App = () => {
  return (
    <div className="ui container" style={{ marginTop: '10px'}}>
      <SearchBar />
    </div>
  );
};

*/
