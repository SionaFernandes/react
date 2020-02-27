import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <p>Testing React</p>
        <Person name="Abc" age="20" />
        <Person name="Pqr" age="26" />
        <Person name="Xyz" age="30" />
      </div>
    );
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", { className: "App" }, "This is a React App")
    // );
  }
}

export default App;
