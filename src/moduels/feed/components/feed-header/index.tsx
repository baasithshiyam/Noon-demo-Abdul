import React from "react";
import IconButton from "@/components/icon-button";
import Favorite from "@/components/icons/favorite";
import Home from "@/components/icons/home";
import styles from "./feed-header.module.scss";

interface FeedHeaderProps {
  active: "home" | "favorite";
  onChange: (value: "home" | "favorite") => void;
}

const FeedHeader = ({ active, onChange }: FeedHeaderProps) => {
  const handleChange = (value: "home" | "favorite") => onChange(value);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <a>Instagram Clone</a>
        <div className={styles.tabs}>
          <div
            className={`${active === "home" ? styles.tabActive : styles.tab}`}
            role="button"
            onClick={() => onChange("home")}
          >
            <Home />
            <p>Home</p>
          </div>
          <div
            className={`${active === "favorite" ? styles.tabActive : styles.tab}`}
            role="button"
            onClick={() => onChange("favorite")}
          >
            <Favorite />
            <p>Favorite</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedHeader;
