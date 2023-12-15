import { useSelector } from "react-redux";
import { getTotalCartQuantity, getTotalPriceQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { Link } from "react-router-dom";
function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalPriceQuantity);
  if (totalCartQuantity <= 0) return null;
  return (
    <div className="bg-stone-900 text-white flex items-center justify-between px-5 py-4 uppercase font-Robo">
      <div className="">
        <p>pizz : {totalCartQuantity} </p>
        <p>Total Price : {formatCurrency(totalPrice)}</p>
      </div>
      <Link to="/cart"><p> Open cart &rarr;</p></Link>
    </div>
  );
}

export default CartOverview;
