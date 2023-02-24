import React from "react";
import styles from "./Page1.module.scss";
import image1 from "../../../assets/page5image1.avif";
import image2 from "../../../assets/page5image2.avif";
import image3 from "../../../assets/page5image3.avif";
import image4 from "../../../assets/page5image4.avif";
import image5 from "../../../assets/page5image5.avif";

const Page5 = () => {
  return (
    <div className={styles.page1}>
      <div className={styles.big1}>
        <img src={image1} alt="" />
        <div className={styles.bigContent} id={styles.light}>
          <p>Galaxy Book3 Series</p>
          <p>Benefits up to &#x20b9;60100*</p>
          <button>Pre Book Now</button>
        </div>
      </div>
      <div className={styles.big2}>
        <div className={styles.small1}>
          <div className={styles.small}>
            <img src={image2} alt="" />
            <div className={styles.smallContent} id={styles.light}>
              <p>Galaxy Tab A8</p>
              <p>Starting &#x20b9;12649*</p>
              <button>Pre Book Now</button>
            </div>
          </div>
          <div className={styles.small}>
            <img src={image3} alt="" />
            <div className={styles.smallContent} id={styles.light}>
              <p>Galaxy Tab S7 FE</p>
              <p>Starting &#x20b9;36999*</p>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
        <div className={styles.small1}>
          <div className={styles.small}>
            <img src={image4} alt="" />
            <div className={styles.smallContent} id={styles.light}>
              <p>Galaxy Watch 4</p>
              <p>Starting &#x20b9;12999*</p>
              <button>Buy Now</button>
            </div>
          </div>
          <div className={styles.small}>
            <img src={image5} alt="" />
            <div className={styles.smallContent} id={styles.light}>
              <p>Galaxy Book3 Ultra</p>
              <p>Starting &#x20b9;19358* /month</p>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
