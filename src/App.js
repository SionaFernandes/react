import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "123", age: 26 },
      { name: "456", age: 12 },
      { name: "789", age: 25 }
    ]
  };

  switchNameHandler = () => {
    // console.log("clicked");
    //not supported : this.state.persons[0].name = "112";
    this.setState({
      persons: [
        { name: "123333", age: 26 },
        { name: "456555", age: 12 },
        { name: "789999", age: 25 }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <p>Testing React</p>
        <button onClick={this.switchNameHandler}>Switch Button</button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />

        {/* hard-coded */}
        <Person name="Abc" age="20" />
        <Person name="Pqr" age="26">
          Hobbies:Coding
        </Person>
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
