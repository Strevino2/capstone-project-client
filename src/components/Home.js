import * as React from "react";
import { useState, useEffect } from "react";
import RoomIcon from "@mui/icons-material/Room";
// import { useTheme } from "@mui/material/styles";
import SimpleMap from "./Map";

export default function Home() {
  const [hours, setHours] = useState([]);
  const location = {
    address: "101 US HWY 281 S, Johnson City, TX 78636.",
    lat: 30.2768,
    lng: -98.4032,
  };

  useEffect(() => {
    const fetchHoursData = async () => {
      const data = await fetch(
        "https://capstone-project-gilt-three.vercel.app/hoursOfOperation"
      );

      const json = await data.json();

      setHours(json);
    };

    fetchHoursData();
  }, []);

  useEffect(() => {
    console.log({ hours });
  }, [hours]);

  return (
    <div className="home">
      <div className="address-bar">
        <RoomIcon />
        101 US HWY 281 S, Johnson City, TX 78636
      </div>
      <img
        src="/1101_509503759074581_1484176182_n.jpg"
        alt="Hill Country Cupboard logo"
        style={{ width: "100%", height: "100%" }}
      />
      <div className="address-bar">
        <RoomIcon />
        101 US HWY 281 S, Johnson City, TX 78636
      </div>
      <img
        src="/10483991_809785879046366_5174751131691766854_n.jpg"
        alt="Hill Country Cupboard logo"
        style={{ width: "100%", height: "100%" }}
      />
      <div className="about-bar">
        <RoomIcon />
        About Us:
      </div>
      <img
        src="/10483991_809785879046366_5174751131691766854_n.jpg"
        alt="Hill Country Cupboard logo"
        style={{ width: "100%", height: "100%" }}
      />
      <SimpleMap location={location} zoomLevel={17} />
      <ul>
        {/* {hours.map((x, idx) => (
            <li key={idx}>
              <h4>
                {x.dining_room} {x.day} {x.hours}
              </h4>
            </li>
          ))} */}
      </ul>
    </div>
  );
}
