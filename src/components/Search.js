import React from "react";

class Search extends React.Component {
  render(props) {
    const inputHandler = (e) => {
      this.setState({
        input: e.target.value,
      });
    };
    return (
      <div className="search">
        <input onChange={inputHandler} type="text" />
        <button onClick={() => this.props.search()}>Search</button>
      </div>
    );
  }
}

export default Search;
