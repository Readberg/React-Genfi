import Friend from "./Friend/Friend";
import c from "./Friends.module.css";

function Friends() {
  let friends = [
    { id: 1, name: "Roman" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Victor" },
    { id: 4, name: "Igor" },
    { id: 5, name: "Ivan" },
    { id: 6, name: "Diana" },
  ];

  let dialogsElements = friends.map((f) => (
    <Friend name={f.name} id={f.id} />
  ));

  return <div className={c.friends}>{dialogsElements}</div>;
}

export default Friends;
