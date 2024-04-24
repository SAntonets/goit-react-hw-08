import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from './UserMenu.module.css'

function UserMenu() {

    
    const getNavLinkClassName = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });

  return (
    <div>
        <NavLink className={getNavLinkClassName} to="/contacts">Contacts</NavLink>
        <button type="button">Log out</button>
    </div>
  )
}

export default UserMenu