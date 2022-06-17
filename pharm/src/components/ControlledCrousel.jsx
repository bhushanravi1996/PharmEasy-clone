import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Carousel } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

export function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{height:"330px"}} variant="dark">
      <Carousel.Item style={{height:"330px"}}>
        <img
          className="d-block w-100"
          src="https://cms-contents.pharmeasy.in/banner/0a08bc09b92-MEGA20_Dweb.jpg?dim=1440x0&dpr=1&q=530" style={{height:"330px"}}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:"330px"}}>
        <img
          className="d-block w-100"
          src="https://cms-contents.pharmeasy.in/banner/a16798e4a2f-Dweb.jpg?dim=1440x0&dpr=1&q=530" style={{height:"330px"}}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:"330px"}}>
        <img
          className="d-block w-100"
          src="https://cms-contents.pharmeasy.in/banner/5aeebb1a134-Dweb2.jpg?dim=1440x0&dpr=1&q=530" style={{height:"330px"}}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:"330px"}}>
        <img
          className="d-block w-100"
          src="https://cms-contents.pharmeasy.in/banner/b287e359a6f-Dweb.jpg?dim=1440x0&dpr=1&q=530" style={{height:"330px"}}
          alt="Four slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:"330px"}}>
        <img
          className="d-block w-100"
          src="https://cms-contents.pharmeasy.in/banner/374ed4b3c4e-Liveasy_diabetic_Dweb.jpg?dim=1440x0&dpr=1&q=530" style={{height:"330px"}}
          alt="Five slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

root.render(<ControlledCarousel />);