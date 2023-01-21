import c from "./Panel.module.css";
import Avatar from "../../../images/Avatar.png";

function Panel() {
  return (
    <div className={c.panel}>
      <img className={c.photo} src={Avatar} alt="avatar" />
      <button className={c.edit}>Edit profile</button>
    </div>
  );
}

export default Panel;
