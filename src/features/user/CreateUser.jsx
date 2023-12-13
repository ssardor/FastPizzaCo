import { useState } from "react";
import React from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "./userSlice";
import { Navigate, useNavigate } from "react-router-dom";

function CreateUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.username);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (username) {
      dispatch(updateUsername(username));
      navigate("/menu");
      setUsername("");
    }
  }
  if (user) {
    return (
      <Button type={"primary"} to={"/order/new"}>
        Continue ordering,{user}!
      </Button>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <p className="text-stone-600 mb-4 text-sm md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="py-2 px-3 rounded-full focus:border-yellow-500 border-4 border-transparent"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div className="py-6">
          <Button type={"primary"}>start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
