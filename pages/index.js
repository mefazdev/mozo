import Header from "../components/header";
import Image from "next/image";
import { useDispatch } from "react-redux";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import dots1 from "../public/images/home/dots-1.png";
import line from "../public/images/home/line.png";
import serviceLine from "../public/images/home/service-line.png";
import ellipse2 from "../public/images/home/ellipse2.png";
import ellipse3 from "../public/images/home/ellipse3.png";
import dotsWhite from "../public/images/home/dots-white.png";
import app from "../public/images/home/app.png";
import seo from "../public/images/home/seo.png";
import design from "../public/images/home/design.png";
import business from "../public/images/home/business.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Blogs from "../components/blogs";
import Footer from "../components/footer";
import ellipse1 from "../public/images/home/ellipse1.png";
import blackLine from "../public/images/home/black-line.png";
import projectOne from "../public/images/home/project-2.png";
import projectTwo from "../public/images/home/project-1.png";
import projectThree from "../public/images/home/project-3.png";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor-v2";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AwardSlider from "../components/AwardSlider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProjectSlider from "../components/projectSlider";
import exOne from "../public/images/home/ex-1.png";
import exTwo from "../public/images/home/ex-2.png";
import exThree from "../public/images/home/ex-3.png";
import exFour from "../public/images/home/ex-4.png";
import ClientSlider from "../components/ClientSlider";
import coma from "../public/images/home/coma.png";
import FeedbackSlider from "../components/FeedbackSlider";
import InstagramIcon from "@mui/icons-material/Instagram";
import BannerSlider from "../components/BannerSlider";
import { openCommenQuote } from "../redux/actions";

import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import moment from "moment";

import Pixel from "../components/pixel";
import Head from "next/head";
import { openSuccessAlert } from "../redux/actions";
export default function Home() {
  const [isReadMore, setIsReadMore] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [info, setInfo] = useState("");
  const [count, setCount] = useState(0);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [blog, setBlog] = useState([]);
  const dispatch = useDispatch();
  const [didViewCountUp, setState] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setState({ didViewCountUp: true });
    }
  };

  const text = `Mozo Tech is one of the pre-eminent software company, engaged in flourishing out-of-box products that aim to bring smartness to a world of business operations where everything goes usual. We are headquartered at Dubai and is one of the most respected IT company. Through innovation, commitment, quality, and superior service we assist you to give a productive outcome to your business. The business intelligence in us advantages you in IT and business solutions to spot unmet needs. 

   
  Our talent represents the direct and virtual presence across the world as we always embarked on start-ups with diversifying portfolios and delivered concrete breakthrough products and services. We work shoulder to shoulder with industry leaders to create comprehensive and rigorous programs to help achieve your business success. Mozo Tech aims at developing novel and differentiating technological solutions and strives to provide world-class standards at affordable prices. 
  In this data-driven world, we have successfully done uncountable numbers of future-ready and have expanded services all over the world. Mozo Tech be with you in realizing the dream of every working professional in the world to jump-start through data-proficient development and market research. Assurance is given to you like we will keep your investment safe through a customer-focused approach and has unmatched capabilities across technology to maintain leadership in all business.
  `;

  const addInfo = async () => {
    if (count == 0) {
      return setCount(count + 1);
    }
    if (count == 1) {
      return setCount(count + 1);
    }
    if (count == 2) {
      const docRef = await addDoc(collection(db, "lead"), {
        name: name,
        phone: phone,
        email: email,
        date: moment(new Date()).unix(),
        timestamp: serverTimestamp(),
      });

    await  addDoc(collection(db, "mail"), {
        to: ["info@cleverkings.com"],
        message: {
          subject: "Lead",
          html: `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
    
        </code>`,
        },
      });
     
      setCount(0);
       dispatch(openSuccessAlert())
    }
  };
  useEffect(() => {
    setInfo("");
  }, [count]);

  const handleChange = (value) => {
    if (count == 0) {
      setPhone(value);
    } else if (count == 1) {
      setName(value);
    
    } else if (count == 2) {
      setEmail(value);
     
    }
    setInfo(value);
  };

  return (
    <>
      <Head>
        <title>Website Designing | Mobile app development Kerala, India</title>
        <meta
          name="description"
          content="Best Website Designing and Mobile app development companies in Calicut Kerala, Bangalore | Web development, Offers comprehensive web development solutions India."
        />
        <meta property="og:title" content="Home" key="title" />
        <link rel="canonical" href="https://www.cleverkings.com" />
        <meta
          name="google-site-verification"
          content="OvbASjnfu_4JT7H4MCPfJX5Uy4xLpisgOnVFTpSXgDA"
        />
      </Head>

      <Pixel name="FACEBOOK_PIXEL_1" />

      <div className="home ">
        <Header />
        <div className="home__content">
          {/* <<<<<<<<<<<<<< HOME BANNER >>>>>>>>>>>>>>> */}
          <div className="home__banner grid grid-cols-1 md:grid-cols-2">
            <div className="home__banner__left order-last md:order-first grid grid-cols-3">
              <div className="home__banner__social ">
                <div className="ellipse__div">
                  <Image src={ellipse1} alt="App development India" />
                </div>
                <div className="social__div">
                  <div
                    id="wtsap__icon"
                    className="social__circle  rounded-full"
                  >
                    <a
                      href="whatsapp://send?phone=+918645999666"
                      data-action="share/whatsapp/share"
                    >
                      <WhatsAppIcon id="home__social__icon" />
                    </a>
                  </div>
                  <div className="social__circle rounded-full">
                    <a href="https://www.facebook.com/cleverkingsgroup/">
                      <FacebookIcon id="home__social__icon" />
                    </a>
                  </div>
                  <div className="social__circle rounded-full">
                    <a href="https://instagram.com/cleverkingsofficial?utm_medium=copy_link">
                      <InstagramIcon id="home__social__icon" />
                    </a>
                  </div>
                  <div className="social__circle rounded-full">
                    <a href="https://twitter.com/cleverkingsinfo">
                      <TwitterIcon id="home__social__icon" />
                    </a>
                  </div>
                  <div className="social__circle rounded-full">
                    <a href="">
                      <YouTubeIcon id="home__social__icon" />
                    </a>
                  </div>
                  <div className="social__circle rounded-full">
                    <a href="https://www.linkedin.com/company/cleverkings/">
                      <LinkedInIcon id="home__social__icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="home__main__header col-span-3  md:col-span-2">
                <div className="home__main__header__content">
                  <h1>
                    We do things <br />
                    that matter.
                  </h1>
                  <h6>Premium solutions for your business :)</h6>

                  <button onClick={() => dispatch(openCommenQuote())}>
                    LETS TALK
                  </button>
                </div>
              </div>
            </div>

            <div className="home__banner__right  ">
              <h1>
                We do things <br />
                that matter.
              </h1>
              <div className="home__banner__right__row flex justify-between">
                <div className="home__banner__dots ">
                  <Image
                    src={dots1}
                    alt="web development, website design, web design company India"
                  />
                </div>
                <div className="home__banner__line">
                  {/* <Image src={line} /> */}
                </div>
              </div>

              {/*<<<<<<<<<<  BANNER SLIDER >>>>>>>>>>> */}
              <div className="home__banner__slider">
                <BannerSlider />
              </div>
            </div>
          </div>
          <div className="home__banner__bottom flex">
            <div className="home__banner__bottom__img  flex">
              <div className="right__circle__one">
                <Image src={ellipse2} alt="Online food delivery app in Dubai" />
              </div>
              <div className="right__circle__two">
                <Image
                  src={ellipse3}
                  alt=" Online food delivery app in Bangalore"
                />
              </div>
            </div>
          </div>

          {/* <<<<<<<<<<< HOME SERVICE >>>>>>>>>>>>>>>>> */}
          <div className="home__service">
            <div className="home__service__content">
              <div className="home__service__head">
                <h2>
                  Things we <span>L O V E </span> to do
                </h2>
                <div className="home__service__line">
                  <Image
                    src={serviceLine}
                    alt="Mobile application development companies in Kerala"
                  />
                </div>
              </div>
              <div className="service__dots_div">
                <div className="service__dots">
                  <Image
                    src={dotsWhite}
                    alt="Mobile application development companies in Kerala"
                  />
                </div>
              </div>

              <div className="home__service__row">
                <div className="home__service__items grid grid-cols-2 md:grid-cols-4">
                  <Link href="/branding-company-kerala-india">
                    <div className="home__service__item">
                      <div className="home__service__icon">
                        <Image
                          src={design}
                          alt="Ecommerce website development company in Calicut"
                        />
                      </div>
                      <h6>
                        Design & <br />
                        Branding
                      </h6>
                    </div>
                  </Link>
                  <Link href="/mobile-app-development-kerala-india">
                    <div className="home__service__item">
                      <div className="home__service__icon">
                        <Image
                          src={app}
                          alt=" Ecommerce website development company in India"
                        />
                      </div>
                      <h6>
                        App & Web <br /> Development
                      </h6>
                    </div>
                  </Link>

                  <Link href="/digital-marketing-agency-kerala-india">
                    <div className="home__service__item">
                      <div className="home__service__icon">
                        <Image
                          src={seo}
                          alt="Ecommerce website development company in Bangalore"
                        />
                      </div>
                      <h6>
                        SEO & Digital <br /> Marketing
                      </h6>
                    </div>
                  </Link>
                  <Link href="/b_consultancy">
                    <div className="home__service__item">
                      <div className="home__service__icon">
                        <Image
                          src={business}
                          alt="Ecommerce website development company in Dubai"
                        />
                      </div>
                      <h6>
                        Business <br />
                        Consultation
                      </h6>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* <<<<<<<<<<< HOME ABOUT >>>>>>>>>>>>>>>>>>>>>> */}
          <div className="home__about">
            <div className="home__about__head">
              <h5>We are</h5>
              <h2>
                Global leaders <br /> in accelerating the Business
              </h2>
              <div className="home__about__line">
                <Image
                  src={blackLine}
                  alt="Mobile application development companies in Dubai"
                />
              </div>
            </div>
            <div className="home__about__content gap-10 grid grid-cols-1 lg:grid-cols-3">
              <div className="home__about__content__left flex">
                <div className="home__about__first__image__div">
                  <div className="home__about__first__image">
                    <Image
                      src={projectOne}
                      alt="Mobile application development companies in Calicut"
                    />
                  </div>
                </div>

                <div>
                  <div className="home__about__second__image">
                    <Image
                      src={projectTwo}
                      alt="Mobile application development companies in Kerala"
                    />
                  </div>
                  <div className="home__about__third__image">
                    <Image
                      src={projectThree}
                      alt="Mobile application development companies in Bangalore"
                    />
                  </div>
                </div>
              </div>

              <div className="home__about__content__right lg:col-span-2">
                <p>
                  {isReadMore ? text.slice(0, 751) : text}
                  <span onClick={toggleReadMore}>
                    {isReadMore ? "..... Read more" : " Show less"}
                  </span>
                </p>

                <div className="home__awards">
                  <div className="home__awards__head">
                    <h3>Awards & Recognition</h3>
                    {/* <h6>
                      <span className="pr-2">CLEVERKINGS PVT. LTD, </span>
                      <span>AN ISO 9001:2015 CERTIFIED COMPANY</span>
                    </h6> */}
                  </div>
                  <div className="home__awards__content">
                    <AwardSlider />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <<<<<<<<<<<<<<<< HOME DISCUSS SECTION >>>>>>>>>>>>> */}
          <div className="home__discuss flex">
            <div className="home__discuss_dots ">
              <Image
                src={dotsWhite}
                alt="Web development companies in kerala"
              />
            </div>
            <div className="home__discuss__content ">
              <div className="home__discuss__text grid grid-cols-1 md:grid-cols-3">
                <h3 className="md:col-span-2">
                  <b>T</b>he secret of getting ahead is getting started, join us
                  to build something great together.
                </h3>
                <div className="discuss__div">
                  <span className="rounded-full">
                    <ArrowForwardIcon
                      onClick={() => dispatch(openCommenQuote())}
                      id="discuss__arrow"
                    />
                  </span>
                  <h5>DISCUSS A PROJECT</h5>
                </div>
              </div>
            </div>
          </div>

          {/* <<<<<<<<<<<< HOME PROJECTS >>>>>>>>>>>>>>>> */}
          <div className="home__projects">
            <div className="home__project__head">
              <h2>
                Growing brands through <br /> Strategy, Innovation, Technology
                and Creativity.
              </h2>
              <div className="home__project__line">
                <Image src={blackLine} alt="Best web design company near me" />
              </div>
            </div>
            <div className="home__project__content">
              <ProjectSlider />
            </div>
            <Link href="/portfolio">
              <h5>VIEW ALL PROJECTS</h5>
            </Link>
          </div>

          {/* <<<<<<<<<<<< HOME CLIENTS >>>>>>>>>>>>>>>> */}
          <div className="home__clients">
            <div className="home_clients__head">
              <h2>Prospects became clients </h2>
              <div className="home__clients__line">
                <Image
                  src={serviceLine}
                  alt=" Mobile application development companies in Dubai"
                />
              </div>
            </div>
            <div className="home__clients__content grid grid-cols-1 lg:grid-cols-3">
              <div className="home__clients__left">
                <div className="home__clients__left__row__one grid grid-cols-2">
                  <div className="home__clients__left__box">
                    <div className="home__clintes__left__img">
                      <Image
                        src={exOne}
                        alt=" Mobile application development companies in Dubai"
                      />
                    </div>
                    <VisibilitySensor
                      scrollCheck={true}
                      onChange={onVisibilityChange}
                      delayedCall
                    >
                      <h2>
                        <CountUp
                          start={0}
                          end={didViewCountUp ? 5 : 0}
                          duration={2}
                        />
                        +
                      </h2>
                    </VisibilitySensor>
                    <h6>
                      Years of <br /> Expertise
                    </h6>
                  </div>
                  <div className="home__clients__left__box">
                    <div className="home__clintes__left__img">
                      <Image
                        src={exTwo}
                        alt="Online food delivery app in kerala"
                      />
                    </div>
                    <VisibilitySensor
                      scrollCheck={true}
                      onChange={onVisibilityChange}
                      delayedCall
                    >
                      <h2>
                        <CountUp
                          start={0}
                          end={didViewCountUp ? 500 : 0}
                          duration={5}
                        />
                        +
                      </h2>
                    </VisibilitySensor>
                    <h6>
                      Projects <br /> Delivered
                    </h6>
                  </div>
                </div>
                <div className="home__clients__left__row__two grid grid-cols-2 ">
                  <div className="home__clients__left__box">
                    <div className="home__clintes__left__img">
                      <Image
                        src={exThree}
                        alt="Online food delivery app in Dubai"
                      />
                    </div>
                    <VisibilitySensor
                      scrollCheck={true}
                      onChange={onVisibilityChange}
                      delayedCall
                    >
                      <h2>
                        <CountUp
                          start={0}
                          end={didViewCountUp ? 600 : 0}
                          duration={5}
                        />
                      </h2>
                    </VisibilitySensor>
                    <h6>
                      Clients <br />
                      Worldwide
                    </h6>
                  </div>
                  <div className="home__clients__left__box">
                    <div className="home__clintes__left__img">
                      <Image
                        src={exFour}
                        alt="Online food delivery app in Bangalore"
                      />
                    </div>
                    <VisibilitySensor
                      scrollCheck={true}
                      onChange={onVisibilityChange}
                      delayedCall
                    >
                      <h2>
                        <CountUp
                          start={0}
                          end={didViewCountUp ? 100 : 0}
                          duration={5}
                        />
                        +
                      </h2>
                    </VisibilitySensor>
                    <h6>
                      Awsome <br />
                      People
                    </h6>
                  </div>
                </div>
              </div>

              <div className="home__clients__right lg:col-span-2">
                <div className="home__clients__div">
                  <ClientSlider />
                </div>
              </div>
            </div>
          </div>

          {/* <<<<<<<<<<< HOME FEEDBACK >>>>>>>>>>>>>>>>>>>>>> */}
          <div className="home__feedback">
            <div className="home__feedback__content">
              <div className="home__feedback__head">
                <h2>
                  Your success is our story,
                  <br />
                  Clients feedback
                </h2>
                <div className="home__feedback__line">
                  <Image
                    src={blackLine}
                    alt="Ecommerce website development company in Dubai"
                  />
                </div>
              </div>
              <div className="home__feedback__row flex">
                <div className="feedback__coma">
                  <Image
                    src={coma}
                    alt="Mobile application development companies in Calicut"
                  />
                </div>
                <div className="home__feedback__row__right">
                  <FeedbackSlider />
                </div>
              </div>
            </div>
          </div>

          {/* <<<<<<<<<<<<< HOME BLOGS >>>>>>>>>>> */}
          {/* <Blogs /> */}

          {/* <<<<<<<<<<<<< HOME END >>>>>>>>>>>>>>>>> */}
          <div className="home__end">
            <div className="home__end__content">
              <h2>Its come to an end. Lets talk now</h2>
              <div className="home__end__form flex">
                <input
                  value={info}
                  onChange={(e) => handleChange(e.target.value)}
                  placeholder={
                    count == 0
                      ? "Enter phone number"
                      : count == 1
                      ? "Enter name"
                      : count == 2
                      ? "Enter Email"
                      : ""
                  }
                />
                <span onClick={info ? addInfo : null} className="rounded-full">
                  <ArrowForwardIcon id="home__end__arrow" />
                </span>
              </div>
            </div>
          </div>

          {/* <<<<<<<<<<<<< FOOTER >>>>>>>>>>>>>> */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return { props: { title: "My Title", content: "..." } };
}
