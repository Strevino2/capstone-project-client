import React from "react";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";

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
        <Card sx={{ minWidth: 240 }}>
          <h3 className="menu-header">{props.menuType}</h3>
          <p>{menu.menu_description}</p>
          <CardContent>
            {" "}
            <Typography component={"div"} className="menu-ul">
              <Typography
                sx={{ fontSize: 14 }}
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
                      <span className="menu-span">
                        {x.menu_name}
                        {x.menu_price}
                      </span>
                      <p>{x.menu_description}</p>
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
