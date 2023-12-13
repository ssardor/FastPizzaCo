import React from "react";
import Button from "../../ui/Button";

const DeleteItem = ({ onClick }) => {
  return (
    <Button type="small" onClick={onClick}>
      DELETE
    </Button>
  );
};

export default DeleteItem;
