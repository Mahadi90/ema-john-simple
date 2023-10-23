import React from 'react';
import './Cart.css'
import Product from '../Product/Product';

const Cart = ({cart}) => {

   let totalPrice = 0;
   let shippingCharge = 0;

   for(const product of cart){
    totalPrice = totalPrice + product.price ;
    shippingCharge = shippingCharge + product.shipping;
   }
   const tax = totalPrice * 2 / 100;
   const grandTotal = totalPrice + shippingCharge + tax;
    return (
        <div className='order-summary'>
        <p>Selected Items : {cart.length}</p>
        <p>Total Price : {totalPrice}</p>
        <p>Shipping Charge : {shippingCharge}</p>
        <p>Tax : {tax}</p>
        <h4>Grand Total : {grandTotal}</h4>
        <button className='btn-carts'>Clear Cart</button>
        <button className='btn-carts'>Review Order</button>
        </div>
  );
};

export default Cart;