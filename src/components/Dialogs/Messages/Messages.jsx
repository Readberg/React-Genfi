import Message from "./Message/Message";
import c from "./Messages.module.css";

function Messages(props) {
  let messages = [
    { id: 1, message: "hi" },
    { id: 2, message: "Fine" },
    { id: 3, message: "How are you?" },
    { id: 4, message: "Where are you from?" },
  ];

  let messagesElements = messages.map((m) => (
    <Message message={m.message} />
  ));

  return <div className={c.messages}>{messagesElements}</div>;
}

export default Messages;
