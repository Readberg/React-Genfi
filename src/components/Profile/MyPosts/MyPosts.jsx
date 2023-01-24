import c from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  let postElements = props.posts.map((p) => (
    <Post
      name={p.name}
      time={p.time}
      message={p.message}
      likeCount={p.likeCount}
    />
  ));

  return (
    <div className={c.myPosts}>
      <h2 className={c.postsTitle}>All post</h2>
      <div className={c.posts}>{postElements}</div>
    </div>
  );
}

export default MyPosts;
