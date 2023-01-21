import c from "./Panel.module.css";
import Avatar from "../../../images/Avatar.png";

function Panel() {
  return (
    <div>
      <img className={c.photo} src={Avatar} alt="avatar" />
      <div className={c.edit}>Edit profile</div>
    </div>
  );
}

export default Panel;
