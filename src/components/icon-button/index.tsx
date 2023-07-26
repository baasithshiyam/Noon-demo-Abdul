import React, { ReactNode } from "react";
import styles from "./icon-button.module.scss";

interface AvatarProps {
  children: ReactNode;
  onClick: () => void;
}

const IconButton = ({ children, onClick }: AvatarProps) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default IconButton;
