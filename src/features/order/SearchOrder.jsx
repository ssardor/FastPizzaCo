import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="rounded-full focus:outline-none bg-yellow-50 py-2 px-4 focus:px-7 duration-200 ease-out "
          placeholder="Search Order #"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </form>
    </>
  );
};

export default SearchOrder;
