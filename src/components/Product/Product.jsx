import React from 'react';
import './Product.css'

const Product = ({product}) => {
console.log(product)

const{img, name, price, seller, ratings, quantity } = product;

    return (
        <div className='product-card'>
           <img src={img} alt="" /> 
           <div className='product-info'>
            <h4>{name}</h4>
            <p>Price : ${price}</p>
            <p>Manufactures : {seller}</p>
            <p className='rate'>Ratings : {ratings}</p>
           </div>
           <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;