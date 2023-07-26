import React from "react";
import IconButton from "@/components/icon-button";
import Favorite from "@/components/icons/favorite";
import Home from "@/components/icons/home";
import styles from "./feed-footer.module.scss";

interface FeedFooterProps {
  onChange: (value: "home" | "favorite") => void;
}

const FeedFooter = ({ onChange }: FeedFooterProps) => {
  const handleChange = (value: "home" | "favorite") => onChange(value);

  return (
    <div className={styles.container}>
      <IconButton onClick={() => handleChange("home")}>
        <Home />
      </IconButton>
      <IconButton onClick={() => handleChange("favorite")}>
        <Favorite />
      </IconButton>
    </div>
  );
};

export default FeedFooter;
