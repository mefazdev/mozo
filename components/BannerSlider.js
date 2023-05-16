// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import olive from "../public/images/home/olive.jpg";
import Image from "next/image";
import rider from "../public/images/banner/rider.webp";
import eCommerce from "../public/images/banner/ecommerce.webp";
import esaf from "../public/images/banner/esaf.jpg";
import digimarket from "../public/images/banner/digi-market.webp";
export default function bannerSlider() {
  return (
    <div>
      <Carousel
        ariaLabel={false}
        autoPlay={true}
        infiniteLoop={true}
        transitionTime={2000}
        interval={8000}
        useKeyboardArrows={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        axis={"horizontal"}
      >
        <div className="home__banner__lap grid">
          <div className="home__banner__lap__in">
            <div className="olive__img">
              <Image src={olive} alt="web development, website design, web design company India" />
            </div>
          </div>
        </div>
        <div className="home__banner__lap grid">
          <div className="home__banner__lap__in">
            <div className="slider__img__two">
              <Image src={rider}  alt='Web development companies in kerala'/>
            </div>
          </div>
        </div>

        <div className="home__banner__lap grid">
          <div className="home__banner__lap__in">
            <div className="slider__img__three">
              <Image src={eCommerce} alt="Best web design company near me" />
            </div>
          </div>
        </div>

        <div className="home__banner__lap grid">
          <div className="home__banner__lap__in">
            <div className="slider__img__four">
              <Image src={esaf} alt="Ecommerce development in Bangalore" />
            </div>
          </div>
        </div>
        <div className="home__banner__lap grid">
          <div className="home__banner__lap__in">
            <div className="slider__img__five">
              <Image src={digimarket} alt="Online food delivery app in kerala" />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
