import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Navigation = () => {
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#282828",
        darker: "#053e85",
      },
      neutral: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event, idx) => {
    console.log(idx);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="appbar">
      <ThemeProvider theme={theme}>
        <AppBar sx={{ height: 70 }} position="relative">
          <Toolbar>
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
            <a href="https://www.facebook.com/HillCountryCupboard">
              <img
                src="/facebook-24 (1).png"
                alt="Facebook logo"
                style={{ width: 20, height: 20, paddingLeft: 10 }}
              />
            </a>
            <Typography
              className="logo"
              color="white"
              variant="h6"
              style={{ flexGrow: "1" }}
            >
              <Link to="/">
                <img
                  src="/297031234_5933796059978630_4496011331339506165_n.jpg"
                  alt="Hill Country Cupboard logo"
                  style={{
                    width: 60,
                    height: 60,
                    paddingTop: 6,
                    borderRadius: "50%",
                  }}
                />
              </Link>
            </Typography>
            {/* <ul className="nav-list">
              <li className="nav-list-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/menu">Menu</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/login">Login</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/admin">Admin</Link>
              </li>
            </ul> */}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/menu">Menu</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/admin">Admin</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/login">Login</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="https://www.facebook.com/HillCountryCupboard">Facebook</a>
        </MenuItem>
      </Menu>
    </div>
  );
};
export default Navigation;
