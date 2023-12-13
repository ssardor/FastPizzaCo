import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="p-5">
      <h1>Something went wrong 😢</h1>
      <p>{err.data || err.message}</p>
      <LinkButton to={"-1"}>🔙Go back!</LinkButton>
    </div>
  );
}

export default NotFound;
