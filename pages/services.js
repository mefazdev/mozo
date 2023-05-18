import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import image1 from "../public/images/web.png";
import image2 from "../public/images/app.png";
import image3 from "../public/images/soft.png";
import image4 from "../public/images/graphic.png";
import image5 from "../public/images/digi.png";
import image6 from "../public/images/brand.png";
import image7 from "../public/images/seo.png";
import image8 from "../public/images/smm.png";
import image9 from "../public/images/sms.png";
import image10 from "../public/images/email.png";
import image11 from "../public/images/influencer.png";
import image12 from "../public/images/domain.png";
import image13 from "../public/images/host.png";
import image14 from "../public/images/ani.png";
import image15 from "../public/images/ai.png";
import image16 from "../public/images/game.png";
import image17 from "../public/images/cloud.png";
import image18 from "../public/images/robot.png";
import image19 from "../public/images/research.png";
import image20 from "../public/images/business.png";

import Link from "next/link";

import { useState } from "react";
import Pixel from "../components/pixel";
import Head from "next/head";
import { useDispatch } from "react-redux";
import {
  WebQuote,
  AppQuote,
  SoftwareQuote,
  GameQuote,
  GraphicQuote,
  AnimationQuote,
  DigitalQuote,
  BrandingQuote,
  SeoQuote,
  SmmQuote,
  SmsQuote,
  EmailQuote,
  InfluencerQuote,
  DomainQuote,
  HostingQuote,
  CloudQuote,
  AiQuote,
  RoboticsQuote,
  BusinessQuote,
  ResearchQuote,
} from "../components/serviceForms";
import {
  openWebQuote,
  openAppQuote,
  openSoftwareQuote,
  openBusinessQuote,
  openDigitalQuote,
  openBrandingQuote,
  openSeoQuote,
  openSmmQuote,
  openSmsQuote,
  openEmailQuote,
  openInfluencerQuote,
  openDomainQuote,
  openHostingQuote,
  openAnimationQuote,
  openAiQuote,
  openGameQuote,
  openCloudQuote,
  openRoboticsQuote,
  openResearchQuote,
  openGraphicQuote,
} from "../redux/actions";

export default function Services() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      {" "}
      <Head>
        <title> </title>
        <meta property="og:title" content="Blog" key="title" />
      </Head>
      <Pixel name="FACEBOOK_PIXEL_1" />
      <div className="services">
        <div className="services__header">
          <Header />
          <h1>OUR SERVICES</h1>
          <h3>We transform ideas to achievements</h3>
        </div>

        <div className="services__content container">
          <div className="services__row grid grid-cols-1 lg:grid-cols-2">
            <div className="service__box grid grid-cols-1 sm:grid-cols-3">
              <div className="service__box__left">
                <div className="service__img">
                  <Image src={image1} />
                </div>
                <button
                  onClick={() => dispatch(openWebQuote())}
                  className="transition duration-500 ease-in-out   transform hover:scale-103 ..."
                >
                  Get Quote
                </button>
              </div>

              <div className="col-span-2">
                <h2>WEBSITE DEVELOPMENT</h2>
                <p>
                  Mozo Tech, a web designing company in Dubai, United Arab
                  Emirates, plays a dominant role in the field of website
                  development, where you can make your business on the digital
                  track.
                </p>

                <Link href="/ecommerce-web-development-kerala-india">
                  <h6 className="transition duration-500 ease-in-out hover:-translate-y-0.5   transform hover:scale-100 ...">
                    {" "}
                    View More Details
                  </h6>
                </Link>
              </div>
              <button
                onClick={() => dispatch(openWebQuote())}
                className="transition duration-500 ease-in-out   transform hover:scale-103 ... service__footer__button"
              >
                Get Quote
              </button>
            </div>

            <div className="service__box grid grid-cols-1 sm:grid-cols-3">
              <div className="service__box__left">
                <div className="service__img">
                  <Image src={image2} />
                </div>
                <button
                  onClick={() => dispatch(openAppQuote())}
                  className="transition duration-500 ease-in-out   transform hover:scale-103 ..."
                >
                  Get Quote
                </button>
              </div>

              <div className="col-span-2">
                <h2>APP DEVELOPMENT</h2>
                <p>
                  Your business success is in creating outstanding and
                  passionate solutions. Mozo Tech, the web and mobile app
                  development company in Dubai, give you a chance to experience
                  web and mobile app development service of the world-class
                  standard
                </p>

                <Link href="/mobile-app-development-kerala-india">
                  <h6 className="transition duration-500 ease-in-out hover:-translate-y-0.5   transform hover:scale-100 ...">
                    View More Details
                  </h6>
                </Link>
              </div>
              <button
                onClick={() => dispatch(openAppQuote())}
                className="transition duration-500 ease-in-out   transform hover:scale-103 ... service__footer__button"
              >
                Get Quote
              </button>
            </div>
          </div>

          <div className="services__row grid grid-cols-1 lg:grid-cols-2">
            <div className="service__box grid grid-cols-1 sm:grid-cols-3">
              <div className="service__box__left">
                <div className="service__img">
                  <Image src={image3} />
                </div>
                <button
                  onClick={() => dispatch(openSoftwareQuote())}
                  className="transition duration-500 ease-in-out   transform hover:scale-103 ..."
                >
                  Get Quote
                </button>
              </div>

              <div className="col-span-2">
                <h2>SOFTWARE DEVELOPMENT</h2>
                <p>
                  Mozo Tech, the software development company in Dubai and
                  worldwide, design, develop and deploy solutions to your
                  software ideas.
                </p>

                <Link href="/software-development-company-kerala-india">
                  <h6 className="transition duration-500 ease-in-out hover:-translate-y-0.5   transform hover:scale-100 ...">
                    View More Details
                  </h6>
                </Link>
              </div>
              <button
                onClick={() => dispatch(openSoftwareQuote())}
                className="transition duration-500 ease-in-out   transform hover:scale-103 ... service__footer__button"
              >
                Get Quote
              </button>
            </div>

            <div className="service__box grid grid-cols-1 sm:grid-cols-3">
              <div className="service__box__left">
                <div className="service__img">
                  <Image src={image20} />
                </div>
                <button
                  onClick={() => dispatch(openBusinessQuote())}
                  className="transition duration-500 ease-in-out   transform hover:scale-103 ..."
                >
                  Get Quote
                </button>
              </div>

              <div className="col-span-2">
                <h2>BUSINESS CONSULTANCY</h2>
                <p>
                Mozo Tech points to all-round business consulting for maximising the Return On Investment providing end-to-end development. Our company specializes in providing high-quality software solutions for a wide range of industries, including start-ups
                </p>

                <Link href="/b_consultancy">
                  <h6 className="transition duration-500 ease-in-out hover:-translate-y-0.5   transform hover:scale-100 ...">
                    {" "}
                    View More Details
                  </h6>
                </Link>
              </div>
              <button
                onClick={() => dispatch(openBusinessQuote())}
                className="transition duration-500 ease-in-out   transform hover:scale-103 ... service__footer__button"
              >
                Get Quote
              </button>
            </div>
          </div>

          <div className="services__row grid grid-cols-1 lg:grid-cols-2">
            <div className="service__box grid grid-cols-1 sm:grid-cols-3">
              <div className="service__box__left">
                <div className="service__img">
                  <Image src={image5} />
                </div>
                <button
                  onClick={() => dispatch(openDigitalQuote())}
                  className="transition duration-500 ease-in-out   transform hover:scale-103 ..."
                >
                  Get Quote
                </button>
              </div>

              <div className="col-span-2">
                <h2>DIGITAL MARKETING</h2>
                <p>
                  Mozo Tech is an extension in assisting you in development by
                  the means of Digital marketing that is advertising through
                  digital channels. The Main Digital marketing services we look
                  forward to are, Search Engine Optimization (SEO), Social Media
                  Marketing (SMM),
                </p>

                <Link href="/digital-marketing-agency-kerala-india">
                  <h6 className="transition duration-500 ease-in-out hover:-translate-y-0.5   transform hover:scale-100 ...">
                    View More Details
                  </h6>
                </Link>
              </div>
              <button
                onClick={() => dispatch(openDigitalQuote())}
                className="transition duration-500 ease-in-out   transform hover:scale-103 ... service__footer__button"
              >
                Get Quote
              </button>
            </div>

            <div className="service__box grid grid-cols-1 sm:grid-cols-3">
              <div className="service__box__left">
                <div className="service__img">
                  <Image src={image6} />
                </div>
                <button
                  onClick={() => dispatch(openBrandingQuote())}
                  className="transition duration-500 ease-in-out   transform hover:scale-103 ..."
                >
                  Get Quote
                </button>
              </div>

              <div className="col-span-2">
                <h2>BRANDING</h2>
                <p>
                  Beyond a logo, branding for our internet marketing company is
                  like creating memories, stories, and relationships with the
                  customers. The brand we give you is all you need for the
                  initial promotion of your business. Through branding, we tell
                  your business story to the
                </p>

                <Link href="/branding-company-kerala-india">
                  <h6 className="transition duration-500 ease-in-out hover:-translate-y-0.5   transform hover:scale-100 ...">
                    View More Details
                  </h6>
                </Link>
              </div>
              <button
                onClick={() => dispatch(openBrandingQuote())}
                className="transition duration-500 ease-in-out   transform hover:scale-103 ... service__footer__button"
              >
                Get Quote
              </button>
            </div>
          </div>

          <div className="services__row grid grid-cols-1 lg:grid-cols-2">
            <div className="service__box grid grid-cols-1 sm:grid-cols-3">
              <div className="service__box__left">
                <div className="service__img">
                  <Image src={image7} />
                </div>
                <button
                  onClick={() => dispatch(openSeoQuote())}
                  className="transition duration-500 ease-in-out   transform hover:scale-103 ..."
                >
                  Get Quote
                </button>
              </div>

              <div className="col-span-2">
                <h2>SEO</h2>
                <p>
                  Digital marketing company Mozo Tech is a reliable and
                  experienced digital marketer and SEO expert in United Arab
                  Emirates. SEO stands for Search Engine Optimization. Our
                  perfect and planned SEO results in more visitors to your
                  website and thus increases sales, more
                </p>

                <Link href="/seo-companies-kerala-india">
                  <h6 className="transition duration-500 ease-in-out hover:-translate-y-0.5   transform hover:scale-100 ...">
                    View More Details
                  </h6>
                </Link>
              </div>
              <button
                onClick={() => dispatch(openSeoQuote())}
                className="transition duration-500 ease-in-out   transform hover:scale-103 ... service__footer__button"
              >
                Get Quote
              </button>
            </div>

            <div className="service__box grid grid-cols-1 sm:grid-cols-3">
              <div className="service__box__left">
                <div className="service__img">
                  <Image src={image8} />
                </div>
                <button
                  onClick={() => dispatch(openSmmQuote())}
                  className="transition duration-500 ease-in-out   transform hover:scale-103 ..."
                >
                  Get Quote
                </button>
              </div>

              <div className="col-span-2">
                <h2>SMM</h2>
                <p>
                  Social media is a voice to communicate with the bulk of
                  potential customers and spread the brand message to the world.
                  Social media marketing is the procedure of driving engagement
                  and sharing on a social media platform. Competitors in this
                  field look
                </p>

                <Link href="/social-media-marketing-kerala-india">
                  <h6 className="transition duration-500 ease-in-out hover:-translate-y-0.5   transform hover:scale-100 ...">
                    {" "}
                    View More Details
                  </h6>
                </Link>
              </div>
              <button
                onClick={() => dispatch(openSmmQuote())}
                className="transition duration-500 ease-in-out   transform hover:scale-103 ... service__footer__button"
              >
                Get Quote
              </button>
            </div>
          </div>

          <div className="services__row grid grid-cols-1 lg:grid-cols-2">
            <div className="service__box grid grid-cols-1 sm:grid-cols-3">
              <div className="service__box__left">
                <div className="service__img">
                  <Image src={image9} />
                </div>
                <button
                  onClick={() => dispatch(openSmsQuote())}
                  className="transition duration-500 ease-in-out   transform hover:scale-103 ..."
                >
                  Get Quote
                </button>
              </div>

              <div className="col-span-2">
                <h2>BULK SMS AND VOICE CALLS</h2>
                <p>
                  The best bulk SMS service provider in United Arab Emirates,
                  Mozo Tech enables you; to easily communicate with people
                  through brief and pertinent messages. The Bulk SMS Marketing
                  technique is a great and superior option to promote 
                  
                </p>

                <Link href="/bulk-sms-services-kerala-india">
                  <h6 className="transition duration-500 ease-in-out hover:-translate-y-0.5   transform hover:scale-100 ...">
                    {" "}
                    View More Details
                  </h6>
                </Link>
              </div>
              <button
                onClick={() => dispatch(openSmsQuote())}
                className="transition duration-500 ease-in-out   transform hover:scale-103 ... service__footer__button"
              >
                Get Quote
              </button>
            </div>

            <div className="service__box grid grid-cols-1 sm:grid-cols-3">
              <div className="service__box__left">
                <div className="service__img">
                  <Image src={image10} />
                </div>
                <button
                  onClick={() => dispatch(openEmailQuote())}
                  className="transition duration-500 ease-in-out   transform hover:scale-103 ..."
                >
                  Get Quote
                </button>
              </div>

              <div className="col-span-2">
                <h2>EMAIL MARKETING</h2>
                <p>
                  Bulk E-Mail marketing is the easiest method to communicate
                  with customers. This is a marketing platform for businesses
                  and marketers, to send marketing messages and triggered mail.
                  An email marketing system is a combination of workspace email 
                  more.
                </p>

                <Link href="/emailmarketing-company-kerala-india">
                  <h6 className="transition duration-500 ease-in-out hover:-translate-y-0.5   transform hover:scale-100 ...">
                    {" "}
                    View More Details
                  </h6>
                </Link>
              </div>
              <button
                onClick={() => dispatch(openEmailQuote())}
                className="transition duration-500 ease-in-out   transform hover:scale-103 ... service__footer__button"
              >
                Get Quote
              </button>
            </div>
          </div>

          <div className="services__row grid grid-cols-1 lg:grid-cols-2">
            <div className="service__box grid grid-cols-1 sm:grid-cols-3">
              <div className="service__box__left">
                <div className="service__img">
                  <Image src={image11} />
                </div>
                <button
                  onClick={() => dispatch(openInfluencerQuote())}
                  className="transition duration-500 ease-in-out   transform hover:scale-103 ..."
                >
                  Get Quote
                </button>
              </div>

              <div className="col-span-2">
                <h2>INFLUENCER MARKETING</h2>
                <p>
                  As we lead the new-normal life in this pandemic period, it
                  needs a new way of thinking. The internet marketing company in
                  Dubai Mozo Tech brings out the data insights and technology
                  into the creative process to build a digital brand. Ourselves
                </p>

                <Link href="/influencer-company-kerala-india">
                  <h6 className="transition duration-500 ease-in-out hover:-translate-y-0.5   transform hover:scale-100 ...">
                    {" "}
                    View More Details
                  </h6>
                </Link>
              </div>
              <button
                onClick={() => dispatch(openInfluencerQuote())}
                className="transition duration-500 ease-in-out   transform hover:scale-103 ... service__footer__button"
              >
                Get Quote
              </button>
            </div>

            <div className="service__box grid grid-cols-1 sm:grid-cols-3">
              <div className="service__box__left">
                <div className="service__img">
                  <Image src={image12} />
                </div>
                <button
                  onClick={() => dispatch(openDomainQuote())}
                  className="transition duration-500 ease-in-out   transform hover:scale-103 ..."
                >
                  Get Quote
                </button>
              </div>

              <div className="col-span-2">
                <h2>DOMAIN</h2>
                <p>
                  A domain name is your business address and gives a credible
                  professional touch to your business in the cyberspace. Here is
                  the best domain service provider company in UAE, Mozo Tech
                  offering domain registration, domain transfer and domain
                </p>

                <Link href="/domain">
                  <h6 className="transition duration-500 ease-in-out hover:-translate-y-0.5   transform hover:scale-100 ...">
                    {" "}
                    View More Details
                  </h6>
                </Link>
              </div>
              <button
                onClick={() => dispatch(openDomainQuote())}
                className="transition duration-500 ease-in-out   transform hover:scale-103 ... service__footer__button"
              >
                Get Quote
              </button>
            </div>
          </div>

          <div className="services__row grid grid-cols-1 lg:grid-cols-2">
            <div className="service__box grid grid-cols-1 sm:grid-cols-3">
              <div className="service__box__left">
                <div className="service__img">
                  <Image src={image13} />
                </div>
                <button
                  onClick={() => dispatch(openHostingQuote())}
                  className="transition duration-500 ease-in-out   transform hover:scale-103 ..."
                >
                  Get Quote
                </button>
              </div>

              <div className="col-span-2">
                <h2>HOSTING</h2>
                <p>
                  Mozo Tech stands up as the best domain service provider
                  company in UAE and many other places in the world, with the
                  most powerful and reliable hosting services; shared, cloud,
                  dedicated and VPS, by being a good companion in your online
                  business
                </p>

                <Link href="/hosting">
                  <h6 className="transition duration-500 ease-in-out hover:-translate-y-0.5   transform hover:scale-100 ...">
                    {" "}
                    View More Details
                  </h6>
                </Link>
              </div>
              <button
                onClick={() => dispatch(openHostingQuote())}
                className="transition duration-500 ease-in-out   transform hover:scale-103 ... service__footer__button"
              >
                Get Quote
              </button>
            </div>

            <div className="service__box grid grid-cols-1 sm:grid-cols-3">
              <div className="service__box__left">
                <div className="service__img">
                  <Image src={image14} />
                </div>
                <button
                  onClick={() => dispatch(openAnimationQuote())}
                  className="transition duration-500 ease-in-out   transform hover:scale-103 ..."
                >
                  Get Quote
                </button>
              </div>

              <div className="col-span-2">
                <h2>ANIMATION</h2>
                <p>
                  Mozo Tech is a creative animation production company. We
                  develop each one with a distinctive style and reflect the
                  quality of work done for you. Our media group welcomes each
                  one of you to be part of our family with each new project and
                  the creative
                </p>

                <Link href="/2d-3d-animation-kerala-india">
                  <h6 className="transition duration-500 ease-in-out hover:-translate-y-0.5   transform hover:scale-100 ...">
                    {" "}
                    View More Details
                  </h6>
                </Link>
              </div>
              <button
                onClick={() => dispatch(openAnimationQuote())}
                className="transition duration-500 ease-in-out   transform hover:scale-103 ... service__footer__button"
              >
                Get Quote
              </button>
            </div>
          </div>

          <div className="services__row grid grid-cols-1 lg:grid-cols-2">
            <div className="service__box grid grid-cols-1 sm:grid-cols-3">
              <div className="service__box__left">
                <div className="service__img">
                  <Image src={image15} />
                </div>
                <button
                  onClick={() => dispatch(openAiQuote())}
                  className="transition duration-500 ease-in-out   transform hover:scale-103 ..."
                >
                  Get Quote
                </button>
              </div>

              <div className="col-span-2">
                <h2>ARTIFICIAL INTELLIGENCE</h2>
                <p>
                  We are a digital marketing company and AI consultancy, trained
                  in, cutting-edge AI and transforming digital and e-commerce
                  business in a post-covid world. The As artificial intelligence
                  can change the future, it is a bonus to the exponential growth
                  in automation.
                </p>

                <Link href="/ai">
                  <h6 className="transition duration-500 ease-in-out hover:-translate-y-0.5   transform hover:scale-100 ...">
                    {" "}
                    View More Details
                  </h6>
                </Link>
              </div>
              <button
                onClick={() => dispatch(openAiQuote())}
                className="transition duration-500 ease-in-out   transform hover:scale-103 ... service__footer__button"
              >
                Get Quote
              </button>
            </div>

            <div className="service__box grid grid-cols-1 sm:grid-cols-3">
              <div className="service__box__left">
                <div className="service__img">
                  <Image src={image16} />
                </div>
                <button
                  onClick={() => dispatch(openGameQuote())}
                  className="transition duration-500 ease-in-out   transform hover:scale-103 ..."
                >
                  Get Quote
                </button>
              </div>

              <div className="col-span-2">
                <h2>GAME DEVELOPMENT</h2>
                <p>
                  Mozo Techis the IT company in Dubai with a perfect mix of
                  technical, unique, memorable, creative, effective game
                  services. We are the best game development company in United
                  Arab Emirates to develop 3D games and apps to support various
                  platforms like iPad/iPhone
                </p>

                <Link href="/game-development-company-kerala-india">
                  <h6 className="transition duration-500 ease-in-out hover:-translate-y-0.5   transform hover:scale-100 ...">
                    {" "}
                    View More Details
                  </h6>
                </Link>
              </div>
              <button
                onClick={() => dispatch(openGameQuote())}
                className="transition duration-500 ease-in-out   transform hover:scale-103 ... service__footer__button"
              >
                Get Quote
              </button>
            </div>
          </div>

          <div className="services__row grid grid-cols-1 lg:grid-cols-2">
            <div className="service__box grid grid-cols-1 sm:grid-cols-3">
              <div className="service__box__left">
                <div className="service__img">
                  <Image src={image17} />
                </div>
                <button
                  onClick={() => dispatch(openCloudQuote())}
                  className="transition duration-500 ease-in-out   transform hover:scale-103 ..."
                >
                  Get Quote
                </button>
              </div>

              <div className="col-span-2">
                <h2>CLOUD COMPUTING</h2>
                <p>
                  Mozo Tech is the most reviewed IT company having a constantly
                  evolving cloud infrastructure with empowering security and
                  hold a comprehensive cloud-native security platform. We craft
                  out the best cloud computing services in Dubai, for
                </p>

                <Link href="/cloud">
                  <h6 className="transition duration-500 ease-in-out hover:-translate-y-0.5   transform hover:scale-100 ...">
                    {" "}
                    View More Details
                  </h6>
                </Link>
              </div>
              <button
                onClick={() => dispatch(openCloudQuote())}
                className="transition duration-500 ease-in-out   transform hover:scale-103 ... service__footer__button"
              >
                Get Quote
              </button>
            </div>

            <div className="service__box grid grid-cols-1 sm:grid-cols-3">
              <div className="service__box__left">
                <div className="service__img">
                  <Image src={image18} />
                </div>
                <button
                  onClick={() => dispatch(openRoboticsQuote())}
                  className="transition duration-500 ease-in-out   transform hover:scale-103 ..."
                >
                  Get Quote
                </button>
              </div>

              <div className="col-span-2">
                <h2>ROBOTICS</h2>
                <p>
                  Robotics is the mind-storming combination of electronics,
                  computer software, and mechanics. As the growth of robotics is
                  daily, Mozo Tech, an IT company in Dubai, United Arab
                  Emirates, bears the hallmark in robotics development. Our
                  company provides
                </p>

                <Link href="robotics">
                  <h6 className="transition duration-500 ease-in-out hover:-translate-y-0.5   transform hover:scale-100 ...">
                    {" "}
                    View More Details
                  </h6>
                </Link>
              </div>
              <button
                onClick={() => dispatch(openRoboticsQuote())}
                className="transition duration-500 ease-in-out   transform hover:scale-103 ... service__footer__button"
              >
                Get Quote
              </button>
            </div>
          </div>

          <div className="services__row grid grid-cols-1 lg:grid-cols-2 ">
            <div className="service__box grid grid-cols-1 sm:grid-cols-3">
              <div className="service__box__left">
                <div className="service__img">
                  <Image src={image19} />
                </div>
                <button
                  onClick={() => dispatch(openResearchQuote())}
                  className="transition duration-500 ease-in-out   transform hover:scale-103 ..."
                >
                  Get Quote
                </button>
              </div>

              <div className="col-span-2">
                <h2>RESEARCH & DEVELOPMENT</h2>
                <p>
                  Research and development is the establishment of web
                  technology to innovate products or services. We are a unique
                  retailed software service providing company in Dubai. In the
                  business field, Mozo Tech help to make your steps towards
                  creating
                </p>

                <Link href="/research">
                  <h6 className="transition duration-500 ease-in-out hover:-translate-y-0.5   transform hover:scale-100 ...">
                    {" "}
                    View More Details
                  </h6>
                </Link>
              </div>
              <button
                onClick={() => dispatch(openResearchQuote())}
                className="transition duration-500 ease-in-out   transform hover:scale-103 ... service__footer__button"
              >
                Get Quote
              </button>
            </div>

            <div className="service__box grid grid-cols-1 sm:grid-cols-3">
              <div className="service__box__left">
                <div className="service__img">
                  <Image src={image4} />
                </div>
                <button
                  onClick={() => dispatch(openGraphicQuote())}
                  className="transition duration-500 ease-in-out   transform hover:scale-103 ..."
                >
                  Get Quote
                </button>
              </div>

              <div className="col-span-2">
                <h2>GRAPHIC DESIGNING</h2>
                <p>
                  Our graphic designing company in Dubai provide graphic
                  designing services that are inspiring, incredible and
                  customized, which will be impossible for your customers to
                </p>

                <Link href="/graphicdesign-kerala-india">
                  <h6 className="transition duration-500 ease-in-out hover:-translate-y-0.5   transform hover:scale-100 ...">
                    {" "}
                    View More Details
                  </h6>
                </Link>
              </div>
              <button
                onClick={() => dispatch(openGraphicQuote())}
                className="transition duration-500 ease-in-out   transform hover:scale-103 ... service__footer__button"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
        <Footer />
        <div></div>

        {/*<<<<<<<<<<<<<<<<<<<<<<<<< QOUTE FORMS MODELS >>>>>>>>>>>>>>>*/}
        <WebQuote />
        <AppQuote />

        <SoftwareQuote />
        <GameQuote />
        <GraphicQuote />
        <AnimationQuote />
        <DigitalQuote />
        <BrandingQuote />
        <SeoQuote />
        <SmmQuote />
        <SmsQuote />
        <EmailQuote />
        <InfluencerQuote />
        <DomainQuote />
        <HostingQuote />
        <CloudQuote />
        <AiQuote />
        <RoboticsQuote />
        <BusinessQuote />
        <ResearchQuote />
      </div>
    </>
  );
}
