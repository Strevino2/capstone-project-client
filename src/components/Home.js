import * as React from "react";
import { useState, useEffect } from "react";
import RoomIcon from "@mui/icons-material/Room";
import SimpleMap from "./Map";
import PhotoGallery from "./PhotoGallery";
import { Link } from "react-router-dom";
import HomeCarousel from "./HomeCarousel";

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
      <div className="advertisement-bar">
        <Link to="/menu">
          Try our World's Best Chicken Fried Steak or our Award Winning Chicken
          Fried Pork Chops!
        </Link>
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
        src="/18813285_1572998952725051_6362616169085327159_n-copy.jpg"
        alt="Hill Country Cupboard logo"
        style={{ width: "100%", height: "500px" }}
      />
      <div className="home-about-bar">
        <div className="about-bar">About us:</div>{" "}
      </div>
      <div className="photo-gallery">
        <PhotoGallery />
      </div>
      <div className="carousel">{<HomeCarousel />}</div>
      <div className="bottom-div">
        <SimpleMap location={location} zoomLevel={17} />
      </div>
      <div className="bottom-info-home">
        <div className="bottom-location">
          <h2>Location</h2>
          <p>101 US HWY 281 S</p>
          <p>Johnson City, TX 78636</p>
        </div>{" "}
        <div className="bottom-contact-us">
          <h2>Contact Us</h2>
          <p>830-868-4625</p>
        </div>
        <div className="bottom-hours">
          <h2>Hours</h2>
          <p>MON,TUE,WED,THUR</p>
          <p>7:00AM - 3:00PM</p>
          <p>FRI, SAT, SUN</p>
          <p>7:00AM - 5:00PM</p>
        </div>
      </div>
      {/* <ul> */}
      {/* {hours.map((x, idx) => (
            <li key={idx}>
              <h4>
                {x.dining_room} {x.day} {x.hours}
              </h4>
            </li>
          ))} */}
      {/* </ul> */}
    </div>
  );
}
