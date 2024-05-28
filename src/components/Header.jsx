import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import reslogo from "../assets/vecteezy_food-logo-design-template-restaurant_14971638.png";

const Header = () => {
  const [loginTxt, setLoginTxt] = useState("Login");
  let handleLoginBtn = () => {
    //console.log("clicked");
    loginTxt === "Login" ? setLoginTxt("Logout") : setLoginTxt("Login");
  };
  return (
    <div className="header">
      <img
        className="header_logo"
        src={reslogo}
        //src="https://scontent-pnq1-2.xx.fbcdn.net/v/t39.30808-6/313422636_501631841980902_933912768074837665_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ctg0hJ4TxRIQ7kNvgHmj3nV&_nc_ht=scontent-pnq1-2.xx&oh=00_AYBhfesekPAmqXol-pxHCo79S7T6oF-V9VhBXW-DGo0iYg&oe=6653CFC0"
      />
      <ul className="header_ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>Cart</li>
        <button className="login-btn" onClick={handleLoginBtn}>
          {loginTxt}
        </button>
      </ul>
    </div>
  );
};

export default Header;
