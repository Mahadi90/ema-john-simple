import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            <div className='nav-item'>
                <Link to="/">Shop</Link>
                <Link to="/order">Review Order</Link>
                <Link to="/checkOut">Checkout</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/signup">Sign up</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;