import Message from './Message/Message';
import c from './Messages.module.css'

function Messages(props) {
    return (
        <div className={c.messages}>
            <Message message='hi'/>
            <Message message='How are you?'/>
            <Message message='Fine'/>
            <Message message='where are you from?'/>
        </div>
    )
}

export default Messages;