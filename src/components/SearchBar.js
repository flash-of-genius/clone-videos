import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form action="" className="ui form">
          <div className="field">
            <label htmlFor="">Video Search</label>
            <input
              value={this.state.term}
              onChange={this.onInputChange}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
