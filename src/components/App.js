import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [pizzaData, setPizzaData] = useState([]);
  const [pizzaForm, setPizzaForm] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then((response) => response.json())
    .then((data) => setPizzaData(data))
  }, []);

  function handleEditClick(pizza) {
    setPizzaForm({
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian,
      id: pizza.id,
    })
  }

  function handleEditedPizza(editedPizza) {
    const updatedPizzaData = pizzaData.map((pizza) => {
      if (pizza.id === editedPizza.id) {
        return editedPizza
      } else {
        return pizza
      }
    })
    setPizzaData(updatedPizzaData)
  }

  return (
    <>
      <Header />
      <PizzaForm 
        pizzaForm={pizzaForm}
        handleEditedPizza={handleEditedPizza}
      />
      <PizzaList 
        pizzaData={pizzaData}
        handleEditClick={handleEditClick}
      />
    </>
  );
}

export default App;
