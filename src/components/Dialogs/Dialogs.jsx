import Friends from "./Friends/Friends";
import Messages from "./Messages/Messages";
import c from './Dialogs.module.css'

function Dialogs(props) {
    return (
        <div className={c.dialogs}>
            <Messages messages={props.state.messages}/>
            <Friends friends={props.state.friends}/>
        </div>
    )
}

export default Dialogs;