import axios from "axios";

export const fetchMeals = async () => {
  const res = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
  );
  return res.data.meals;
};
