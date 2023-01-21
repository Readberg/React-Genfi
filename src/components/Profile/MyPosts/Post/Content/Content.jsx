import c from './Content.module.css'
import contentImage from '../../../../../images/content.png';

function Content() {
    return (
        <div className={c.content}>
            <p className={c.text}>A great day when you are confident in yourself!</p>
            <img className={c.img} src={contentImage} alt="content image" />
        </div>
    )
}

export default Content;