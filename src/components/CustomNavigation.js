import React from "react";
import { Link, Navigate } from "react-router-dom";
import { IconButton, MenuList } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const CustomNavigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [redirect, setRedirect] = React.useState(null);

  //eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    setRedirect(null);
  });

  const handleRedirect = (link) => {
    setRedirect(link);
    handleClose();
  };

  const open = Boolean(anchorEl);

  const handleClick = (event, idx) => {
    console.log(idx);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      document.getElementById("navbar").style.padding = "0px 10px";
      document.getElementById("logo").style.fontSize = "15px";
    } else {
      document.getElementById("navbar").style.padding = "4px 10px";
      document.getElementById("logo").style.fontSize = "35px";
    }
  }
  return (
    <div>
      {redirect && <Navigate to={redirect} />}
      <div id="navbar">
        <Link to="/">
          <img
            src="/Adobe_Express_20221001_2213090_1.png"
            alt="Hill Country Cupboard logo"
            style={{
              width: 160,
              height: 60,
              paddingTop: 6,
              borderRadius: "50%",
            }}
          />
        </Link>
        <div id="navbar-right">
          <a href="https://www.facebook.com/HillCountryCupboard">
            <img
              src="/facebook-24 (1).png"
              alt="Facebook logo"
              style={{
                padding: "10px",
              }}
            />
          </a>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={(e) => handleClick(e)}
          >
            <MenuIcon
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
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
          <MenuItem onClick={() => handleRedirect("/menu")}>
            {/* <Link className="top-link" to="/menu"> */}
            Menu
            {/* </Link> */}
          </MenuItem>
          <MenuItem onClick={() => handleRedirect("/")}>
            {/* <Link className="top-link" to="/"> */}
            Home
            {/* </Link> */}
          </MenuItem>
          <MenuItem onClick={() => handleRedirect("/admin")}>
            {/* <Link className="top-link" to="/admin"> */}
            Admin
            {/* </Link> */}
          </MenuItem>
          <MenuItem onClick={() => handleRedirect("/login")}>
            {/* <Link className="top-link" to="/login"> */}
            Login
            {/* </Link> */}
          </MenuItem>
          <MenuItem onClick={() => handleRedirect("/menu")}>
            {/* <Link className="top-link" to="/login"> */}
            Order Online
            {/* </Link> */}
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
