import Avatar from "@/components/avatar";
import Image from "next/image";
import React from "react";
import { Post } from "../../types";
import PostFooter from "../post-footer";
import Heart from "react-animated-heart";

import styles from "./post.module.scss";

interface PostProps {
  post: Post;
  onClickFavorite: (id: string, favorite: boolean) => void;
}

const Post = ({ post, onClickFavorite }: PostProps) => {
  const { id, user, image, tags, title, subTitle, commentCount, likeCount, caption, favorite } = post;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Avatar src={user.avatar} />
        <span>{user.name}</span>
      </div>
      <div className={styles.imageContainer}>
        <Image src={image} alt="post-image" fill sizes="100vw" className={styles.image} />
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div className={styles.caption}>
              <h4>{title}</h4>
              <p>{subTitle}</p>
            </div>
            <Heart isClick={favorite} onClick={() => onClickFavorite(id, !favorite)} />
          </div>
        </div>
      </div>

      <PostFooter likeCount={likeCount} commentCount={commentCount} tags={tags} caption={caption} />
    </div>
  );
};

export default Post;
