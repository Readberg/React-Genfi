import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.css";
import Cover from "../../images/Cover.png"
import Panel from "./Panel/Panel";
import Description from "./Description/Description";


function Profile() {
  return (
    <div className={c.profile}>
      <img className={c.cover} src={Cover} alt="cover" />
      <div className={c.content}>
        <Panel />
        <Description />
        <MyPosts />
      </div>
    </div>
  );
}

export default Profile;
