import React from "react";

export class SearchBar extends React.Component {
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  state = { term: "" };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(event) => this.setState({ term: event.target.value})}
            />
            {/* <input type="text" onChange={this.onInputChange} /> */}
          </div>
        </form>
      </div>
    );
  }
}
