import React, { useRef } from "react";
import RoomIcon from "@mui/icons-material/Room";
import SimpleMap from "./Map";
import PhotoGallery from "./PhotoGallery";
import PhotoGallery2 from "./PhotoGallery2";
import { Link } from "react-router-dom";
import HomeCarousel from "./HomeCarousel";

export default function Home() {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  const location = {
    address: "101 US HWY 281 S, Johnson City, TX 78636.",
    lat: 30.2768,
    lng: -98.4032,
  };

  return (
    <div className="home">
      <div className="advertisement-bar">
        <Link style={{ color: "white" }} to="/menu">
          Home of the World's Best Chicken Fried Steak(Nearly 3 dozen sold!!)
        </Link>
      </div>{" "}
      <div className="top-home-image">
        <img
          src="/18813285_1572998952725051_6362616169085327159_n-copy.jpg"
          alt="Hill Country Cupboard logo"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div onClick={executeScroll} className="address-bar">
        <RoomIcon />
        101 US HWY 281 S, Johnson City, TX 78636
      </div>
      <div className="desktop-home">
        <div className="top-food-image">
          <img
            src="/Chickenfriedsteakandeggs-copy.jpg"
            alt="Hill Country Cupboard logo"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="home-about-bar">
          <div className="about-bar">
            <h2>About Us</h2>
            <p>
              Locally owned and operated for over 40 years! The oldest running
              restaurant in Johnson City serving your favorite comfort foods and
              breakfast all day.
            </p>
          </div>{" "}
        </div>
        <div className="desktop-bottom-image">
          <img
            src="/1101_509503759074581_1484176182_n.jpg"
            alt="Hill Country Cupboard logo"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="home-about-bar">
          <div className="about-bar bottom-about-bar">
            <h2>Specials</h2>
            <p>
              Call (830-868-4625) or ask your server for the daily specials for
              dine-in customers only!
            </p>
          </div>{" "}
        </div>
        <div className="carousel">{<HomeCarousel />}</div>
      </div>
      <div className="bottom-background">
        <div className="photo-container">
          <div className="photo-gallery">
            <PhotoGallery2 />
          </div>
          <div className="second-photo-gallery photo-gallery">
            <PhotoGallery />
          </div>
        </div>
        <div ref={myRef} className="bottom-div">
          <SimpleMap location={location} zoomLevel={17} />
        </div>
      </div>
      <div className="bottom-info-home">
        <div className="bottom-location">
          <h2>Location</h2>
          <p>101 US HWY 281 S</p>
          <p>Johnson City, TX 78636</p>
        </div>{" "}
        <div className="bottom-contact-us">
          <h2>Contact Us</h2>
          <a style={{ color: "white" }} href="tel: 830-868-4625">
            <p>830-868-4625</p>
          </a>
          <a
            style={{ color: "white" }}
            href="mailto: HillCountryCupboard@gmail.com"
          >
            HillCountryCupboard@gmail.com
          </a>
        </div>
        <div className="bottom-hours">
          <h2>Hours</h2>
          <p>MON,TUE,WED,THUR</p>
          <p>7:00AM - 3:00PM</p>
          <p>FRI, SAT, SUN</p>
          <p>7:00AM - 5:00PM</p>
        </div>
      </div>
    </div>
  );
}
