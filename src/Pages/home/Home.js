import React from "react";
import Highlight from "../../components/highlight/Highlight";
import Slide from "../../components/slide/Slide";
import Category from "../category/Category";
import styles from "./Home.module.scss";
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.preBook}>
        <p>
          Be the first to own Galaxy S23 series & get benefits upto &#x20b9;
          50999* <span>Pre-book Now{">"}.</span>
        </p>
      </div>
      <div className={styles.shopTitle}>
        <h1>Shop our limited time offers</h1>
      </div>
      <div>
        <Category />
      </div>
      <div>
        <Slide />
      </div>
      <Highlight />
    </div>
  );
};

export default Home;
