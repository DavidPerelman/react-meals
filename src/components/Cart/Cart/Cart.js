import React, { Fragment, useContext, useState } from 'react';
import CartContext from '../../../store/cart-context';
import Modal from '../../UI/Modal/Modal';
import CartItem from '../CartItem/CartItem';
import Checkout from '../Checkout/Checkout';
import classes from './Cart.module.css';

const Cart = ({ onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmitting, setDidSubmitting] = useState(false);
  const [isCheckOut, setIsCheckOut] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckOut(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      'https://react-http-34a8b-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({ user: userData, orderItems: cartCtx.items }),
      }
    );
    setIsSubmitting(false);
    setDidSubmitting(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckOut && (
        <Checkout onConfirm={submitOrderHandler} onCancel={onClose} />
      )}
      {!isCheckOut && modalActions}
    </Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmittingModalContent = (
    <Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={onClose}>
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <Modal onClose={onClose}>
      {!isSubmitting && !didSubmitting && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmitting && didSubmittingModalContent}
    </Modal>
  );
};

export default Cart;
