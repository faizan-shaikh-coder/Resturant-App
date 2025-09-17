import React from "react";
import { Route } from "react-router-dom";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Cheese Burger",
      price: "₹:- 200",
      image: "https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg"
    },
    {
      id: 2,
      name: "Chicken Biryani",
      price: "₹:- 150",
      image: "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg"
    },
    {
      id: 3,
      name: "Pasta Alfredo",
      price: "₹:-100",
      image: "https://www.themealdb.com/images/media/meals/rvxxuy1468312893.jpg"
    },
    {
      id: 4,
      name: "Margherita Pizza",
      price: "₹:- 250",
      image: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg"
    },
    {
      id: 5,
      name: "Grilled Salmon",
      price: "₹:- 200",
      image: "https://www.themealdb.com/images/media/meals/1548772327.jpg"
    }
  ];

  return (
    
    <div className="bg-gray-100 w-full h-fit p-5">
      <h1 className="text-center text-green-500 font-bold text-3xl mb-6">Best Meals</h1>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="mt-3 text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.price}</p>
            <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
