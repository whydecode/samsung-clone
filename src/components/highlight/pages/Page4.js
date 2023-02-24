import React from "react";
import styles from "./Page1.module.scss";
import image1 from "../../../assets/page4image1.avif";
import image2 from "../../../assets/page4image2.avif";
import image3 from "../../../assets/page4image3.avif";
import image4 from "../../../assets/page4image4.webp";
import image5 from "../../../assets/page4image5.avif";

const Page4 = () => {
  return (
    <div className={styles.page1}>
      <div className={styles.big1}>
        <img src={image1} alt="" />
        <div
          className={styles.bigContent}
          id={styles.light}
          style={{ top: "10%" }}
        >
          <p>Store More Flexibly,</p>
          <p>Save More Energy</p>
          <button>Buy Now</button>
        </div>
      </div>
      <div className={styles.big2}>
        <div className={styles.small1}>
          <div className={styles.small}>
            <img src={image2} alt="" />
            <div className={styles.smallContent} id={styles.light}>
              <p>WindFree Split AC</p>
              <p>Starting &#x20b9;34853*</p>
              <button>Buy Now</button>
            </div>
          </div>
          <div className={styles.small}>
            <img src={image3} alt="" />
            <div className={styles.smallContent} id={styles.light}>
              <p>324L Twin Cooling Plus</p>
              <p>Starting &#x20b9;30240*</p>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
        <div className={styles.small1}>
          <div className={styles.small}>
            <img src={image4} alt="" />
            <div className={styles.smallContent} id={styles.light}>
              <p>8.0 Kg AI Ecobubble</p>
              <p>Starting &#x20b9;32740*</p>
              <button>Buy Now</button>
            </div>
          </div>
          <div className={styles.small}>
            <img src={image5} alt="" />
            <div className={styles.smallContent} id={styles.light}>
              <p>28L SlimFry MW</p>
              <p>Starting &#x20b9;14122*</p>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
