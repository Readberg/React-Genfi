import Friend from './Friend/Friend';
import c from './Friends.module.css'

function Friends() {
    return (
        <div className={c.friends}>
            <Friend name='Roma' id='1'/>
            <Friend name='Sasha' id='2'/>
            <Friend name='Victor' id='3'/>
            <Friend name='Igor' id='4'/>
            <Friend name='Ivan' id='5'/>
            <Friend name='Diana' id='6'/>
        </div>
    )
}

export default Friends;