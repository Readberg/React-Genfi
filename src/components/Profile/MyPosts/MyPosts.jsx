import c from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts() {
    return (
        <div>
          Posts
          <div>
            <textarea></textarea>
            <button>Add post</button>
          </div>
          <div>
            <Post />
            <Post />
          </div>
        </div>
    )
} 

export default MyPosts;