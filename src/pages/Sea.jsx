import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";

const Seafood = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching meals:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-lg font-semibold mt-10">Loading...</p>;
  }

  return (
    <>
    <Navbar/>
    
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-500">Seafood Menu</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-4 flex flex-col items-center"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 text-center mb-3">
              {meal.strMeal}
            </h2>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
              Add
            </button>
          </div>
        ))}
      </div>
    </div>

    <Footer/>

    </>
  );
};

export default Seafood;