import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl relative">
          <img
            className="rounded-xl relative z-10"
            src="../assets/pictures/LogoNav.png"
            alt="Logo"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white to-transparent opacity-30 rounded-xl"></div>
        </div>

        <div className="hidden lg:flex space-x-8 text-white">
          <Link to="/">Accueil</Link>
          <Link to="./prestations">Prestations</Link>
          <Link to="./voitures">Voitures à Vendre</Link>
          <Link to="./contact">Contact</Link>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menu déroulant pour les appareils mobiles */}
      {isOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col mt-4">
            <li className="text-white py-2 border-b border-gray-700 hover:bg-gray-800">
              <Link to="/">Accueil</Link>
            </li>
            <li className="text-white py-2 border-b border-gray-700 hover:bg-gray-800">
              <Link to="/prestations">Prestations</Link>
            </li>
            <li className="text-white py-2 border-b border-gray-700 hover:bg-gray-800">
              <Link to="/voitures">Voitures à Vendre</Link>
            </li>
            <li className="text-white py-2 hover:bg-gray-800">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};


export default Navbar;

