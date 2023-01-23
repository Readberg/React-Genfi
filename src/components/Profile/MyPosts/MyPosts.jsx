import c from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts(props) {
let postsData = [
  {id: 1, name: 'Taisha', time: '5 minutes', message: 'A great day when you are confident in yourself!', likeCount: '17'},
  {id: 2, name: 'Andrew', time: '1 hour', message: 'Hi, how are you?', likeCount: '92'},
]

    return (
        <div className={c.myPosts}>
          <h2 className={c.postsTitle}>All post</h2>
          <div className={c.posts}>
            <Post name={postsData[0].name} time={postsData[0].time} message={postsData[0].message} likeCount={postsData[0].likeCount}/>
            <Post name={postsData[1].name} time={postsData[1].time} message={postsData[1].message} likeCount={postsData[1].likeCount}/>
          </div>
        </div>
    )
} 

export default MyPosts;