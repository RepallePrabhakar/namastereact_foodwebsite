import React from "react";
import ItemCards from "./ItemCards";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    console.log("clicked");
    dispatch(clearCart());
  };
  return (
    <div>
      <ItemCards cards={cartItems} />
      <button
        className="px-5 m-7 font-bold border-x-2 border-y-0 bg-red-300 rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
