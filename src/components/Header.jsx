import React from "react";
import "../App.css";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://scontent-pnq1-2.xx.fbcdn.net/v/t39.30808-6/313422636_501631841980902_933912768074837665_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ctg0hJ4TxRIQ7kNvgHmj3nV&_nc_ht=scontent-pnq1-2.xx&oh=00_AYBhfesekPAmqXol-pxHCo79S7T6oF-V9VhBXW-DGo0iYg&oe=6653CFC0"
      />
      <ul className="header_ul">
        <li>Home</li>
        <li>About Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
