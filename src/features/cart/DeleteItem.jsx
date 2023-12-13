import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteCart } from "./cartSlice";

const DeleteItem = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteCart(id));
  };
  return (
    <Button type="small" onClick={() => handleDelete(id)}>
      DELETE
    </Button>
  );
};

export default DeleteItem;
