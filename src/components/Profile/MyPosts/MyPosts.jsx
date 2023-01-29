import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

function MyPosts(props) {
  let postElements = props.posts.map((p) => (
    <Post
      name={p.name}
      time={p.time}
      message={p.message}
      likeCount={p.likeCount}
    />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text)
  }

  return (
    <div className={c.myPosts}>
      <div className={c.postArea}>
        <textarea ref={newPostElement} className={c.newPost}></textarea>
        <button className={c.postBtn} onClick={addPost}>Add post</button>
      </div>
      <h2 className={c.postsTitle}>All post</h2>
      <div className={c.posts}>{postElements}</div>
    </div>
  );
}

export default MyPosts;
