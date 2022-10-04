import React from "react";
import { Link } from "react-router-dom";
import { IconButton, MenuList } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import cookie from "cookie";

const CustomNavigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  let cookies = cookie.parse(document.cookie);

  const handleClick = (event, idx) => {
    console.log(idx);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    document.cookie = cookie.serialize("loggedIn", null, { maxAge: 0 });
  };

  // window.onscroll = function () {
  //   scrollFunction();
  // };
  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 40 ||
  //     document.documentElement.scrollTop > 40
  //   ) {
  //     document.getElementById("navbar").style.padding = "0px 10px";
  //     document.getElementById("logo").style.fontSize = "15px";
  //   } else {
  //     document.getElementById("navbar").style.padding = "4px 10px";
  //     document.getElementById("logo").style.fontSize = "35px";
  //   }
  // }
  return (
    <div id="navbar">
      <div className="desktop-nav">
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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            className="menu-button"
            aria-label="menu"
            sx={{ mr: 2, color: "white", paddingTop: "20px" }}
            onClick={(e) => handleClick(e)}
          >
            <MenuIcon
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              className="menu-button"
            />
          </IconButton>
        </div>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuList
          sx={{ backgroundColor: "#282828", paddingTop: "0px", width: "100%" }}
        >
          <MenuItem onClick={handleClose}>
            <Link className="top-link" to="/menu">
              Menu
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link className="top-link" to="/">
              Home
            </Link>
          </MenuItem>
          {cookies.loggedIn && (
            <MenuItem onClick={handleClose}>
              <Link className="top-link" to="/admin">
                Admin
              </Link>
            </MenuItem>
          )}
          {cookies.loggedIn && (
            <MenuItem onClick={handleClose}>
              <Link className="top-link" to="/login">
                Login
              </Link>
            </MenuItem>
          )}
          {cookies.loggedIn && (
            <MenuItem
              onClick={() => {
                handleClose();
                handleLogout();
              }}
            >
              <Link className="top-link" to="/login">
                Logout
              </Link>
            </MenuItem>
          )}
          <MenuItem onClick={handleClose}>
            <a
              className="top-link"
              href="https://www.toasttab.com/hill-country-cupboard"
            >
              Order Online
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a
              className="top-link"
              href="https://www.facebook.com/HillCountryCupboard"
            >
              Facebook
            </a>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};
export default CustomNavigation;


// #navbar {
//   height: 200px;
//   display: flex;
//   justify-content: center;
// }
// #navbar-right {
//   display: none;
// }
// .image-container {
//   flex-direction: row;
//   /* align-items: none; */
// }
// .bottom-navbar {
//   display: none;
// }

// .nav-logo {
//   height: 140px;
//   width: 260px;
// }

// .desktop-nav {
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   gap: 10px;
// }

// .nav-list {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 0px;
//   padding: 0px;
//   gap: 80px;
// }  

// .desktop-nav-item {
//   color: white;
// }

// #navbar a {
//   color: white;
// }
// }