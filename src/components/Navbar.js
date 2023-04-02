import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex content-center justify-center gap-3 bg-slate-300 py-4 fixed w-full">
      <Link className="hover:text-orange-500" to="/">
        Home
      </Link>
      <Link className="hover:text-orange-500" to="/about">
        About
      </Link>
      <Link className="hover:text-orange-500" to="/skill">
        Skills
      </Link>
      <Link className="hover:text-orange-500" to="/service">
        Service
      </Link>
      <Link className="hover:text-orange-500" to="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
