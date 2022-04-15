import React, { Component } from "react";
import TodoItems from "./components/TodoItems/TodoItems";
import AddItem from "./components/AddItem/AddItems";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Eslam", age: 30 },
      { id: 2, name: "Mohamed", age: 28 },
      { id: 3, name: "Amr", age: 26 },
    ],
  };

  render() {
    return (
      <div className="App">
        TodoList App
        <TodoItems />
        <AddItem />
      </div>
    );
  }
}

export default App;
