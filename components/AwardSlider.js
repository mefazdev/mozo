import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";
import award1 from "../public/images/home/award-1.png";
import award2 from "../public/images/home/award-2.png";
import award3 from "../public/images/home/award-3.jpg";
import award4 from "../public/images/home/award-4.png";

export default function AwardSlider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      // customTransition="all .5"
      transitionDuration={2000}
      customTransition={"ease 2000ms"}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      itemClass="test"
    >
      <div className="award__item">
        <div className="award__image" id="jas">
          <Image id="tests" src={award1} alt="Mobile application development companies in Dubai" />
        </div>
      </div>
      <div className="award__item">
        <div className="award__image">
          <Image src={award2}  alt="App development India"/>
        </div>
      </div>
      <div className="award__item">
        <div className="award__image" id="q">
          <Image src={award3}  alt="web development, website design"/>
        </div>
      </div>
      <div className="award__item">
        <div className="award__image">
          <Image src={award4} alt=" web design company India" />
        </div>
      </div>
    </Carousel>
  );
}
