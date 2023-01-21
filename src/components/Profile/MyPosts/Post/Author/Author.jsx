import c from './Author.module.css'
import ava from '../../../../../images/author.png';

function Author(props) {
    return (
        <div className={c.author}>
            <img className={c.avatar} src={ava} alt="author avatar" />
            <div>
                <h4 className={c.name}>{props.name}</h4>
                <p className={c.time}>{props.time} ago</p>
            </div>
        </div>
    )
}

export default Author;