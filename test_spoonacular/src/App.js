import './App.css';
import React, { useState } from "react";

function App() {
  //const [searchData, setSearchData] = useState(null);
  //const [calories, setCalories] = useState(2000);
  //const apiKey = 'bb4c5730e058484aa07a4015606a1922';
  const apiKey = 'd8de6f34acff4ea89755be40ac8a5ca7';
  function searchMeals() {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=pasta&number=2`
    )
      .then((response) => response.json())
      .then((data) => {
        //setSearchData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function getRecipe(){
    fetch(
      `https://api.spoonacular.com/recipes/654883/information?apiKey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }
  
  return (
    <div>
      <button onClick={searchMeals}>Search for pasta</button>
      <button onClick={getRecipe}>Get Pasta and Vegetable Soup</button>
    </div>
  );
}

export default App;
