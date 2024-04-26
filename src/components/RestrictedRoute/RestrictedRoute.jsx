import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/slice";
import { Navigate } from "react-router";

function RestrictedRoute({ children }) {
    const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to="/contacts" replace /> : children
}

export default RestrictedRoute