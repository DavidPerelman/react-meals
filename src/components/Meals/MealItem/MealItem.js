import React from 'react';
import classes from './MealItem.module.css';

const MealItem = ({ meal }) => {
  console.log(meal);
  return (
    <div className={classes.meal}>
      <div className={classes.mealItem}>
        <h3>{meal.name}</h3>
        <span className={classes.description}>{meal.description}</span>
        <span className={classes.price}>{meal.price}</span>
      </div>
      <div>MealItem2</div>
    </div>
  );
};

export default MealItem;
