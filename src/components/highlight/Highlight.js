import React, { useState } from "react";
import styles from "./HighLight.module.scss";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";

const Highlight = () => {
  const [activeIndex, setActiveIndex] = useState(0); // initialize the active index to 0

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className={styles.highlight}>
      <h1>This Week's Highlights</h1>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => handleButtonClick(0)}
          className={`${activeIndex === 0 ? `${styles.buttonActive}` : ""}`}
        >
          New-in
        </button>
        <button
          onClick={() => handleButtonClick(1)}
          className={`${activeIndex === 1 ? `${styles.buttonActive}` : ""}`}
        >
          Mobile
        </button>
        <button
          onClick={() => handleButtonClick(2)}
          className={`${activeIndex === 2 ? `${styles.buttonActive}` : ""}`}
        >
          TV
        </button>
        <button
          onClick={() => handleButtonClick(3)}
          className={`${activeIndex === 3 ? `${styles.buttonActive}` : ""}`}
        >
          Appliances
        </button>
        <button
          onClick={() => handleButtonClick(4)}
          className={`${activeIndex === 4 ? `${styles.buttonActive}` : ""}`}
        >
          Galaxy Ecosystem
        </button>
      </div>
      <div className={styles.contentContainer}>
        <div
          className={styles.mydiv}
          style={{ transform: `translateX(${activeIndex * -100}%)` }}
        >
          <Page1 />
        </div>
        <div
          className={styles.mydiv}
          style={{ transform: `translateX(${activeIndex * -100}%)` }}
        >
          <Page2 />
        </div>
        <div
          className={styles.mydiv}
          style={{ transform: `translateX(${activeIndex * -100}%)` }}
        >
          <Page3 />
        </div>
        <div
          className={styles.mydiv}
          style={{ transform: `translateX(${activeIndex * -100}%)` }}
        >
          <Page4 />
        </div>
        <div
          className={styles.mydiv}
          style={{ transform: `translateX(${activeIndex * -100}%)` }}
        >
          <Page5 />
        </div>
      </div>
    </div>
  );
};

export default Highlight;
