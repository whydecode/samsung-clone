import React, { useEffect, useState } from "react";
import styles from "./Dropdown.module.scss";
const Dropdown = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div className={styles.dropdown}>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <a href="#" id={styles.title}>
          {title}
        </a>
        {isOpen && (
          <div className={styles.dropdownContent} style={{height: isOpen? "350px":0}}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {data.columns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.data.map((row, index) => (
                  <tr key={index} className={styles.row}>
                    {data.columns.map((column) => (
                      <td key={column}>
                        <a href="">{row[column]}</a>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div
        className={styles.dropdownWrapper}
        style={{ display: isOpen ? "block" : "none" }}
      ></div>
    </div>
  );
};

export default Dropdown;
