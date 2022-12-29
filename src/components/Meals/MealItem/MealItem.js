import React from 'react';
import classes from './MealItem.module.css';

const MealItem = ({ meal }) => {
  const price = `$${meal.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div className={classes.mealItem}>
        <h3>{meal.name}</h3>
        <span className={classes.description}>{meal.description}</span>
        <span className={classes.price}>{price}</span>
      </div>
      <div>MealItem2</div>
    </li>
  );
};

export default MealItem;
