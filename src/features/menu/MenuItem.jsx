import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addToCart, deleteCart, getCurrentQuantity } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateCartQty from "../cart/UpdateCartQty";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl, quantity } =
    pizza;
  const itemQuantity = useSelector(getCurrentQuantity(id));
  const isAdded = itemQuantity?.quantity > 0;

  const handleAddToCart = (e) => {
    e.preventDefault();
    const newPizza = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: 1 * unitPrice,
    };
    dispatch(addToCart(newPizza));
  };
  return (
    <li className="flex px-2 py-4 gap-3 font-Robo gap-5">
      <img
        src={imageUrl}
        alt={name}
        className={`w-32 ${soldOut ? "opacity-50 grayscale" : ""}`}
      />
      <div className="flex flex-col grow ">
        <p className="font-bold">{name}</p>
        <p className="italic">{ingredients.join(", ")}</p>
        <div className="flex justify-between items-center mt-auto">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-red-500 uppercase">Sold out!</p>
          )}
          {!soldOut && isAdded > 0 && (
            <div className="flex items-center justify-between gap-6">
              <UpdateCartQty id={id} itemQuantity={itemQuantity} />
              <DeleteItem id={id} />
            </div>
          )}

          {!soldOut && !isAdded && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
