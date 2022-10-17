import React from "react";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function MenuCard(props) {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      const data = await fetch(
        "https://capstone-project-gilt-three.vercel.app/menu"
      );

      const json = await data.json();

      setMenu(json);
    };

    fetchMenuData();
  }, []);

  return (
    <>
      <ul className="menu-card">
        <Card sx={{ boxShadow: 12 }} className="inner-menu-card">
          <h3 style={{ textAlign: "center" }} className="menu-header">
            {props.menuType}
          </h3>
          <p className="menu-message" style={{ display: "flex", justifyContent: "center" }}>
            {props.menuMessage}
          </p>
          <CardContent>
            {" "}
            <Typography component={"div"} className="menu-ul">
              <Typography
                sx={{ fontSize: 8 }}
                color="text.secondary"
                gutterBottom
                component={"div"}
              >
                {menu
                  .filter((x) => {
                    return x.menu_type === props.menuType;
                  })
                  .map((x, idx) => (
                    <li className="menu-li" key={idx}>
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>
                          {x.menu_name.toUpperCase()}
                        </p>
                        <p style={{ color: "maroon" }}>{x.menu_price}</p>
                      </div>
                      <p className="menu-description">{x.menu_description}</p>
                    </li>
                  ))}
              </Typography>
            </Typography>
          </CardContent>
        </Card>
      </ul>
    </>
  );
}
