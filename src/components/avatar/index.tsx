import Image from "next/image";
import React from "react";
import styles from "./avatar.module.scss";

interface AvatarProps {
  src: string;
}

const Avatar = ({ src }: AvatarProps) => {
  return (
    <div className={styles.container}>
      <Image src={src} alt="avatar" fill className={styles.image} />
    </div>
  );
};

export default Avatar;
