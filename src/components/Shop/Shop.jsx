import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  const handleAddToCart = product => {
    const newCart = [...cart, product];
    setCart(newCart)
  }

    return (
        <div className='shop-conatiner'>
            <div className='product-container'>
              {
                products.map(product => <Product
                key={product.id}
                product = {product}
                handleAddToCart={handleAddToCart}
                ></Product>)
              }
            </div>
            <div className='cart-contaner'>
                <h2>Order Summary</h2>
                <div className='order-summary'>
                <p>Selected Items : {cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;