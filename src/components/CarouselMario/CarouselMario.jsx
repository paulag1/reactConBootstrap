import React from "react";
import { Carousel } from "react-bootstrap";

import "./carouselMario.css";

const CarouselMario = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 imagenCarousel"
          src="https://cdn.forbes.com.mx/2021/09/Mario-bros.jpeg"
          alt="Mario 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imagenCarousel"
          src="https://laverdadnoticias.com/__export/1629302329412/sites/laverdad/img/2021/08/18/personajes_de_mario_bros_1.jpg_720776055.jpg"
          alt="mario2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imagenCarousel"
          src="https://m.media-amazon.com/images/I/617kpWhBfuL._AC_UF894,1000_QL80_.jpg"
          alt="mario3"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselMario;
