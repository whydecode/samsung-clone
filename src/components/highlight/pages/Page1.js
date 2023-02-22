import React from "react";
import styles from "./Page1.module.scss";
import image1 from "../../../assets/page1Image1.avif";
import image2 from "../../../assets/page1image2.avif";
import image3 from "../../../assets/page1Image3.avif";
import image4 from "../../../assets/page1image4.avif";
import image5 from "../../../assets/page1image5.avif";

const Page1 = () => {
  return (
    <div className={styles.page1}>
      <div className={styles.big} style={{ backgroundImage: { image1 } }}>
        <img src={image1} alt="" />
        <div className={styles.bigContent} id={styles.light}>
          <button>Pre Book Now</button>
        </div>
      </div>
      <div>
        <div className={styles.small}>
          <img src={image2} alt="" />
          <div className={styles.smallContent} id={styles.light}>
            <p>Galaxy Book3 Series</p>
            <p>Benefits upto &#x20b9;60100*</p>
            <button>Pre Book Now</button>
          </div>
        </div>
        <div className={styles.small}>
          <img src={image4} alt="" />
          <div className={styles.smallContent}>
            <p>Odyssey OLED G8</p>
            <p>Starting at &#x20b9;136649*</p>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.small}>
          <img src={image3} alt="" />
          <div className={styles.smallContent}>
            <p>Galaxy S23 | S23+</p>
            <button>Buy Now</button>
          </div>
        </div>
        <div className={styles.small}>
          <img src={image5} alt="" />
          <div className={styles.smallContent} id={styles.light}>
            <p>653L Side by Side</p>
            <p>Starting at &#x20b9;83900*</p>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
