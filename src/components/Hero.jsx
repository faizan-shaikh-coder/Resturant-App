import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-32"
      style={{ backgroundImage: "url('/healthy food.jpeg')", objectFit: "cover" }}
    >

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative container mx-auto flex flex-col items-center md:items-start text-center md:text-left px-6">
        <div className="md:w-1/2 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Best Catering Website
          </h2>
          <p className="mb-6 text-lg">
            Healthy meals made fresh daily. Catering at events, food that fits
            your lifestyle.
          </p>

          <Link to="/product">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg mr-4 hover:bg-green-700 transition">
              Find Out More..
            </button>

          </Link>

          <Link to="/menu">
            <button className="border border-green-600 px-6 py-3 rounded-lg text-green-600 bg-white hover:bg-gray-100 transition">
              Open Menu
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
