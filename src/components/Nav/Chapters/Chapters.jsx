import c from "./Chapters.module.css";
import {NavLink} from 'react-router-dom'

function Chapters() {
  return (
    <ul className={c.list}>
      <li className={c.item}>
        <NavLink to="/profile" className={`${c.link}`}>
          Profile
        </NavLink>
      </li>
      <li className={c.item}>
        <NavLink to="/feed" className={c.link}>
          Feed
        </NavLink>
      </li>
      <li className={c.item}>
        <NavLink to="/dialogs" className={c.link}>
          Messages
        </NavLink>
      </li>
      <li className={c.item}>
        <NavLink to="/music" className={c.link}>
          Music
        </NavLink>
      </li>
      <li className={c.item}>
        <NavLink to="/settings" className={c.link}>
          Settings
        </NavLink>
      </li>
    </ul>
  );
}

export default Chapters;
