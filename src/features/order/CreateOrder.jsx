import { useState } from "react";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  const user = useSelector((state) => state.user.username);

  return (
    <div className="px-4 py-6">
      <h2 className="text-center text-3xl font-semibold">
        Ready to order? Let's go!
      </h2>

      <form>
        <div className="flex items-center flex-col gap-3 mt-3">
          <label>First Name</label>
          <div>
            <input
              className="input"
              type="text"
              name="customer"
              required
              defaultValue={user}
            />
          </div>
        </div>

        <div className="flex items-center flex-col gap-3 mt-3">
          <label>Phone number</label>
          <div>
            <input className="input" type="tel" name="phone" required />
          </div>
        </div>

        <div className="flex items-center flex-col gap-3 mt-3">
          <label>Address</label>
          <div>
            <input className="input" type="text" name="address" required />
          </div>
        </div>

        <div className="text-center pt-4 gap-4 ">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div className="text-center">
          <Button type={"primary"}>Order now</Button>
        </div>
      </form>
    </div>
  );
}

export default CreateOrder;
