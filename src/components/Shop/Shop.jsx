import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Shop = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  useEffect(() => {
    const storedCart = getShoppingCart()
    let savedCart = [];
    for(const id in storedCart){
      const addededProduct = products.find(product => product.id === id);
       if(addededProduct){
        const quantity = storedCart[id];
        addededProduct.quantity = quantity;
        savedCart.push(addededProduct)
       }
    }
    setCart(savedCart)
  },[products])

  const handleAddToCart = product => {
    let newCart = [];

    const exist = cart.find(pd => pd.id === product.id)
    if(!exist){
      product.quantity = 1;
      newCart = [...cart, product];
    }else{
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter(pd => pd.id !== product.id);
      newCart = [...remaining, exist]
    }
    setCart(newCart)
    addToDb(product.id)
  }

  const handleDeleteCartAll = () => {
    setCart([])
    deleteShoppingCart()
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
                <Cart
                handleDeleteCartAll={handleDeleteCartAll}
                cart={cart}
                >
                  <div>
                    <Link className='link-procced' to='order'>
                    <button className='procced-order-btn'>Review Order <FaArrowRight/></button></Link>
                  </div>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;