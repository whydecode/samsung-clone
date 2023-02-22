import React from "react";
import styles from "./Footer.module.scss";
import footerData from "./footerData.json" 
const date = new Date()
const year = date.getFullYear()
const List = ({ title, items }) => (
  <div className={styles.listBox}>
    <h3>{title}</h3>
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li key={index}>
          <a href=""> {item}</a>
        </li>
      ))}
    </ul>
  </div>
);
const Footer = () => {
  return (
    <div className={styles.footer}>
      {footerData.lists.map((list, index) => (
        <List key={index} title={list.title} items={list.items} />
      ))}

      <div className={styles.copyright}>
        <hr />
        <p> Copyright ⓒ 1995-2023 SAMSUNG All Rights reserved.</p>

        <p>
          {" "}
          Please dispose of e-waste and plastic waste responsibly. For more
          information or e-waste pick up, please call 1800 5 7267864 or click
          here for more details.
        </p>

        <p>
          Registered Office Address: 6th Floor, DLF Centre, Sansad Marg, New
          Delhi-110001 Corporate Identification Number (CIN):
          U31900DL1995PTC071387
        </p>
      </div>
    </div>
  );
};

export default Footer;
