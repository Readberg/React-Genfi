import c from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts() {
    return (
        <div className={c.myPosts}>
          <h2 className={c.postsTitle}>All post</h2>
          <div className={c.posts}>
            <Post />
            <Post />
          </div>
        </div>
    )
} 

export default MyPosts;