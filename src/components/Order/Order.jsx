import React from 'react';
import Cart from '../cart/Cart';
import { useLoaderData } from 'react-router-dom';
import OrderProducts from '../orderedProducts/OrderProducts';
import './Order.css'

const Order = () => {

   const cartProducts = useLoaderData()

    return (
        <div className='shop-conatiner'>
        <div className='cartProduct-container'>
          {
            cartProducts.map(cartProduct => <OrderProducts
            key={cartProduct.id}
            cartProduct={cartProduct}
            ></OrderProducts>)
          }
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