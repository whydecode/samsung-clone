import ReactDOM from "react-dom";
import styles from "./Loader.module.scss";
import loaderImage from "../../assets/Loader.gif";
const Loader = () => {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src={loaderImage} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader;
