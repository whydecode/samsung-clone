import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { FaTimes } from "react-icons/fa";
import { BsCart2, BsSearch } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { BiMenu } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "../../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import myData from "./myData.json";
import {
  SET_ACTIVE_USER,
  REMOVE_ACTION_USER,
} from "../../redux/slice/authSlice";
import ShowOnLogin, { ShowOnLogout } from "../hiddenLink/hiddenLink";
import Dropdown from "../dropdown/Dropdown";

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>SAMSUNG</h2>
    </Link>
  </div>
);

const cart = (
  <span className={styles.cart}>
    <Link to="/cart" id={styles.noHover}>
      <BsCart2 size={20} />
    </Link>
  </span>
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {
  const [showMenu, setshowMenu] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Monitor currently sign in user
  useEffect(() => {
    // console.log(myData);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        // const uid = user.uid;
        // console.log(user.displayName.split(" ")[0]);
        if (user.displayName == null) {
          setDisplayName(user.email.substring(0, user.email.indexOf("@")));
        } else {
          setDisplayName(user.displayName.split(" ")[0]);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        setDisplayName("");
        dispatch(
          REMOVE_ACTION_USER({
            email: "",
            userName: "",
          })
        );
      }
    });
  }, [dispatch, displayName]);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };
  const hideMenu = () => {
    setshowMenu(false);
  };
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout Successful...");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <ToastContainer autoClose={1000} />
      <header>
        <div className={styles.header}>
          {logo}
          <nav
            className={
              showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
            }
          >
            <div
              className={
                showMenu
                  ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                  : `${styles["nav-wrapper"]}`
              }
              onClick={hideMenu}
            ></div>
            <ul onClick={hideMenu}>
              <li className={styles["logo-mobile"]}>
                <FaTimes size={22} onClick={hideMenu} />
              </li>
              <li style={{ display: showMenu ? "block" : "none" }}>
                <NavLink to="/login" className={activeLink}>
                  Log-in/Sign-Up
                </NavLink>
              </li>
              <li>
                <NavLink to="/mobile" id={styles.noBackg}>
                  {showMenu ? (
                    "Mobile"
                  ) : (
                    <Dropdown title={"Mobile"} data={myData[0]} />
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={activeLink} id={styles.noBackg}>
                  {showMenu ? (
                    "TV & AV"
                  ) : (
                    <Dropdown title={"TV & AV"} data={myData[1]} />
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={activeLink} id={styles.noBackg}>
                  {showMenu ? (
                    "Home Appliances"
                  ) : (
                    <Dropdown title={"Home Appliances"} data={myData[2]} />
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={activeLink} id={styles.noBackg}>
                  {showMenu ? (
                    "Laptop & Monitors"
                  ) : (
                    <Dropdown title={"Laptop & Monitors"} data={myData[3]} />
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={activeLink}>
                  Displays
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={activeLink}>
                  Accessories
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={activeLink} id={styles.noBackg}>
                  {showMenu ? (
                    "SmartThings"
                  ) : (
                    <Dropdown title={"SmartThings"} data={myData[4]} />
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={activeLink}>
                  Offers
                </NavLink>
              </li>
            </ul>

            <div className={styles["header-right"]} onClick={hideMenu}>
              <span className={styles.links}>
                <ShowOnLogin>
                  <NavLink to="/" onClick={logoutUser}>
                    Logout
                  </NavLink>
                </ShowOnLogin>
              </span>
              <ul>
                <li>
                  <NavLink to="/contact" className={activeLink}>
                    {showMenu ? (
                      "Support"
                    ) : (
                      <Dropdown title={"Support"} data={myData[5]} />
                    )}
                  </NavLink>
                </li>
                <li>
                  <a href="/">For Business</a>
                </li>
                <li>
                  <a href="/" id={styles.noHover}>
                    <BsSearch size={20} />
                    {showMenu && <span>Search</span>}
                  </a>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className={activeLink}
                    id={styles.noHover}
                  >
                    <CiUser size={23} />
                    {showMenu && <span>Profile</span>}
                  </NavLink>
                </li>
                <li>{cart}</li>
              </ul>
            </div>
          </nav>
          <div className={styles["menu-icon"]}>
            {cart}
            <BiMenu size={30} onClick={toggleMenu} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
