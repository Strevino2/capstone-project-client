import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { debounce } from "../utilities/helpers";
import HamburgerMenu from "./HamburgerMenu";
import cookie from "cookie";


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

  const handleLogout = () => {
    document.cookie = cookie.serialize("loggedIn", null, { maxAge: 0 });
    document.cookie = cookie.serialize("username", null, { maxAge: 0 });
    window.location.reload();
  };

  let cookies = cookie.parse(document.cookie);

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
          src="/Screenshot-2022-10-12-115024.jpg"
          alt="Hill Country Cupboard logo"
          className="nav-logo"
          style={{
            paddingTop: 6,
          }}
        />
      </Link>

      <ul className="nav-list">
        {" "}
        {cookies.loggedIn && (
          <li className="desktop-nav-item">
            <Link className="bottom-link" to="/admin">
              Admin
            </Link>
          </li>
        )}
        <li className="desktop-nav-item">
          <Link className="bottom-link" to="/">
            Home
          </Link>
        </li>
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
        <li className="desktop-nav-item">
          <a
            className="bottom-link"
            href="tel: 830-868-4625"
          >
            Call us
          </a>
        </li>
        {cookies.loggedIn && (
          <li onClick={handleLogout} className="desktop-nav-item">
            <Link className="bottom-link" to="/login">
              Logout
            </Link>
          </li>
        )}
      </ul>
      <div id="navbar-right">
        <div className="hamburger-div">
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
};
export default CustomNavigation;
