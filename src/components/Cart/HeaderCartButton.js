import React from 'react';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      Cart <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
