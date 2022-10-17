import React from "react";
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
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let cookies = cookie.parse(document.cookie);

  const handleLogout = () => {
    document.cookie = cookie.serialize("loggedIn", null, { maxAge: 0 });
    document.cookie = cookie.serialize("username", null, { maxAge: 0 });
    window.location.reload();
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
          fontSize= "1em"
        />
      </IconButton>
      <Menu
        id="basic-menu"
        open={open}
        onClose={handleClose}
        MenuListProps={{ disablePadding: true }}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 96, left: 0 }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuList
          sx={{
            backgroundColor: "#282828",
            paddingTop: "0px !important",
            width: "800px",
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
          <MenuItem onClick={handleClose}>
          <a
              className="top-link"
              href="tel: 830-868-4625"
            >
              Call us
            </a>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
