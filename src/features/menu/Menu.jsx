import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import Menuitem from "./MenuItem";
function Menu() {
  const menu = useLoaderData();
  return (
    <>
      <div className="mx-auto max-w-3xl">
        <ul className="divide-y px-2 divide-stone-500">
          {menu.map((pizza) => (
            <Menuitem pizza={pizza} key={pizza.id} />
          ))}
        </ul>
      </div>
    </>
  );
}

export async function loader() {
  const res = await getMenu();
  return res;
}

export default Menu;
