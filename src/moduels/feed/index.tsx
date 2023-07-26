import React, { useState } from "react";
import FeedFooter from "./components/feed-footer";
import styles from "./feed.module.scss";
import Post from "./components/post";
import { usePost } from "./hooks/use-post";
import FeedHeader from "./components/feed-header";

const Feed = () => {
  const [type, setType] = useState<"home" | "favorite">("home");

  const { posts, isLoading, handleFavorite } = usePost(type);

  return (
    <div className={styles.container}>
      <FeedHeader onChange={setType} active={type} />
      {posts.map((post) => (
        <Post key={post.id} post={post} onClickFavorite={handleFavorite} />
      ))}
      {!isLoading && posts.length === 0 && (
        <div className={styles.emptyPost}>
          <span>No post found..</span>
        </div>
      )}

      <FeedFooter onChange={setType} />
    </div>
  );
};

export default Feed;
