import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateCartQty from "./UpdateCartQty";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex justify-between items-center py-4 ">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-5">
        <p className="font-bold">{formatCurrency(totalPrice)}</p>{" "}
        <UpdateCartQty id={pizzaId} itemQuantity={{ quantity }} />
        <DeleteItem id={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
