import Friends from "./Friends/Friends";
import Messages from "./Messages/Messages";
import c from './Dialogs.module.css'

function Dialogs() {
    return (
        <div className={c.dialogs}>
            <Messages />
            <Friends />
        </div>
    )
}

export default Dialogs;