import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, type, to, onClick }) => {
  const className =
    " outline outline-offset-1 rounded-full uppercase font-semibold text-stone-600 duration-300 focus:ring cursor-pointer";
  const styles = {
    primary:
      className +
      " outline-yellow-600 inline-block bg-yellow-500 hover:bg-yellow-200 tracking-tight hover:border-yellow-400  py-3 px-4",
    small:
      className +
      " outline-yellow-600 inline-block bg-yellow-500 hover:bg-yellow-200 tracking-tight hover:border-yellow-400 px-3 py-1 text-sm",
    secondary:
      className +
      " outline-stone-600 bg-stone-200 hover:bg-stone-400 py-3 px-4 ",
    rounded:
      className +
      " outline-yellow-600 inline-block bg-yellow-500 hover:bg-yellow-200 tracking-tight hover:border-yellow-400 px-2 rounded-full py-0",
  };
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }
  return <button className={styles[type]}>{children}</button>;
};

export default Button;
