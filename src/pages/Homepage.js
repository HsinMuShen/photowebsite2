import React, { useEffect } from "react";
import Search from "../components/Search";
import Pictrue from "../components/Picture";

class Homepage extends React.Component {
  state = {
    input: "",
  };

  state = {
    data: null,
  };

  inputHandler = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  search = async (URL) => {
    const auth = "563492ad6f917000010000018e86995e10f54ae5a9add270c0dc5e98";
    const datafetch = await fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await datafetch.json();
    this.setState({
      data: parsedData.photos,
    });
  };

  //頁面重新整理便執行initial URL
  componentDidMount() {
    const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=30";
    this.search(initialURL);
  }

  render() {
    const searchURL = `https://api.pexels.com/v1/search?query=${this.state.input}&per_page=30`;
    return (
      <div style={{ minHeight: "100vh" }}>
        <div className="search">
          <input onChange={this.inputHandler} type="text" />
          <button onClick={() => this.search(searchURL)}>Search</button>
        </div>
        <div className="pictures">
          {this.state.data &&
            this.state.data.map((data) => {
              return <Pictrue data={data} />;
            })}
        </div>
      </div>
    );
  }
}

export default Homepage;
