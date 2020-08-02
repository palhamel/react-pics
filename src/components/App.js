import React from "react";
import { SearchBar } from "./SearchBar";

export class App extends React.Component {
  onSearchSubmit(term) {
    console.log('from App comp:', term)
  }


  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
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
