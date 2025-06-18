import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import img1 from './image/IMAG1.png';
import img2 from './image/IMAG2.webp';
import img3 from './image/IMAG3.webp';
import img4 from './image/IMAG4.webp';

  export default function App() {
  return (
    <div className="App" style={{ width: "60%", margin: "auto", marginTop: "30px" }}>
      <h2>Travel Destinations</h2>
      <Carousel showThumbs={true} autoPlay infiniteLoop>
        <div>
          <img src={img1} alt="Hong Kong" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src={img3} alt="Macao" />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src={img2} alt="Japan" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src={img4} alt="Las Vegas" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

  