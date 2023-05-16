import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
export default function feedbackSlider() {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      transitionTime={2000}
      interval={6000}
      useKeyboardArrows={true}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
    >
      <div className="home__feedback__text">
        <p>
          It was an amazing experience. The best part was that they understood
          my requirements and delivered services accordingly . They also have a
          very competent team. They completed the project as per the assured
          timeline.
        </p>
        <div className="feedback__name">
          <h6>- Rajeevanen Raj </h6>
        </div>
      </div>
      <div className="home__feedback__text">
        <p>
          Honest software company in Dubai.The team is smart, creative and
          professionals.I am very satisfied with their service.Highly
          recommended..!!
        </p>
        <div className="feedback__name">
          <h6>- Anju N.K</h6>
          <h6></h6>
        </div>
      </div>
      <div className="home__feedback__text">
        <p>
          I'm really amazed by their level of commitment and professionalism as
          regard to the task entrusted. They have provided us with the quality
          responsive website in the shortest possible time.
        </p>
        <div className="feedback__name">
          <h6>- Arya</h6>
          <h6></h6>
        </div>
      </div>
    </Carousel>
  );
}
