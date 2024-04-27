import clsx from "clsx";
import css from './UserMenu.module.css'
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/slice";
import { logout } from "../../redux/auth/operations";

function UserMenu() {

  const userData = useSelector(selectUser)
  
  const dispatch = useDispatch();
  
  const onLogout = () => {
    dispatch(logout())
  }
    
  return (
    <div className={css.UserMenu}>
      <div>
        <span>Hello, {userData.name}</span>
      </div>
        <button type="button" onClick={onLogout}>Log out 🍄</button>
    </div>
  )
}

export default UserMenu