import css from "./ReadingLayout.module.css";
import { readings } from "../../reading";
import { NavLink, Outlet } from "react-router-dom";

export default function ReadingLayout() {
  return (
    <div className={css.readingLayout}>
      <nav className={css.nav}>
        {readings.map((task) => (
          <NavLink
            key={task.id}
            to={task.title}
            className={({ isActive }) =>
              `${isActive ? css.active : ""} ${css.link}`
            }
          >
            {task.title}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
