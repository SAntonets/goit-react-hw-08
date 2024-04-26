import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/slice";
import { Navigate } from "react-router";

function PrivateRoute({ children }) {
    const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" replace />
}

export default PrivateRoute