import React from 'react';
import './OrderProducts.css'
import { FaTrashAlt } from 'react-icons/fa';

const OrderProducts = ({cartProduct, deleteFromCartHandler}) => {

    const {id,img,  name, quantity, price} = cartProduct;

    return (
        <div className='cartProduct'>
           <img className='product-img' src={img} alt="" />
           <div className="productDetails">
            <h2>{name}</h2>
            <p>Price : <span className='color-orange'>${price}</span></p>
            <p>Quantity : <span className='color-orange'>{quantity}</span></p>
           </div>
           <button onClick={() => deleteFromCartHandler(id)} className='product-btn'>
           <FaTrashAlt className='icon-trash' />
           </button>
        </div>
    );
};

export default OrderProducts;