import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from './AuthNav.module.css'
function AuthNav() {
    const getNavLinkClassName = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });

  return (
    <div className={css.AuthNav}>
          <NavLink className={getNavLinkClassName} to="/register">Sign up
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/login">Log in</NavLink>
    </div>
  )
}

export default AuthNav