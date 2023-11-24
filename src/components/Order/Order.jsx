import React from 'react';
import Cart from '../cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Order = () => {

   const cartProducts = useLoaderData()

    return (
        <div className='shop-conatiner'>
        <div className='product-container'>
          <h2>Order page {cartProducts.length}</h2>
        </div>
        <div className='cart-contaner'>
        <h2>Order Summary</h2>
            <Cart
            cart={cartProducts}
            ></Cart>
        </div>
    </div>
    );
};

export default Order;