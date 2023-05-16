import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import web from "../public/images/service/web.png";
import service from "../public/images/research.png";
import Form from "../components/serviceform";
import Proposal from "../components/proposal";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Pixel from '../components/pixel'
import Head from 'next/head'
export default function Research() {
  const [data] = useState([
    {
      question: "Why Research and development are to be performed?",
      answer:
        "To stay relevant and hold up in this competitive market, we have to try constantly to develop new or updated designs or processes. Research and development campaign identifies the cost-effective methods to increase the profit. ",
    },
    {
      question:
        "What is the estimated cost for research and development services?",
      answer: `We provide our clients with the most accurate possible estimate, by identifying and possible estimate, by identifying and quantifying the key sources. Also, it won't be just making up for cheap amounts, but worth appropriate for your money.`,
    },
  ]);
  return (
    <>  <Head>
    <title> </title>
    <meta name="description" content=""/>
    <meta property="og:title" content="Blog" key="title" />
    
  </Head>
    <Pixel name='FACEBOOK_PIXEL_1' />
  
    <div className="service">
      <div className="service__header">
        <Header />
        <h1>RESEARCH AND DEVELOPMENT</h1>
        <h4></h4>
      </div>

      <div className="service__content container p-3">
        <div className="service__first__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <h2>What is it?</h2>
            <p>
            Research and development is the establishment of web technology to innovate products or services.
            </p>
            <h2 className="pt-4">Why choose us? </h2>
            <p>
            We are a unique retailed software service providing company in Dubai. In the business field, Mozo Tech help to make your steps towards creating new products, providing services also renovate existing ones to make them competitive and profitable. Our marketing agencies have a heavy investment in this area so that we can present the next big thing. 
            </p>
          </div>
          <div className="service__first__row__img order-first md:order-last">
            <Image src={service} />
          </div>
        </div>

        <div className="service__second__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <div></div>
            <div style={{ marginTop: "30px" }}>
              <h2>What make us unique?</h2>
              <p>
              Mozo Tech, a research and development company, assure you that we can bring your project into practical and feasible terms. Our online marketing desks throughout Dubaia enclose all research and development activities in our organization towards innovation. Even though this involves risk, experimentation, and innovation lead to success in the field. 
              </p>
              <h2 className="pt-4">Our procedure</h2>
              <p>
              Mozo Tech reviews most among the IT companies in
                Kerala, as we create new manners in the field of research and
                development. It is a flow-through idea -{`>`} theory -{`>`} research-{`>`}
                explore -{`>`} design -{`>`} development. Our IT company in Calicut
                carries out scientific research to perform research and
                development. The foundation for developing new products or
                projects is in the deep knowledge of the market and user needs.
      </p>
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>

        <div className="service__third__row grid  grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            {/* <h2>Our procedure</h2>
                <p> Cleverkings Pvt. Ltd. reviews most among the IT companies in Kerala, as we create new manners in the field of research and development. It is a flow-through idea -> theory -> research-> explore-> design -> development. Our IT company in Calicut carries out scientific research to perform research and development. The foundation for developing new products or projects is in the deep knowledge of the market and user needs.</p> */}
            <h2>How we can help?</h2>
            <p>
            The key part of research and development is the uninterrupted evaluation of products or services and the utilization of new technology. Our R&D technology company in Dubai and worldwide explore this new world for you. As this step is complex we help you to face this challenge dramatically. Our team innovates through your business or projects and you achieve your hard goal. Better research and development gives steep growth in the business. We, Mozo Tech, your partner, provide you with research and development material that you, in turn, can use as your business.
            </p>
          </div>

          <div className="service__third__row__img order-first md:order-last">
            <Image src={web} />
          </div>
        </div>

        <div className="service__forth__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2"></div>
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
      <Proposal type={"Research and development"} />

      <Footer />
    </div></>
  );
}
