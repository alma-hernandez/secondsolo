import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import houston from "../images/houston.jpg";
import kitchen from "../images/kitchen.jpg";
import pool from "../images/pool.jpg";
import xmas from "../images/xmas.jpg";
import zoo from "../images/zoo.jpg";
import "./AboutMichael.css"

const ImageCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    const mikesImages = [
      houston,
      kitchen,
      pool,
      xmas,
      zoo,
    ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {mikesImages.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Image ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
