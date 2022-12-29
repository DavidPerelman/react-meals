import React, { Fragment } from 'react';
import classes from './Header.module.css';
import btnClasses from './HeaderCartButton.module.css';
import image from '../../../assets/meals.jpg';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button className={btnClasses.button}>
          Cart <span className={classes.badge}>0</span>
        </button>
      </header>
      <div className={classes['main-image']}>
        <img src={image} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
