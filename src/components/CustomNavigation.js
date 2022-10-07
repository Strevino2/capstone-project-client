import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { debounce } from "../utilities/helpers";
import HamburgerMenu from "./HamburgerMenu";
import CustomHamburgerMenu from "./CustomHamburgerMenu";

const CustomNavigation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info
    setVisible(
      prevScrollPos > currentScrollPos ||
        prevScrollPos - currentScrollPos > 50 ||
        currentScrollPos < 10
    );

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div
      id="navbar"
      className="desktop-nav"
      style={{
        top: visible ? "0" : "-200px",
        transition: "top .6s",
        position: "sticky",
      }}
    >
      <Link to="/">
        <img
          src="/Adobe_Express_20221001_2213090_1.png"
          alt="Hill Country Cupboard logo"
          className="nav-logo"
          style={{
            paddingTop: 6,
            borderRadius: "50%",
          }}
        />
      </Link>
      <ul className="nav-list">
        {" "}
        <a
          className="desktop-nav-item"
          href="https://www.facebook.com/HillCountryCupboard"
        >
          <img
            src="/facebook-24 (1).png"
            alt="Facebook logo"
            style={{ width: 30, height: 20, paddingLeft: 10 }}
          />
        </a>
        <li className="desktop-nav-item">
          <a
            className="bottom-link"
            href="https://www.toasttab.com/hill-country-cupboard"
          >
            Order Online
          </a>
        </li>
        <li className="desktop-nav-item">
          <Link className="bottom-link" to="/menu">
            Menu
          </Link>
        </li>
      </ul>
      <div id="navbar-right">
        <a href="https://www.facebook.com/HillCountryCupboard">
          <img
            src="/facebook-24 (1).png"
            alt="Facebook logo"
            style={{
              padding: "10px",
              height: "50px",
            }}
          />
        </a>
        <HamburgerMenu />
        {/* <CustomHamburgerMenu /> */}
      </div>
    </div>
  );
};
export default CustomNavigation;
