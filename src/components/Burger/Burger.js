import React from "react";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients) // we convert our Object into Array to be able to call map on it
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []); // arr previous value el current value we flatten our previous array to be able to check the length and display JSX depending on that length
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>You can start building your burger!</p>;
  }
  return (
    <div className={classes["Burger"]}>
      <BurgerIngredient type='bread-top'></BurgerIngredient>
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom'></BurgerIngredient>
    </div>
  );
};

export default burger;
