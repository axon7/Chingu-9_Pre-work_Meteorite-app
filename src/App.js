import React, { Component } from "react";
import Search from "./components/Search.js";
import Table from "./components/Table.js";
// import { Provider } from "react-redux";
// import store from "./store";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], isLoaded: false, searchTerm: "" };
  }

  componentDidMount() {
    fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
      .then(res => res.json())
      .then(data => this.setState({ data: data, isLoaded: true }));
  }
  //set to the state the phrase you are looking for
  onSearchChange = e => {
    console.log(e.target.value);
    this.setState({ searchTerm: e.target.value });
    console.log(this.state);
  };

  funcFilter = pattern => item =>
    item.name.toLowerCase().includes(pattern.toLowerCase());

  render() {
    let { isLoaded, data, searchTerm } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className='App'>
          <Search onSearchChange={this.onSearchChange} />
          <Table
            data={data}
            pattern={searchTerm}
            funcFilter={this.funcFilter}
          />
        </div>
      );
    }
  }
}

export default App;
