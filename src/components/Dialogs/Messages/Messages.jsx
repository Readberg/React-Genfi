import Message from "./Message/Message";
import c from "./Messages.module.css";

function Messages(props) {
  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} />
  ));

  return <div className={c.messages}>{messagesElements}</div>;
}

export default Messages;
