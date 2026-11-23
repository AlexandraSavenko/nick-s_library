import { NavLink } from 'react-router-dom'
import css from './Header.module.css'

export default function Header() {
  return (
    <div className={css.header}>
      <NavLink className={({ isActive }) =>
          `${isActive ? css.activeLink : ""} ${css.link}`
        } to={"/books"}>Books</NavLink>
      <NavLink className={({ isActive }) =>
          `${isActive ? css.activeLink : ""} ${css.link}`
        } to={"/reading"}>Reading</NavLink>
    </div>
  )
}
