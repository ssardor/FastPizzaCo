import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex justify-between items-center py-4 ">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-5">
        <p className="font-bold">{formatCurrency(totalPrice)}</p>{" "}
        <DeleteItem></DeleteItem>
      </div>
    </li>
  );
}

export default CartItem;
