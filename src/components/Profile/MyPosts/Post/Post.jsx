import Author from './Author/Author';
import Content from './Content/Content';
import c from './Post.module.css'
import Reactions from './Reactions/Reactions';

function Post() {
    return (
        <div className={c.post}>
            <Author />
            <Content />
            <Reactions />
        </div>
    )
}

export default Post;