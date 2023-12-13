import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import UpdateCartQty from "./UpdateCartQty";
function Cart() {
  const user = useSelector((state) => state.user.username);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };

  if (cart.length == 0) {
    return <EmptyCart />;
  }

  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2>Your cart, {user}</h2>
      <div className="divide-y-2 border-y-2 my-4">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item}></CartItem>
        ))}
      </div>
      <div className="gap-5 flex">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button onClick={handleClear} type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
