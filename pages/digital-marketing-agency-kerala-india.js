import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import web from "../public/images/service/web.png";
import service from "../public/images/digi.png";
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
export default function DigitalMarketing() {
  const [data] = useState([
    {
      question: "What is your job as a digital marketer? ",
      answer:
        "We consult with the brands to develop and implement effective strategies to take your business ahead.",
    },
    {
      question: "Is digital marketing and content marketing the same?",
      answer:
        "No. Content marketing is the marketing technique to generate brand awareness traffic, leads and sales. ",
    },
    {
      question: "What is SEO and how is it important?",
      answer:
        "SEO is the process of using offsite and onsite tactics to help get presented by the search engine. It is important in the sense the traffic comes through the search and increases the quantity and quality of the content. ",
    },

    {
      question:
        "What is search engine ranking and how to differentiate my brand?",
      answer:
        "Rankings are based on relevance and authority, also inconsistent. You can differentiate your brand by creating its value. It should resonate emotional level of the customers. ",
    },
  ]);
  return (
    <> <Head>
    <title> Best digital marketing company or agency in Calicut, Kerala, Bangalore</title>
    <meta name="description" content="Find out the best digital marketing company or agency in Calicut, Kerala, Bangalore | Digital marketing agency in India."/>

    <meta property="og:title" content="Best digital marketing company or agency in Calicut, Kerala, Bangalore" key="title" />
    
  </Head>
     <Pixel name='FACEBOOK_PIXEL_1' />
    <div className="service">
      <div className="service__header">
        <Header />
        <h1>DIGITAL MARKETING</h1>
        <h4></h4>
      </div>

      <div className="service__content container p-3">
        <div className="service__first__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <p>
            Mozo Tech is an extension in assisting you in development by the means of Digital marketing that is advertising through digital channels.
            </p>
            <h2 className="pt-3">Our services </h2>
            <p>
            The Main Digital marketing services we look forward to are, Search Engine Optimization (SEO), Social Media Marketing (SMM), Pay Per Click Marketing (PPC), Content Marketing, and many others.
            </p>
          </div>
          <div className="service__first__row__img order-first md:order-last">
            <Image src={service} alt="Digital marketing agency in kerala" />
          </div>
        </div>

        <div className="service__second__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <div>
              <h2>Why us?</h2>
              <p>
              Mozo Tech, the best digital marketing company in Dubaia, serves you with an appropriate strategy concerning your project type and target audience. To name a few objectives of digital marketing are to generate more leads for your business, engage with the target audience, increase brand awareness, etc, and we help you in achieving this at an affordable cost. Our Digital marketing firm gives you a more online presence in your business and we are a reliable expert close to your requirement. We have a ton of happy clients, delivered projects, and done many business's worth. 
              </p>
            </div>
            <div style={{ marginTop: "30px" }}>
              <h2>We offer</h2>
              <p>
              The Internet Marketing Company belonging to us in Dubai, bring your struggles to an end by discarding the old marketing tactics and take you forward targeting the right audience. We know now a day's people spend more time on the internet, we should market our product there on the right track. Our Internet Marketing Agency has professionals in digital marketing who can efficiently market your products to the target audience and take your business to new heights. We have done the tough job of handpicking experienced and trusted professionals to market your product.
                <br />
                Each strategy in Digital Marketing serves different functions based on the purpose on which digital marketing is to be done. Social media management services are to drive awareness and increase followers; PPC is for inert lead generation, SEO is for natural lead generation, and so on.
              </p>
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>

        <div className="service__third__row grid  grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <h2>Understanding Channels</h2>
            <p>
            We are one of the best, trusted digital marketing companies in United Arab Emirates, and safeguard your interests, concerns in every aspect. Be assured that our performance will give you the best result and big success; also we have a wide network to assist you forward. We create customized active content and media, lined up with the consumer mindset. A positive buzz is created in the mind of targeted audiences, higher ROI (return on investment), and an increase in the existing website traffic, which are the output of our digital marketing skills. Interests, surfing behaviour, and demographics are the factors we consider in building audiences.
              <br />
              Be our partner and let's together explore the world of future marketing.
            </p>
          </div>

          <div className="service__third__row__img order-first md:order-last">
            <Image src={web} alt="Digital marketing agency in calicut" />
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
      <Proposal type={"Digital Marketing"} />

      <Footer />
    </div></>
  );
}
