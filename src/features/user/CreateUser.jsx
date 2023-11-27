import { useState } from "react";
import React from "react";
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
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
        <div>
          <Button type={"primary"} to={"/menu"}>
            start ordering
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
