import React, { Component } from "react";
import "./AddItems.css";

const width = {
  width: "12rem",
  display: "inline-block",
};

const verticalAlign = {
  verticalAlign: "inherit",
};
class AddItem extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Add Name"
            autoComplete="off"
            style={width}
          />

          <input
            type="number"
            className="form-control"
            name="age"
            placeholder="Add Age"
            autoComplete="off"
            style={width}
          />
          <button
            className="btn btn-primary"
            type="submit"
            value="Submit"
            style={verticalAlign}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddItem;
