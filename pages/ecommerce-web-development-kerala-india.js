import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import web from "../public/images/service/web.png";
import service from "../public/images/service/service-ic.png";
import Form from "../components/serviceform";
import Proposal from "../components/proposal";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import ServiceAccordion from "../components/serviceAccordion";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Pixel from '../components/pixel'
import Head from 'next/head'
export default function Web() {
  const [data] = useState([
    {
      question: "What is the period required for developing a website?",
      answer:
        " The customer is the one who should set the deadline. We always try our best to complete all related tasks within the period given.",
    },

    {
      question: "What is the possible cost of a website?",
      answer:
        " The cost of building a website depends on the nature of the site, interactivity and design. You can even get websites for very low cost but done using available templates and may alike many other websites online. We do custom creation and provide a unique one. To get a quote, ring us with your requirement.  ",
    },
    {
      question: "Why should I need a new website?",
      answer:
        "  The answer is to make your organisation or business more relevant and feel fresh.  ",
    },
    {
      question:
        "Why should we go for a designed website when many templates are available online? ",
      answer:
        "  A website is a mode for communication and marketing your business. A well designed and developed website can do much more than one created on free template. ",
    },
    {
      question: "What about hosting?",
      answer: "  Yes. We do the hosting service also. ",
    },
  ]);

  return ( 
    <> <Head>
    <title> Ecommerce website design development companies in Kerala, Bangalore, India</title>
    <meta name="description" content="Best ecommerce website design, development companies in Calicut, Kerala, Bangalore, India | ecommerce website development | web development agency near me."/>
    <meta property="og:title" content="Ecommerce website design development companies in Kerala, Bangalore, India" key="title" />
    
  </Head>
    <Pixel name='FACEBOOK_PIXEL_1' />
    <div className="service">
      <div className="service__header">
        <Header />
        <h1>WEB DEVELOPMENT</h1>
      </div>

      <div className="service__content container p-3">
        <div
          style={{ alignItems: "center" }}
          className="service__first__row grid grid-cols-1 md:grid-cols-3 md:gap-20"
        >
          <div className="col-span-2">
            <p>
            Mozo Tech, a web designing company in Dubai, United Arab Emirates, plays a dominant role in the field of website development, where you can make your business on the digital track.
            </p>
          </div>
          <div className="service__first__row__img order-first md:order-last">
            <Image src={service} alt="Ecommerce development company" />
          </div>
        </div>

        <div className="service__second__row grid grid-cols-1 md:grid-cols-3 md:gap-20 ">
          <div className="col-span-2">
            <h2 className="pt-4">Know the leader in the industry</h2>
            <p>
            Our web development company is a full-scale solution to responsive and professional websites. We are well cognizant of the latest technology, trends and come up with low-cost e-commerce websites to complex sites, and also have specialized teams to develop websites compatible with any device and user. We keep our customers comfortable by providing it at affordable prices. The IT company in Dubai, Mozo Tech, go through this process by accepting customer needs, do research and analysis on those needs, planning accordingly, designing, developing, implementing, testing, and successful delivery of an energetic and fine website. 
            </p>
            <div style={{ marginTop: "30px" }}>
              <h2>How we build relationships?</h2>
              <p>
              We thrive to become and have succeeded in becoming the best website development company in Dubai. When you choose Mozo Tech for your website services, you can be assured that your website will be fully functional and modern. Our developed websites are ongoing, meaning that we provide continuous maintenance and support to ensure that they remain up-to-date. Having a website is a primary requirement for any business, and choosing Mozo Tech will give you a major boost in your online presence. 
              </p>
            </div>
          </div>
          <Form />
          <div></div>
        </div>

        <div
          style={{ alignItems: "center" }}
          className="service__third__row grid  grid-cols-1 md:grid-cols-3 md:gap-20"
        >
          <div className="col-span-2">
            <h2>How relationship bring up your business?</h2>
            <p>
            We even have several packages and provide a helping hand in boosting your branding through affordable programming. Mozo Tech, the top Web Development Company in Dubai, is capable of inspiring you with web development skills and more sophisticated programming. Ourselves make your website an ultimate representation of your business and brand. We prioritize your needs and results in a sustainable responsive design and development. Website development services include web design, web programming, web publishing, and database management.
Some of the tools used by our community of top web developers or programmers in United Arab Emirates, to build efficiently functioning websites are GitHub, Sass, CodePen, AngularJS, TypeScript, Sketch, JQuery, Sublime Text, Bootstrap, Grunt, Chrome DevTools, NPM, Visual Studio Code, etc. Few languages they use to communicate with systems and computers are Python, Java, Ruby, JavaScript, Go, CoffeeScript, PHP, Swift, etc. We explore the three layers of development as the full stack, front end, and back end development.

            </p>
          </div>
          <Image src={web} alt=" web development company Calicut" />
          <div className="service__third__row__img order-first md:order-last"></div>
        </div>

        <div
          style={{ alignItems: "center" }}
          className="service__forth__row grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20"
        >
          <div className="col-span-2">
            <h2>Types of Web developers and services</h2>
            <p>
            We are enriched with specialized developers for combined technologies like Node.js developer (for server-side programming), React.js developers (for interactive user interface), Mern Stack developers (for MongoDB, Express, React, Node), Mean stack developers (for MongoDB, ExpressJS, AngularJS, NodeJS), Full-stack developers (for both client and server-side). Our custom services build your portfolio that leads to your long term success. A distinct website gives a super quality business presence. We also deliver complex websites with easy editing and handling of content. <br />
              Website maintenance means upgrading old versions, updating with
              new plug-ins, and frequent site checking. Engage our web
              developers to build SEO friendly sites and to prove you have
              chosen secure and promising hands among the web development
              services in Dubai and worldwide.

              Website maintenance means upgrading old versions, updating with new plug-ins, and frequent site checking. Engage our web developers to build SEO friendly sites and to prove you have chosen secure and promising hands among the web development services in Dubai and worldwide.
            </p>
          </div>
          <div className="service__third__row__img">
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
      <Proposal type="Website" />

      <Footer />
    </div></>
  );
}
