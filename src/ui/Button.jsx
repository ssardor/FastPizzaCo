import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, type, to }) => {
  const className =
    " outline outline-offset-1 outline-yellow-600 mt-4 inline-block py-3 px-4 bg-yellow-500 hover:bg-yellow-200 tracking-tight hover:border-yellow-400 rounded-full uppercase font-semibold duration-300 focus:ring cursor-pointer";
  const styles = {
    primary: className,
    small: className + " px-4 py-1 text-sm",
  };
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  return <button className={styles[type]}>{children}</button>;
};

export default Button;
