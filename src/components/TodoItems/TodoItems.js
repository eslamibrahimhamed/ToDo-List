import React from "react";
import "./TodoItems.css";

const TodoItems = (props) => {
  const { items, deleteItem } = props;
  let length = items.length;

  const listItems = length ? (
    items.map((item) => {
      return (
        <div key={item.id}>
          <span className="name col-6">{item.name}</span>
          <span className="name col-4">{item.age}</span>
          <span
            className="action col-2"
            style={{ cursor: "pointer" }}
            onClick={() => deleteItem(item.id)}
          >
            <i
              className="fa-solid fa-trash"
              style={{ color: "#f00", fontSize: "15px" }}
            ></i>
          </span>
        </div>
      );
    })
  ) : (
    <p className="mb-0">There Is No Items To Show</p>
  );

  return (
    <div
      className="listItems"
      style={{
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px",
        border: "1px solid #CCC",
      }}
    >
      <div style={{ backgroundColor: "#DDD" }}>
        <span className="titleName col-6">Name</span>
        <span className="titleAge col-4">Age</span>
        <span className="titleAction  col-2">Control </span>
      </div>
      {listItems}
    </div>
  );
};

export default TodoItems;
