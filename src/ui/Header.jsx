import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { useSelector } from "react-redux";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  const user = useSelector((state) => state.user.username);
  return (
    <header className="flex gap-6 border-b-1 border-black bg-pizza p-5 font-Robo justify-around">
      <div className="grid grid-cols-3 gap-4">
      <div className="flex justify-center gap-20">
        <Link
          to="/"
          className="text-stone-900 uppercase tracking-widest font-bold"
        >
          Fast Pizza Co
        </Link>
      </div>
      <div>
      <SearchOrder />
      </div>
      <div>
      <h1 className="py-1 font-bold text-lg uppercase -tracking-tight">
        {user}
      </h1>
      </div>
      </div>
      
  
      
    </header>
  );
};

export default Header;
