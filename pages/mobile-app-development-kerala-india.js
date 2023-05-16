import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import web from "../public/images/service/web.png";
import service from "../public/images/app.png";
import Form from "../components/serviceform";
import Proposal from "../components/proposal";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Head from 'next/head'
import Pixel from '../components/pixel'
export default function App() {
  const [data] = useState([
    {
      question: "Is the mobile application and web application the same?",
      answer:
        "Every mobile app needs a web-based application running in the background. The background web server checks the data associated with the mobile application and login permissions.",
    },
    {
      question: "Who will have the source code ownership?",
      answer:
        "The bespoke code license rights and copyright will be assigned to you as a whole. We are purely transparent all intellectual property rights and the ownership terms have to be reviewed before the project begins.",
    },
    {
      question: "Is the app development a long term procedure?",
      answer:
        " We always do our best to deliver our best to meet your time constraint. At the same time in some cases, we may have restrictions on technology and security requirements. ",
    },
    {
      question: "What about the programming languages and framework?",
      answer:
        "Common programming languages we use include HTML, CSS and javascript on the front end, and, Javascript or PHP on the back end. The mobile app projects that should stay within the budget and also supporting web, android and ios are development done using Kotlin, Swift, Flutter and React-Native.",
    },
    {
      question:
        "When we create a new one what about our existing web systems and CRM?",
      answer:
        "It will be possible to integrate your API documentation with systems and online to drive app functionality.",
    },
    {
      question: "What about the designing part?",
      answer:
        "Designing is the initial stage in the app development project. Designing is done by understanding and discovering your brand and business as a whole.",
    },
  ]);
  return (
    <> 
    <Head>
    <title>Best mobile app development companies in Calicut, Kerala, Bangalore, India</title>
    <meta property="og:title" content="Best mobile app development companies in Calicut, Kerala, Bangalore, India" key="title" />
    <meta name="description" content="Best mobile app development companies in Calicut, Kerala, Bangalore, India. We design and develop custom mobile applications for iOS and Android based in India."/>
  </Head>
    <Pixel name='FACEBOOK_PIXEL_1' />
    <div className="service">
      <div className="service__header">
        <Header />
        <h1>WEB AND MOBILE APP DEVELOPMENT</h1>
        <h4></h4>
      </div>

      <div className="service__content container p-3">
        <div className="service__first__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <p>
            Your business success is in creating outstanding and passionate solutions. Mozo Tech, the web and mobile app development company in Dubai, give you a chance to experience web and mobile app development service of the world-class standard by building it affordably, friendly, and rich in features. 
            </p>
          </div>
          <div className="service__first__row__img order-first md:order-last">
            <Image src={service} alt="Mobile app development company India" />
          </div>
        </div>

        <div className="service__second__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <div>
              <h2>We offer</h2>
              <p>
              Ourselves, one of the top reviewed IT companies in UAE, offers a vast range of mobile and web application development services like ios, android, web, hybrid-native, and so on; that delight the users and grow your business. Our apps by flutter mobile app developers are quite customized with white labels, also provide you with complete source code and take your business to the next level. Everybody here plans solutions for industries like enterprises, manufacturing, education, transportation, real estate, banking, laundry, healthcare, social networking, pickup and delivery, blockchain, IoT, food and beverage, e-commerce, on-demand apps, etc.  <br />
              The industry experts of the best app development company in Dubai belonging to us leverage building the finest fit dream apps for your businesses at low cost. Individuals here are the global leaders in hybrid app development solutions for transforming your ideas and always get featured with our quality works and quick market release.
              </p>
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>

        <div className="service__third__row grid  grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <h2>Our Scope </h2>
            <p>
            Mozo Tech is a mobile-focused software development company and has efficiency and proficiency in handling development services. We have a set of super-skilled developers who are highly professional and optimistic in technically handling compound app development projects. The business apps we create are stunning and of superior quality with extensive testing and completely bug-free; also reliable, robust, easy to use, and do personalized for your business. <br />
            We are available 24/7 to provide you with guidance and support. Always provide in-house developers dedicated even for the start-ups to help in assembling the products and scale the business and have project managers to focus on the operations done in android, Ios, python, react, etc. Mozo Tech is a leading software development company in UAE, with expertise in mass consumer products with a full source library to build the best user interfaces and services like low-cost Android app development, IOS app development, Flutter app development, web and app design, e-commerce hybrid app development, etc.
            </p>
          </div>
          <div className="service__third__row__img order-first md:order-last">
            <Image src={web} alt="Mobile app development company in calicut" />
          </div>
        </div>

        <div className="service__third__row grid  grid-cols-1 md:grid-cols-3  md:gap-20">
          <div className="col-span-2">
            <h2>Overview</h2>
            <p>
            Best web and mobile app development company have always been at the helm of technological innovation to confirm premium quality solutions for our customers and carefully study your requirements and deliver the product in a quick turnaround time, promptly addressing any future changes and questions. Building our passion will be a better partnership for you and make you taste your success. Do partner with us.
            </p>
          </div>
          <div className="service__third__row__img pt-10 md:pt-0">
            {data.map((data) => {
              return (
                <Accordion
                  style={{
                    background: "#E8E8E8",
                    border: "none",
                    borderRadius: "none",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>
                      <p
                        className="pr-4"
                        style={{
                          font: "normal normal normal 14px/19px Poppins",
                          textAlign: "left",
                          fontFamily: '"Poppins", sans-serif',
                        }}
                      >
                        {data.question}
                      </p>
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails style={{ paddingTop: "0", marginTop: "0" }}>
                    <Typography>
                      <p
                        style={{
                          font: "normal normal normal 14px/22px Poppins",
                          textAlign: "left",
                          fontFamily: '"Poppins", sans-serif',
                        }}
                      >
                        {data.answer}
                      </p>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </div>
        </div>
      </div>
      <Proposal type={"App"} />

      <Footer />
    </div> </>
  );
}
