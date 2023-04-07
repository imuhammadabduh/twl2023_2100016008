import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-5 fixed w-full z-10 bg-[rgb(255,255,255)]">
      <div className="flex items-center">
        <Link to="/" className="text-lg font-bold text-gray-800">
        Muhammad Abduh
        </Link>
      </div>

      <div className="block lg:hidden">
        <button
          className="navbar-burger flex items-center py-2 px-3 text-gray-500 rounded border border-gray-600 hover:text-gray-800 hover:border-gray-800"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Muhammad Abduh</title>
            <path
              fillRule="evenodd"
              d="M2 5h16a1 1 0 110 2H2a1 1 0 110-2zm0 6h16a1 1 0 110 2H2a1 1 0 110-2zm0 6h16a1 1 0 110 2H2a1 1 0 110-2z"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`${
          isOpen ? "" : "hidden"
        } w-full lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4"
          >
            Home
          </Link>

          <Link
            to="/todos"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4"
          >
            Todos
          </Link>
          <Link
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
