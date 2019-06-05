import React, { Component } from "react";
import Search from "./components/Search.js";
import Table from "./components/Table.js";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], isLoaded: false, searchTerm: "" };
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.fetchData(searchTerm);
  }

  fetchData = searchTerm => {
    fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
      .then(res => res.json())
      .then(data => this.filterDataHandler(data, this.state.searchTerm))
      .then(isLoaded => this.setState({ isLoaded: !isLoaded }));
  };

  filterDataHandler = (data, searchTerm) => {
    const filterData = data.filter(function(item) {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    this.setState({ data: filterData });
  };

  //set to the state the phrase you are looking for
  onSearchChange = e => {
    console.log(e.target.value);
    this.setState({ searchTerm: e.target.value });
    console.log(this.state);
  };

  onSearchClick = e => {
    const { searchTerm } = this.state;
    e.preventDefault();
    this.fetchData(searchTerm);
  };

  render() {
    let { isLoaded, data } = this.state;

    return (
      <div className='App'>
        <h1>Meteorite App - Chingu Prework</h1>
        <Search
          onSearchChange={this.onSearchChange}
          onSearchClick={this.onSearchClick}
        />
        {(!isLoaded && <div>loading</div>) || <Table data={data} />}
      </div>
    );
  }
}

export default App;
