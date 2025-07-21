import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ meal }) => {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-xl shadow hover:shadow-lg p-4 flex flex-col justify-between">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="rounded mb-2 h-40 w-full object-cover"
      />
      <h2 className="font-semibold">{meal.strMeal}</h2>
      <button
        onClick={() => dispatch(addToCart(meal))}
        className="mt-2 bg-orange-400 text-white px-4 py-1 rounded hover:bg-orange-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
