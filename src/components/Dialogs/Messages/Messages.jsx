import Message from "./Message/Message";
import c from "./Messages.module.css";
import React from "react";

function Messages(props) {
  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let newMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  }

  return <div className={c.messages}>
    {messagesElements}
    <div className={c.addMessage}>
      <textarea ref={newMessageElement} className={c.messageText}></textarea>
      <button className={c.messageBtn} onClick={newMessage}>Send</button>
    </div>
    </div>;
}

export default Messages;
