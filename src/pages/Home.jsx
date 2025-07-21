import React, { useEffect, useState } from "react";
import { fetchMeals } from "../api";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeals().then(setMeals);
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {meals?.map((meal) => (
        <ProductCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default Home;
