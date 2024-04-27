import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/slice";
import { Navigate } from "react-router";

const RestrictedRoute = ({ component: Component, redirectTo="/" }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return isLoggedIn ? <Navigate to={redirectTo} replace /> : Component
}


export default RestrictedRoute