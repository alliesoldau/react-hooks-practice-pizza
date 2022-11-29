import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzaData, handleEditClick }) {

  const pizzaTable = pizzaData.map((pizza) => {
    return (
      <Pizza
        key={pizza.id}
        pizza={pizza}
        handleEditClick={handleEditClick}
      />
    )
  })

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
          {pizzaTable}
      </tbody>
    </table>
  );
}

export default PizzaList;
