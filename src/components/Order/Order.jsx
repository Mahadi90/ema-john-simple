import React, { useState } from "react";
import Cart from "../cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import OrderProducts from "../orderedProducts/OrderProducts";
import "./Order.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FaCalendarCheck } from 'react-icons/fa';

const Order = () => {
  const cartProducts = useLoaderData();
  const [cart, setCart] = useState(cartProducts);

  const deleteFromCartHandler = (id) => {
    const remaining = cart.filter((pd) => pd.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const handleDeleteCartAll = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-conatiner">
      <div className="cartProduct-container">
        {cart.map((cartProduct) => (
          <OrderProducts
            key={cartProduct.id}
            deleteFromCartHandler={deleteFromCartHandler}
            cartProduct={cartProduct}
          ></OrderProducts>
        ))}
      </div>
      <div className="cart-contaner">
        <h2>Order Summary</h2>
        <Cart handleDeleteCartAll={handleDeleteCartAll} cart={cart}>
          <div>
            <Link className="link-procced" to="/checkOut">
              <button className="procced-order-btn">Procced Checkout  <FaCalendarCheck /></button>
            </Link>
          </div>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
