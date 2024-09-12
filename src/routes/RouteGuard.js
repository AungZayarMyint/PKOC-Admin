import Login from "../components/Login";
import { decodeData } from "../utils/Helper";

export default function RouteGuard({ children }) {
  const token = decodeData(localStorage.getItem("r_c_a"));
  if (token && token?.user_role === "admin") {
    return children;
  } else {
    return <Login />;
  }
}
