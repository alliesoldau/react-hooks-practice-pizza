import React from "react";

function Pizza({ pizza, handleEditClick }) {

  function onEditClick() {
    handleEditClick(pizza)
  }

  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian.toString()}</td>
      <td>
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={onEditClick}
        >
            Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
