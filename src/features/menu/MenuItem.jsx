import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex px-2 py-4 gap-3 font-Robo font-semibold gap-5">
      <img
        src={imageUrl}
        alt={name}
        className={`w-32 ${soldOut ? "opacity-50 grayscale" : ""}`}
      />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div className="">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-red-500">Sold out!</p>
          )}
        </div>
        <Button type={"small"}>Add to cart</Button>
      </div>
    </li>
  );
}

export default MenuItem;
