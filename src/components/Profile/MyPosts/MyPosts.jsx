import c from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts(props) {
    return (
        <div className={c.myPosts}>
          <h2 className={c.postsTitle}>All post</h2>
          <div className={c.posts}>
            <Post name='Taisha' time='5 minutes' message='A great day when you are confident in yourself!' likeCount='17'/>
            <Post name='Andrew' time='1 hour' message='Hi, how are you?' likeCount='92'/>
          </div>
        </div>
    )
} 

export default MyPosts;