import React, { Fragment } from 'react';
import classes from './Header.module.css';
import image from '../../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onShowCart }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={image} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
