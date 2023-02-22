import React from "react";
import styles from "./Page1.module.scss";
import image1 from "../../../assets/page3image1.avif";
import image2 from "../../../assets/page3image2.avif";
import image3 from "../../../assets/page3image3.avif";
import image4 from "../../../assets/page3image4.avif";
import image5 from "../../../assets/page3image5.avif";

const Page3 = () => {
  return (
    <div className={styles.page1}>
      <div className={styles.big} style={{ backgroundImage: { image1 } }}>
        <img src={image1} alt="" />
        <div className={styles.bigContent} id={styles.light}>
          <p>Crystal 4K UHD AUE60</p>
          <p>Starting &#x20b9;26353*</p>
          <button>Buy Now</button>
        </div>
      </div>
      <div>
        <div className={styles.small}>
          <img src={image2} alt="" />
          <div className={styles.smallContent} id={styles.light}>
            <p>Neo QLED 8K</p>
            <p>Starting &#x20b9;17083* /month</p>
            <button>Buy Now</button>
          </div>
        </div>
        <div className={styles.small}>
          <img src={image4} alt="" />
          <div className={styles.smallContent} id={styles.light}>
            <p>The Frame</p>
            <p>Starting &#x20b9;59490*</p>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.small}>
          <img src={image3} alt="" />
          <div className={styles.smallContent} id={styles.light}>
            <p>Crystal 4K UHD BU8000</p>
            <p>Starting &#x20b9;38941*</p>
            <button>Buy Now</button>
          </div>
        </div>
        <div className={styles.small}>
          <img src={image5} alt="" />
          <div className={styles.smallContent} id={styles.light}>
            <p>M8 UHD Smart Monitor</p>
            <p>Starting &#x20b9;44699*</p>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
