import React from 'react'
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, MenuList } from "@mui/material";
import cookie from "cookie";

export default function HamburgerMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event, idx) => {
        console.log(idx);
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };

      let cookies = cookie.parse(document.cookie);

    
      const handleLogout = () => {
        document.cookie = cookie.serialize("loggedIn", null, { maxAge: 0 });
        document.cookie = cookie.serialize("username", null, { maxAge: 0 });
      };
  return (
    <div>
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
      sx={{
        backgroundColor: "#282828",
        paddingTop: "0px",
        width: "100%",
      }}
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
  </Menu></div>
  )
}
