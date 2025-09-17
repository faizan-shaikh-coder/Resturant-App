import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-green-500 shadow-md top-0 sticky w-full h-16 z-20 flex justify-center">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-bold text-white"><span className="text-4xl">🍽️</span>Gadly</h1>
        <ul className="flex space-x-6 font-semibold text-lg gap-10 text-white">
          <li><Link to="/" className="hover:text-zinc-700 hover:underline transition hover:duration-300 transition">Home</Link></li>
          <li className="relative">
            <button
              onClick={() => setOpen(!open)} // toggle dropdown
              className="hover:text-zinc-700 hover:underline transition"
            >
              Menu ▾
            </button>
            {open && (
              <ul className="absolute left-0 mt-2 bg-green-500 text-white rounded shadow-lg w-40 text-center">
                <li>
                  <Link
                    to="/veg"
                    className="block px-4 py-2 text-white hover:bg-green-100  hover:text-zinc-700"
                    onClick={() => setOpen(false)} // close after click
                  >
                    Veg
                  </Link>
                </li>
                <li>
                  <Link
                    to="/nonveg"
                    className="block px-4 py-2  hover:bg-green-100 hover: text-white hover:text-zinc-700"
                    onClick={() => setOpen(false)}
                  >
                    Non-Veg
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sea"
                    className="block px-4 py-2 hover:bg-green-100 text-white  hover:text-zinc-700"
                    onClick={() => setOpen(false)}
                  >
                    Seafood
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li><Link to="/services" className="hover:hover:text-zinc-700 hover:underline">Services</Link></li>
          <li><Link to="/about" className="hover:hover:text-zinc-700 hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:hover:text-zinc-700 hover:underline">Contact</Link></li>
          <button className="text-2xl text-gary-300 mt-1"><FaShoppingCart /></button>
          <button className="text-xl text-gary-300 mt-1"><FaUser/></button>

        </ul>
      </div>
    </nav>
  );
}
