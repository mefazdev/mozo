import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import olive from "../public/images/home/olive.jpg";

import rider from "../public/images/banner/rider.webp";
import eCommerce from "../public/images/banner/ecommerce.webp";
import esaf from "../public/images/banner/esaf.jpg";
import digimarket from "../public/images/banner/digi-market.webp";

import Image from "next/image";
export default function projectSlider() {
  return (
    <div className="project__slider">
      <Carousel
        ariaLabel={false}
        autoPlay={true}
        infiniteLoop={true}
        transitionTime={2000}
        interval={6000}
        useKeyboardArrows={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        axis={"horizontal"}
      >
        <div className="home__project__lap grid">
          <div className="home__project__lap__in">
            <div className="home__project__img">
              <Image src={olive} alt=" Ecommerce website development company in Dubai" />
            </div>
          </div>
        </div>

        <div className="home__project__lap grid">
          <div className="home__project__lap__in">
            <div className="home__project__img__two">
              <Image src={eCommerce} alt="Ecommerce website development company in India" />
            </div>
          </div>
        </div>
        <div className="home__project__lap grid">
          <div className="home__project__lap__in">
            <div className="home__project__img__three">
              <Image src={esaf} alt="Ecommerce website development company in Bangalore" />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
