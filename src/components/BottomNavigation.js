import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const BottomNavigation = () => {
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

  return (
    <div className="bottom-navbar">
      <ThemeProvider theme={theme}>
        <AppBar sx={{ height: 40 }} position="relative">
          <Toolbar sx={{ paddingBottom: "10px", display: "flex" }}>
            <ul className="nav-list">
              {" "}
              <a className="nav-list-item" href="https://www.facebook.com/HillCountryCupboard">
                <img
                  src="/facebook-24 (1).png"
                  alt="Facebook logo"
                  style={{ width: 30, height: 20, paddingLeft: 10 }}
                />
              </a>
              <li className="nav-list-item">
                <Link className="bottom-link" to="/menu">
                  Order Online
                </Link>
              </li>
              <li className="nav-list-item">
                <Link className="bottom-link" to="/menu">
                  Menu
                </Link>
              </li>
            </ul>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};
export default BottomNavigation;
