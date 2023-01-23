import Message from './Message/Message';
import c from './Messages.module.css'

function Messages(props) {
    let messagesData = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'Fine'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Where are you from?'},
    ]

    return (
        <div className={c.messages}>
            <Message message={messagesData[0].message}/>
            <Message message={messagesData[1].message}/>
            <Message message={messagesData[2].message}/>
            <Message message={messagesData[3].message}/>
        </div>
    )
}

export default Messages;