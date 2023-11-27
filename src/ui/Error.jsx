import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
  const navigate = useNavigate();
  const err = useRouteError();
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{err.data}</p>
      <LinkButton to={"-1"}>🔙Go back!</LinkButton>
    </div>
  );
}

export default NotFound;
