import React from 'react';
import classes from './Header.module.css';
import btnClasses from './HeaderCartButton.module.css';
import image from './meals.jpg';

const Header = () => {
  return (
    <div className={classes['main-image']}>
      <img src={image} />
      <header>
        <h2>React Meals</h2>
        <div>
          <button className={btnClasses.button}>
            Your Cart <span className={classes.badge}>0</span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
