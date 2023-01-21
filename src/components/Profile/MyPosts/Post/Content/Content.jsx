import c from './Content.module.css'
import contentImage from '../../../../../images/content.png';

function Content(props) {
    return (
        <div className={c.content}>
            <p className={c.text}>{props.message}</p>
            <img className={c.img} src={contentImage} alt="content image" />
        </div>
    )
}

export default Content;