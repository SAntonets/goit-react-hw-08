import Navigation from "../Navigation/Navigation"
import { selectIsLoggedIn } from "../../redux/auth/slice"
import { useSelector } from "react-redux"
import UserMenu from "../UserMenu/UserMenu"
import AuthNav from "../AuthNav/AuthNav"
import css from './AppBar.module.css'
import clsx from "clsx"


function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.AppBar}>
    <Navigation />
    {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
);
}

export default AppBar