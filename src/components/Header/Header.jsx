import React, { useContext } from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user,logOut } = useContext(AuthContext);


  const handleLogout = () =>{
    logOut()
    .then(result => 
        {})
    .catch(error => {
        console.log(error.message);
    })
  }

  return (
    <nav>
      <img src={logo} alt="" />
      <p className="text-red-700 bg-white p-2 rounded">{user && user.email}</p>
      <div className="nav-item">
        <Link to="/">Shop</Link>
        <Link to="/order">Review Order</Link>
        <Link to="/checkOut">Checkout</Link>
        <Link to="/inventory">Inventory</Link>
        {user ? (
          <Link><button onClick={handleLogout}>Log Out</button></Link>
        ) : (
          <>
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
