import React, { useState } from "react";

function PizzaForm({ pizzaForm, handleEditedPizza }) {

  // TO DO: need to populate the form with the info from the clicked on pizza to start

  const [vegetarian, setVegetarian] = useState(true)

  const [updatedPizza, setUpdatedPizza] = useState({
    topping: "",
    size: "",
    vegetarian: false,
  });
  
  function handleRadioChange(event) {
    console.log(`event.target.value: ${event.target.value}`)
    if (event.target.value === "Vegetarian") {
      setUpdatedPizza({
        ...updatedPizza,
        [event.target.name]: true,
        })
        setVegetarian(true)
    } else {
      setUpdatedPizza({
        ...updatedPizza,
        [event.target.name]: false,
        })
        setVegetarian(false)
    }
  }

  function handleChange(event) {
    setUpdatedPizza({
      ...updatedPizza,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(pizzaForm.id)
    fetch(`http://localhost:3001/pizzas/${pizzaForm.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topping: updatedPizza.topping,
        size: updatedPizza.size,
        vegetarian: updatedPizza.vegetarian
      }),
    })
    .then((r) => r.json())
    .then((data) => handleEditedPizza(data))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder={"Pizza Topping"}
            value={updatedPizza.topping}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select 
            className="form-control" 
            name="size"
            value={updatedPizza.size}
            onChange={handleChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian}
              onChange={handleRadioChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegetarian}
              onChange={handleRadioChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
  }
export default PizzaForm;
