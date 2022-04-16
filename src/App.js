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

  // deleteItem = (id) => {
  //   let items = this.state.items;
  //   let i = items.findIndex((item) => item.id === id);
  //   items.splice(i, 1);
  //   this.setState({ items: items });
  // };

  deleteItem = (id) => {
    let items = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items });
  };

  render() {
    return (
      <div className="App">
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem />
      </div>
    );
  }
}

export default App;
