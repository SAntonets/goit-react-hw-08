import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from './Navigation.module.css'
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/slice";

function Navigation() {
   const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    
        <nav>
          <NavLink className={getNavLinkClassName} to="/">
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink className={getNavLinkClassName} to="/contacts"> Contacts </NavLink>
          )}
        </nav>
     
  )
}

export default Navigation