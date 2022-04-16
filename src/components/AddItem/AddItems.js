import React, { Component } from "react";
import "./AddItems.css";

// const width = {
//   width: "12rem",
//   display: "inline-block",
// };

// const verticalAlign = {
//   verticalAlign: "inherit",
// };

class AddItem extends Component {
  state = {
    name: "",
    age: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addItem(this.state);
    this.setState({
      name: "",
      age: "",
    });
  };

  render() {
    return (
      <div className="text-center">
        <form onSubmit={this.handleSubmit}>
          <div className="col-6" style={{ display: "inline-block" }}>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Add Name"
              onChange={this.handleChange}
              value={this.state.name}
              required
              autoComplete="off"
              style={{
                backgroundColor: "#EEE",
                borderRadius: "0px",
              }}
            />
          </div>

          <div className="col-4" style={{ display: "inline-block" }}>
            <input
              type="number"
              className="form-control "
              id="age"
              placeholder="Add Age"
              onChange={this.handleChange}
              value={this.state.age}
              required
              autoComplete="off"
              style={{
                backgroundColor: "#EEE",
                borderRadius: "0px",
              }}
            />
          </div>

          <button
            className="btn btn-primary col-2"
            type="submit"
            value="Submit"
            style={{ verticalAlign: "inherit", borderRadius: "0px" }}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddItem;
