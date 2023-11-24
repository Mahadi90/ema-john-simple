import React from 'react';
import './Cart.css';
import { FaTrashAlt } from 'react-icons/fa';


const Cart = ({cart, handleDeleteCartAll, children}) => {

   let totalPrice = 0;
   let shippingCharge = 0;
   let quantity = 0;

   for(const product of cart){
    totalPrice = totalPrice + product.price * product.quantity;
    shippingCharge = shippingCharge + product.shipping;
    quantity = quantity + product.quantity;
   }
   const tax = totalPrice * 2 / 100;
   const grandTotal = totalPrice + shippingCharge + tax;
    return (
        <div className='order-summary'>
        <p>Selected Items : {quantity}</p>
        <p>Total Price : ${totalPrice}</p>
        <p>Shipping Charge : ${shippingCharge}</p>
        <p>Tax : ${tax}</p>
        <h4>Grand Total : ${grandTotal}</h4>
        <button onClick={handleDeleteCartAll} className='btn-dlt-carts'>
          Clear Cart
          <FaTrashAlt />
          </button>
          {children}
        </div>
  );
};

export default Cart;