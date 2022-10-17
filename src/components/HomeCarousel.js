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
              className="d-block h-100"
              src="/297031234_5933796059978630_4496011331339506165_n.jpg"
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
              className="d-block w-70 h-100"
              src="/297488939_5947871455237757_7694133740729655139_n.jpg"
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
              className="d-block h-100"
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
              className="d-block h-100"
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
              className="d-block h-100"
              src="/TexicanStyleBreakfast.jpg"
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
              className="d-block h-100"
              src="/27747616_1855981557760121_632735083973153707_o.jpg"
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
              className="d-block h-100"
              src="/13987677_1253867724638177_21219947090071952_o.jpg"
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
              className="d-block h-100"
              src="/10527258_825691007455853_5757599942689563460_n.jpg"
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
              className="d-block h-100"
              src="/197532572_4622798857745030_2916662940001944046_n.jpg"
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
