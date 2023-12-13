import Header from "./Header";
import React from "react";
import CreateUser from "../features/user/CreateUser";
function Home() {
  return (
    <div className="text-center my-10">
      <h1 className="mb-8 font-semibold my-2 text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-400">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <div className="">
        <CreateUser />
      </div>
    </div>
  );
}

export default Home;
