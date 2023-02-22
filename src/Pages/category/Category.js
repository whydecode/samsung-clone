import React, { useEffect } from "react";
import styles from "./Category.module.scss";
import category0 from "../../assets/category0.webp";
const Category = () => {
  const array = [
    {
      title: "Buy More Save More",
      imageURL: require("../../assets/category1.png"),
    },
    {
      title: "Mobiles",
      imageURL: require("../../assets/category2.webp"),
    },
    {
      title: "Television & SoundBar",
      imageURL: require("../../assets/category3.webp"),
    },
    {
      title: "Refrigerators",
      imageURL: require("../../assets/category4.png"),
    },
    {
      title: "Washing Machines",
      imageURL: require("../../assets/category5.png"),
    },
    {
      title: "Air Conditioners",
      imageURL: require("../../assets/category6.webp"),
    },
    {
      title: "Tablets & Wearables",
      imageURL: require("../../assets/category7.webp"),
    },
    {
      title: "Laptops & Monitors",
      imageURL: require("../../assets/category8.png"),
    },
    {
      title: "Kitchen Care",
      imageURL: require("../../assets/category9.png"),
    },
    {
      title: "Accerssories",
      imageURL: require("../../assets/category10.webp"),
    },
    
  ];
  useEffect(() => {
    console.log(array?.[0].imageURL);
  }, []);
  return (
    <div className={styles.category}>
      <div className={styles.category2}>
        <img src={category0} alt="Star" />
        <p>Featured Deals</p>
      </div>
      {array.map((item, index) => (
        <div key={index} className={styles.category1}>
          <img src={item.imageURL} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
