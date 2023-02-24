import React from "react";
import styles from "./Page1.module.scss";
import image1 from "../../../assets/page2image1.avif";
import image2 from "../../../assets/page2image2.avif";
import image3 from "../../../assets/page2image3.webp";
import image4 from "../../../assets/page2image4.webp";
import image5 from "../../../assets/page2image5.webp";

const Page2 = () => {
  return (
    <div className={styles.page1}>
      <div className={styles.big1}>
        <img src={image1} alt="" />
        <div className={styles.bigContent} >
          <p>Galaxy S23 Ultra</p>
          <p>Avail Benefits upto &#x20b9;50999*</p>
          <button>Buy Now</button>
        </div>
      </div>
      <div className={styles.big2}>
        <div className={styles.small1}>
          <div className={styles.small}>
            <img src={image2} alt="" />
            <div className={styles.smallContent} id={styles.light}>
              <p>Galaxy A73</p>
              <p>Starting &#x20b9;37999*</p>
              <button>Buy Now</button>
            </div>
          </div>
          <div className={styles.small}>
            <img src={image3} alt="" />
            <div className={styles.smallContent} id={styles.light}>
              <p>Galaxy A33</p>
              <p>Starting &#x20b9;24999*</p>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
        <div className={styles.small1}>
          <div className={styles.small}>
            <img src={image4} alt="" />
            <div className={styles.smallContent}>
              <p>Galaxy M04</p>
              <p>Starting &#x20b9;7499*</p>

              <button>Buy Now</button>
            </div>
          </div>
          <div className={styles.small}>
            <img src={image5} alt="" />
            <div className={styles.smallContent} id={styles.light}>
              <p>Galaxy F04</p>
              <p>Starting &#x20b9;7499*</p>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
