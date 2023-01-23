import Friend from "./Friend/Friend";
import c from "./Friends.module.css";

function Friends() {
  let friendsData = [
    { id: 1, name: "Roman" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Victor" },
    { id: 4, name: "Igor" },
    { id: 5, name: "Ivan" },
    { id: 6, name: "Diana" },
  ];

  return (
    <div className={c.friends}>
      <Friend name={friendsData[0].name} id={friendsData[0].id} />
      <Friend name={friendsData[1].name} id={friendsData[1].id}/>
      <Friend name={friendsData[2].name} id={friendsData[2].id} />
      <Friend name={friendsData[3].name} id={friendsData[3].id} />
      <Friend name={friendsData[4].name} id={friendsData[4].id} />
      <Friend name={friendsData[5].name} id={friendsData[5].id} />
    </div>
  );
}

export default Friends;
