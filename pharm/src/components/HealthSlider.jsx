import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Carousel } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

export function ControlledCarousel1() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{height:"430px"}} variant="dark">
      <Carousel.Item style={{height:"430px"}}>
        <img
          className="d-block w-100"
          src="https://cms-contents.pharmeasy.in/banner/627c570ceec-Plum-M-M.jpg" style={{height:"430px"}}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:"430px"}}>
        <img
          className="d-block w-100"
          src="https://cms-contents.pharmeasy.in/banner/de6cc279933-Upakarma-CB-june.jpg" style={{height:"430px"}}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:"430px"}}>
        <img
          className="d-block w-100"
          src="https://cms-contents.pharmeasy.in/banner/3ab35ad135a-Cremaffin-June-SRP.jpg" style={{height:"430px"}}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:"430px"}}>
        <img
          className="d-block w-100"
          src="https://cms-contents.pharmeasy.in/banner/a86af72f350-Huggies-CB-May22.jpg" style={{height:"430px"}}
          alt="Four slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:"430px"}}>
        <img
          className="d-block w-100"
          src="https://cms-contents.pharmeasy.in/banner/26d88c347d7-Colgate-Diab.jpg" style={{height:"430px"}}
          alt="Five slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

root.render(<ControlledCarousel1 />);