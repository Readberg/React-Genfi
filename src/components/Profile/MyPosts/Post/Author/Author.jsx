import c from './Author.module.css'
import ava from '../../../../../images/author.png';

function Author() {
    return (
        <div className={c.author}>
            <img className={c.avatar} src={ava} alt="author avatar" />
            <div>
                <h4 className={c.name}>Tanisha</h4>
                <p className={c.time}>5 minutes ago</p>
            </div>
        </div>
    )
}

export default Author;