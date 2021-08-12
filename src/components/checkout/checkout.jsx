import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/cart-context';
import Layout from '../shared/layout';
import StripeCheckout from "./stripe-checkout/stripe-checkout";
import './checkout.styles.scss';

const Checkout = () => {
  const { itemCount, total, cartItems } = useContext(CartContext);
 
  return (
    <Layout>
      <div className='checkout'>
        <h2>Checkout Summary</h2>
        <h3>{`Antal: ${itemCount}`}</h3>
        <h4>{`Total summa: ${total} SEK`}</h4>
    <StripeCheckout />
      </div>
    </Layout>
  );
}

export default Checkout;