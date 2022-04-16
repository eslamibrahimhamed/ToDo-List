import React from "react";
import "./TodoItems.css";

const iconStyle = {
  color: "#f00",
  fontSize: "15px",
  cursor: "pointer",
};

const TodoItems = (props) => {
  const { items, deleteItem } = props;
  let length = items.length;

  const listItems = length ? (
    items.map((item) => {
      return (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{item.age}</span>
          <span onClick={() => deleteItem(item.id)}>
            <i className="fa-solid fa-trash" style={iconStyle}></i>
          </span>
        </div>
      );
    })
  ) : (
    <p className="mb-0">There Is No Items To Show</p>
  );

  return (
    <div className="listItems">
      <div>
        <span>Name</span>
        <span>Age</span>
        <span>Control</span>
      </div>
      {listItems}
    </div>
  );
};

export default TodoItems;
