import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const NonProtectedRoute = () => {
  const jwtToken = Cookies.get("jwt_token");
  const auth = jwtToken === undefined;
  return auth ? <Outlet /> : <Navigate to="/homepage" />;
};

export default NonProtectedRoute;
