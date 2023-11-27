import React from "react";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state == "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-stone-200">
      {/* {isLoading && <Loader />} */}
      <Header />
      <div className="overflow-scroll">
        <main className="overflow-x">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
