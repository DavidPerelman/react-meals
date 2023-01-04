import React, { useEffect, useState } from 'react';
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://react-http-34a8b-default-rtdb.firebaseio.com/meals.json'
      );
      const responseData = await response.json();
      setMeals(responseData);
    };

    fetchMeals();
  }, []);

  const mealList = meals.map((meal) => {
    return <MealItem key={meal.id} meal={meal}></MealItem>;
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
