import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, incrementQty, decrementQty } from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Cart ({total} items)</h1>
      {cart.map((item) => (
        <div
          key={item.idMeal}
          className="flex items-center justify-between border-b py-2"
        >
          <img src={item.strMealThumb} alt="" className="w-20 h-20 rounded" />
          <div className="flex-1 px-4">
            <h2>{item.strMeal}</h2>
          </div>
          <div className="flex gap-2 items-center">
            <button onClick={() => dispatch(decrementQty(item.idMeal))}>
              -
            </button>
            <span>{item.qty}</span>
            <button onClick={() => dispatch(incrementQty(item.idMeal))}>
              +
            </button>
            <button onClick={() => dispatch(removeFromCart(item.idMeal))}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
