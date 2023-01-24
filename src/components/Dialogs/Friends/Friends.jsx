import Friend from "./Friend/Friend";
import c from "./Friends.module.css";

function Friends(props) {
  let dialogsElements = props.friends.map((f) => (
    <Friend name={f.name} id={f.id} />
  ));

  return <div className={c.friends}>{dialogsElements}</div>;
}

export default Friends;
