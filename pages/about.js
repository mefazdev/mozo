import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import cowork from "../public/images/cowork.png";
import mission from "../public/images/partnership.png";
import vision from "../public/images/solidarity.png";
import abc from "../public/images/home/award-4.png";
import jas from "../public/images/home/award-1.png";
import iaf from "../public/images/home/award-2.png";
import jaz from "../public/images/home/award-3.jpg";
import teamimage1 from "../public/images/shafhan.png";
import teamimage2 from "../public/images/labeeb.png";
import teamimage3 from "../public/images/team-member-5.png";
import teamimage4 from "../public/images/team-member-7.png";
import teamimage5 from "../public/images/najila.png";
import teamimage6 from "../public/images/mouz.png";
import Link from "next/link";
import Head from 'next/head'
import Pixel from '../components/pixel'

import { checkActionCode } from "firebase/auth";
export default function About() {

 
  return ( 
    <> <Head>
    <title>Blog </title>
    <meta property="og:title" content="Blog" key="title" />
    
  </Head>
     <Pixel name='FACEBOOK_PIXEL_1' />
   
    <div className="about">
      
        <div className="about__header">
        <Header />
        <h1>ABOUT US</h1>
      </div>
  
  
      <div className="about__content container">
        <div className="about__first__row  grid grid-cols-1 md:grid-cols-3">
          <div className="about__first__row__img">
            <Image src={cowork} />
          </div>
          <div className="col-span-2 p-5 m-auto">
            <h3>
              {/* Providing you with the most actionable Products and Services. */}
            Service every step of the way
            </h3>
            <p>
            Mozo Tech is one of the pre-eminent software company, engaged in flourishing out-of-box products that aim to bring smartness to a world of business operations where everything goes usual. We are headquartered at Dubai and is one of the most respected IT company. Through innovation, commitment, quality, and superior service we assist you to give a productive outcome to your business. The business intelligence in us advantages you in IT and business solutions to spot unmet needs.       
            
            Our talent represents the direct and virtual presence across the world as we always embarked on start-ups with diversifying portfolios and delivered concrete breakthrough products and services. We work shoulder to shoulder with industry leaders to create comprehensive and rigorous programs to help achieve your business success. Mozo Tech aims at developing novel and differentiating technological solutions and strives to provide world-class standards at affordable prices.      </p>
      
      
          </div>
        </div>

        <div className="mission__row grid grid-cols-1 lg:grid-cols-2">
          <div className="mission">
            <h4>OUR MISSION</h4>
            <div className="mission__img">
              <Image src={mission} />
            </div>

            <p>
              To rise with high standards and professionality and to emerge as a
              reliable alternative for our clients.
            </p>
          </div>
          <div className="mission">
            <h4>OUR VISION</h4>
            <div className="mission__img">
              <Image src={vision} />
            </div>

            <p>
              We endeavour to be among the premier software companies in the
              industry with a credible name, to accomplish digital innovation
              most uniquely and deliver the best
            </p>
          </div>
        </div>

        {/*<<<<<<<<<<<<<<<<<< CERTIFICATE SECTION >>>>>>>>>>>>>>>>>>>> */}

        <div className="about__third__row">
          <h2>Certificates & Recogonitions</h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 about__third__row__img">
            <div className="certificate__img ">
              <Image src={abc} />
            </div>
            <div className="certificate__img">
              <Image src={jas} />
            </div>
            <div className="certificate__img">
              <Image src={iaf} />
            </div>
            <div className="certificate__img">
              <Image src={jaz} />
            </div>
          </div>
        </div>

        {/*<<<<<<<<<<<<<<<<<<<<<<<< TEAM >>>>>>>>>>>>>>>>>>>>>>*/}
        <div className="about__team">
          <h3>Meet Our Leadership</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <div className="about__team__img">
                <Image src={teamimage1} />
              </div>

              <h6>SHAFHAN KALATHIL</h6>
              <p>Founder, CMD & CEO</p>
            </div>
            <div>
              <div className="about__team__img">
                <Image src={teamimage2} />
              </div>

              <h6>LABEEB KULANGARA KANDI</h6>
              <p>Managing Director</p>
            </div>
            <div>
              <div className="about__team__img">
                <Image src={teamimage3} />
              </div>
              <h6>ALI SAEED SAIF ABOOD AL-KAABI</h6>

              <p>Investor & Sponsor</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div>
              <div className="about__team__img">
                <Image src={teamimage4} />
              </div>

              <h6>HUMOOD SAEED SAIF ABOOD AL-KAABI</h6>
              <p>Partner</p>
            </div>
            <div>
              <div className="about__team__img">
                <Image src={teamimage5} />
              </div>

              <h6>NAJLA SAEED SAIF ABOOD AL-KAABI</h6>
              <p>Business Head</p>
            </div>
            <div>
              <div className="about__team__img">
                <Image src={teamimage6} />
              </div>

              <h6>MOUZA GAREEB SALEM HASHEL AL-QAYDI</h6>
              <p>Business Advisor</p>
            </div>
          </div>
        </div>
        <div className="about__view__button">
          <Link href="/directorProfile">
            <button>View Director Profile</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
    </> 
  );
}
