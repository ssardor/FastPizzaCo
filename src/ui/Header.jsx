import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Header = () => {
  return (
    <header className="flex gap-6 border-b-2 border-black bg-pizza p-5 font-Robo justify-between">
      <div className="flex justify-center gap-36">
        <Link
          to="/"
          className="text-yellow-500 bg-black p-2 rounded-full px-4 py-3"
        >
          Pizza Go
        </Link>
        <Link
          to="/menu"
          className="text-yellow-500 bg-black p-2 rounded-full px-5 py-3"
        >
          Menu
        </Link>
        <Link
          to="/order/new"
          className="text-yellow-500 bg-black p-2 rounded-full px-5 py-3"
        >
          Order
        </Link>
      </div>
      <h1 className="py-1">Username</h1>
    </header>
  );
};

export default Header;
