import React from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();
  const className =
    "text-lg text-blue-500 hover:text-blue-700 hover:underline inline-block my-4";
  if (to == "-1") {
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }

  return <Link className={className}>{children}</Link>;
};

export default LinkButton;
