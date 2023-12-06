import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { useSelector } from "react-redux";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  const user = useSelector((state) => state.user.username);
  return (
    <header className="flex gap-6 border-b-1 border-black bg-pizza p-5 font-Robo justify-around">
      <div className="flex justify-center gap-20">
        <Link
          to="/"
          className="text-stone-900 uppercase tracking-widest font-bold"
        >
          Fast Pizza Co
        </Link>
      </div>
      <SearchOrder />
      <h1 className="py-1 font-bold text-lg uppercase -tracking-tight">
        {user}
      </h1>
    </header>
  );
};

export default Header;
