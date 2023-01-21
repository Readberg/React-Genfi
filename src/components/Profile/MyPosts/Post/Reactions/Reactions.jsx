import c from './Reactions.module.css'
import Like from '../../../../../images/Like.svg';
import Comment from '../../../../../images/comment.svg';

function Reactions() {
    return (
        <div className={c.reactions}>
           <img className={c.like} src={Like} alt="like image" />
           <img className={c.comment} src={Comment} alt="like image" />
        </div>
    )
}

export default Reactions;