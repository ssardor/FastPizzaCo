import React from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCart, getCurrentQuantity, increaseCart } from "./cartSlice";

const UpdateCartQty = ({ id, itemQuantity }) => {
  const dispatch = useDispatch();
  console.log(itemQuantity);

  return (
    <div className="flex gap-2 items-center">
      <Button type="rounded" onClick={() => dispatch(decreaseCart(id))}>
        -
      </Button>
      <span>{itemQuantity.quantity}</span>
      <Button type="rounded" onClick={() => dispatch(increaseCart(id))}>
        +
      </Button>
    </div>
  );
};

export default UpdateCartQty;
