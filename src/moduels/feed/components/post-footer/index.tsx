import Favorite from "@/components/icons/favorite";
import React from "react";
import styles from "./post-footer.module.scss";

interface PostFooterProps {
  likeCount: number;
  tags: string[];
  commentCount: number;
  caption: string;
}

const PostFooter = ({ likeCount, tags, commentCount, caption }: PostFooterProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.likeContainer}>
        <Favorite />
        <span>{likeCount} likes</span>
      </div>
      <p className={styles.caption}>{caption}</p>
      <div>
        {tags.map((tag, key) => (
          <span key={key} className={styles.tag}>
            #{tag}
          </span>
        ))}
      </div>

      <div className={styles.comments}>
        <span role="button" className={styles.commentButton}>
          View {commentCount} comments
        </span>
      </div>
    </div>
  );
};

export default PostFooter;
