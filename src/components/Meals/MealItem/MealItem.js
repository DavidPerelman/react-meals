import React from 'react';
import MealItemForm from '../MealItemForm/MealItemForm';
import classes from './MealItem.module.css';

const MealItem = ({ meal }) => {
  console.log(meal);
  const price = `$${meal.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={meal.id} />
      </div>
    </li>
  );
};

export default MealItem;
