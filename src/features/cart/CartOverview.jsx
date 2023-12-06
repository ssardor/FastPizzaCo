import { useSelector } from "react-redux";
import { getTotalCartQuantity, getTotalPriceQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { Link } from "react-router-dom";
function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalPriceQuantity);
  if (totalCartQuantity <= 0) return null;
  return (
    <div className="bg-stone-900 text-white flex items-center justify-between px-10 py-4 uppercase font-Robo">
      <p className="space-x-4">
        <span>pizzas : {totalCartQuantity} </span>
        <span>Total Price : {formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
