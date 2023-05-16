import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import alhabib from "../public/images/portfolio/alhabib.png";
import amaya from "../public/images/portfolio/amaya.png";
import mazin from "../public/images/portfolio/mazin2.png";
import zoonway from "../public/images/portfolio/zoonway.png";
import maswll from "../public/images/portfolio/maswll1.png";
import yourfere from "../public/images/portfolio/yourfere.png";
// import frame from "../public/images/portfolio/frame.png";
import natura from "../public/images/portfolio/natura2.png";
import dealq from "../public/images/portfolio/dealq.png";
import skfab from "../public/images/portfolio/skfab.png";
import Pixel from '../components/pixel'
import Head from 'next/head'
export default function Portfolio() {
  return (
    <>  <Head>
    <title> </title>
    <meta property="og:title" content="Blog" key="title" />
    
  </Head>
     <Pixel name='FACEBOOK_PIXEL_1' />
    <div className="portfolio">
      <div className="portfolio__header">
        <Header />
        <h1>OUR PORTFOLIO</h1>
      </div>

      <div className="portfolio__content container">
        <div className="portfolio__row__one">
          <h2>Recent works</h2>
          <p>
           The experience built created many proud clients. The highly creative and technical solutions were; always based on great ideas, from startups to large scale national and international firms.
          </p>
        </div>
        <div className="portfolio__row  grid grid-cols-1 lg:grid-cols-3">
          <div className="portfolio__box grid">
            <div className="port__frame ">
              <div className="portfolio__img__div">
                <div className="portfolio__img">
                  <Image src={alhabib} />
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio__box grid">
            <div className="port__frame ">
              <div className="portfolio__img__div">
                <div className="portfolio__img__two">
                  <Image src={amaya} />
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio__box grid">
            <div className="port__frame ">
              <div className="portfolio__img__div">
                <div className="portfolio__img__three">
                  <Image src={dealq} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio__row  grid grid-cols-1 lg:grid-cols-3">
          <div className="portfolio__box grid">
            <div className="port__frame ">
              <div className="portfolio__img__div">
                <div className="portfolio__img__four">
                  <Image src={yourfere} />
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio__box grid">
            <div className="port__frame ">
              <div className="portfolio__img__div">
                <div className="portfolio__img__five">
                  <Image src={zoonway} />
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio__box grid">
            <div className="port__frame ">
              <div className="portfolio__img__div">
                <div className="portfolio__img__six">
                  <Image src={skfab} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio__row  grid grid-cols-1 lg:grid-cols-3">
          <div className="portfolio__box grid">
            <div className="port__frame ">
              <div className="portfolio__img__div">
                <div className="portfolio__img__seven">
                  <Image src={mazin} />
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio__box grid">
            <div className="port__frame ">
              <div className="portfolio__img__div">
                <div className="portfolio__img__eight">
                  <Image src={natura} />
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio__box grid">
            <div className="port__frame ">
              <div className="portfolio__img__div">
                <div className="portfolio__img__nine">
                  <Image src={maswll} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div></>
  );
}
