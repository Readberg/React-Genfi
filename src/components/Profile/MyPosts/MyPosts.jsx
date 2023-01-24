import c from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts(props) {
let posts = [
  {id: 1, name: 'Taisha', time: '5 minutes', message: 'A great day when you are confident in yourself!', likeCount: '17'},
  {id: 2, name: 'Andrew', time: '1 hour', message: 'Hi, how are you?', likeCount: '92'},
]

let postElements = posts.map (p => <Post name={p.name} time={p.time} message={p.message} likeCount={p.likeCount}/>)

    return (
        <div className={c.myPosts}>
          <h2 className={c.postsTitle}>All post</h2>
          <div className={c.posts}>
            {postElements}
          </div>
        </div>
    )
} 

export default MyPosts;