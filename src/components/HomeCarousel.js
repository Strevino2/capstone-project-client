import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function HomeCarousel() {
  return (
    <div style={{ display: "block", width: "100%", paddingTop: "10px" }}>
      <Carousel>
        <Carousel.Item interval={4500}>
          <div className="carousel-div">
            <img
              className="d-block w-100 h-100"
              src="/Adobe_Express_20221001_2213090_1.png"
              alt="Hill Country Cupboard building view"
            />
          </div>
          <Carousel.Caption>
            {/* <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4500}>
          <div className="carousel-div">
            <img
              className="d-block w-70 h-100"
              src="/TacoThursdayLogo.jpg"
              alt="Hill Country Cupboard building view"
            />
          </div>
          <Carousel.Caption>
            {/* <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4500}>
          <div className="carousel-div">
            <img
              className="d-block w-100 h-100"
              src="/ChickenFriedSteakinWindow.jpg"
              alt="Hill Country Cupboard bar view"
            />
          </div>
          <Carousel.Caption>
            {/* <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4500}>
          <div className="carousel-div">
            <img
              className="d-block w-100 h-100"
              src="/ChickenFriedChicken.jpg"
              alt="Hill Country Cupboard building view"
            />
          </div>
          <Carousel.Caption>
            {/* <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4500}>
          <div className="carousel-div">
            <img
              className="d-block w-100 h-100"
              src="/TexicanStyleBreakfast.jpg"
              alt="Hill Country Cupboard building view"
            />
          </div>
          <Carousel.Caption>
            {/* <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
