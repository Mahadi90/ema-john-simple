import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { useLoaderData } from 'react-router-dom';
import OrderProducts from '../orderedProducts/OrderProducts';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {

   const cartProducts = useLoaderData()
   const [cart, setCart] = useState(cartProducts)


   const deleteFromCartHandler = (id) => {
    const remaining = cart.filter(pd => pd.id !== id);
    setCart(remaining)
    removeFromDb(id)
   }


    return (
        <div className='shop-conatiner'>
        <div className='cartProduct-container'>
          {
            cart.map(cartProduct => <OrderProducts
            key={cartProduct.id}
            deleteFromCartHandler={deleteFromCartHandler}
            cartProduct={cartProduct}
            ></OrderProducts>)
          }
        </div>
        <div className='cart-contaner'>
        <h2>Order Summary</h2>
            <Cart
            cart={cart}
            ></Cart>
        </div>
    </div>
    );
};

export default Order;