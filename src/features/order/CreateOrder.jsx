import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { Form, redirect, useActionData } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { clearCart } from "../cart/cartSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const data = useActionData();
  const user = useSelector((state) => state.user.username);
  const { cart } = useSelector((state) => state.cart);
  console.log(data);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <div className="px-4 py-6">
      <h2 className="text-center text-3xl font-semibold">
        Ready to order? Let's go!
      </h2>

      <Form method="POST">
        <div className="flex items-center  gap-3 mt-3">
          <label className="w-[115px]">First Name</label>
          <input
            className="input w-3/4"
            type="text"
            name="customer"
            required
            defaultValue={user}
          />
        </div>

        <div className="flex items-center  gap-3 mt-3">
          <label className="items-center">Phone number</label>
          <input className="input w-3/4" type="tel" name="phone" required />
        </div>
        <p className="text-center pt-2">
          {data?.phone && (
            <p className="text-red-500">
              Please write correct phone number and we will call you!
            </p>
          )}
        </p>

        <div className="flex items-center gap-3 mt-3">
          <label className="w-[115px]">Address</label>
          <input className="input w-3/4" type="text" name="address" required />
        </div>

        <div className="text-center pt-4 gap-4 flex">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div className="mt-5">
          <input name="cart" type="hidden" value={JSON.stringify(cart)} />
          <Button type={"primary"} onClick={() => handleClear}>
            Order now
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const errors = {};

  if (!isValidPhone(data.phone))
    errors.phone = "Please write correct phone number";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = {
    ...data,
    priority: data.priority === "on",
    cart: JSON.parse(data.cart),
  };
  const order = await createOrder(newOrder);
  return redirect(`/order/${order.id}`);
}

export default CreateOrder;
