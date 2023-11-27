import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Cart from "./features/cart/Cart";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import NotFound from "./ui/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderID",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
  // return (
  // <div className="mx-auto bg-black">
  //   <h1 className="text-yellow-400 font-Robo font-bold text-center text-[40px]">
  //     Hello World !
  //   </h1>

  //   <div className="grid grid-cols-1 md:grid-cols-6 xl:grid-cols-12 gap-4 mt-12">
  //     <div className="h-14 bg-gray-500"></div>
  //     <div className="h-14 bg-gray-500"></div>
  //     <div className="h-14 bg-gray-500"></div>
  //     <div className="h-14 bg-gray-500"></div>
  //     <div className="h-14 bg-gray-500"></div>
  //     <div className="h-14 bg-gray-500"></div>
  //     <div className="h-14 bg-gray-500"></div>
  //     <div className="h-14 bg-gray-500"></div>
  //     <div className="h-14 bg-gray-500"></div>
  //     <div className="h-14 bg-gray-500"></div>
  //     <div className="h-14 bg-gray-500"></div>
  //     <div className="h-14 bg-gray-500"></div>
  //   </div>
  //   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-4">
  //     <div className="h-14 bg-yellow-500"></div>
  //     <div className="h-14 bg-yellow-500"></div>
  //     <div className="h-14 bg-yellow-500"></div>
  //     <div className="h-14 bg-yellow-500"></div>
  //   </div>
  //   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
  //     <div className="h-14 bg-purple-500"></div>
  //     <div className="h-14 bg-purple-500"></div>
  //     <div className="h-14 bg-purple-500 md:col-span-2 xl:col-span-1"></div>
  //   </div>
  //   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
  //     <div className="h-14 bg-blue-500 col-span-1 xl:col-span-2"></div>
  //     <div className="h-14 bg-blue-500"></div>
  //   </div>
  //   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 mt-4">
  //     <div className="h-14 bg-pink-500"></div>
  //     <div className="h-14 bg-pink-500"></div>
  //     <div className="h-14 bg-pink-500"></div>
  //     <div className="h-14 bg-pink-500"></div>
  //     <div className="h-14 bg-pink-500 md:col-span-2 xl:col-span-1"></div>
  //   </div>
  //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
  //     <div className="h-14 bg-red-500"></div>
  //     <div className="h-14 bg-red-500"></div>
  //   </div>
  //   <div className="grid grid-cols-1 gap-4 mt-4">
  //     <div className="h-14 bg-green-500"></div>
  //   </div>
  // </div>
  // );
}

export default App;
