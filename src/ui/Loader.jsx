import React from "react";

const Loader = () => {
  return (
    <div className="absolute flex items-center justify-center bg-slate-200/30 backdrop-blur-sm inset-0">
      <div className="loader "></div>
    </div>
  );
};

export default Loader;
