import Author from './Author/Author';
import Content from './Content/Content';
import c from './Post.module.css'
import Reactions from './Reactions/Reactions';

function Post(props) {
    return (
        <div className={c.post}>
            <Author name={props.name} time={props.time}/>
            <Content message={props.message}/>
            <Reactions likeCount={props.likeCount}/>
        </div>
    )
}

export default Post;