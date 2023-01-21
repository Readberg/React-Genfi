import c from './Reactions.module.css'
import Like from '../../../../../images/Like.svg';
import Comment from '../../../../../images/comment.svg';

function Reactions(props) {
    return (
        <div className={c.reactions}>
            <div className={c.likes}>
                <img className={c.like} src={Like} alt="like image" />
                <p className={c.likeCount}>{props.likeCount}</p>
            </div>           
           <img className={c.comment} src={Comment} alt="like image" />
        </div>
    )
}

export default Reactions;