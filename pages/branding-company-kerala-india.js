import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import web from "../public/images/service/web.png";
import service from "../public/images/brand.png";
import Form from "../components/serviceform";
import Proposal from "../components/proposal";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Pixel from "../components/pixel";
import Head from "next/head";
export default function Branding() {
  const [data] = useState([
    {
      question: "How much branding helps me in getting ahead?",
      answer:
        "It is your reflection. We help you make it right from the beginning, that is, the logo. We identify the target audience, tone, content and much more which determines the success. A professional brand can give you trust and awareness. ",
    },
    {
      question: "Why should I choose you and not go for a cheaper option?",
      answer:
        "We are a unique and creative team providing strategic thinking and purposeful solution that you can rely upon. We craft a well-designed brand experience and help you achieve high market saturation. A cheaper option will be cheaper as we provide it for the best possible rate and come out in better colours.",
    },
  ]);

  return (
    <>
      {" "}
      <Head>
        <title>Best Branding companies in Calicut, Kerala, India</title>
        <meta
          name="description"
          content="Clever kings is one of the leading branding company or agency in Calicut, Kerala, India | Branding solutions Bangalore."
        />

        <meta
          property="og:title"
          content="Best Branding companies in Calicut, Kerala, India"
          key="title"
        />
      </Head>
      <Pixel name="FACEBOOK_PIXEL_1" />
      <div className="service">
        <div className="service__header">
          <Header />
          <h1>BRANDING</h1>
          <h4></h4>
        </div>

        <div className="service__content container p-3">
          <div
            className="service__first__row grid grid-cols-1 md:grid-cols-3 md:gap-20"
            style={{ alignItems: "center" }}
          >
            <div className="col-span-2" style={{ alignItems: "center" }}>
              <p>
                Beyond a logo, branding for our internet marketing company is
                like creating memories, stories, and relationships with the
                customers. The brand we give you is all you need for the initial
                promotion of your business. Through branding, we tell your
                business story to the people and also internally describe your
                product.{" "}
              </p>
            </div>
            <div className="service__first__row__img order-first md:order-last">
              <Image src={service} alt="leading branding company" />
            </div>
          </div>

          <div className="service__second__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <div>
                <h2>What our brand agency do?</h2>
                <p>
                  Online marketing company, Mozo Tech understands people as a
                  whole and inspires them to think and decide differently,
                  resulting in meaningful action for you. We work with high
                  pleasure adapting new design trends and stays ahead in terms
                  of competition and returns. Ourselves is the best branding
                  agency in Dubai, creating independent solutions, and
                  challenging the boundaries. <br />
                  Our team is full of scholars with creative vision and
                  experience in, embracing mould-breaking designs gives you a
                  one-stop solution. A brand is a chief aspect that matters the
                  most in your business and, we provide that to you in the most
                  beautiful manner.
                </p>
              </div>
            </div>
            <div>
              <Form />
            </div>
          </div>

          <div className="service__third__row grid  grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <h2>Our branding services</h2>
              <p>
                The result of our focused branding in your business is in the
                form of social reach, social media followers, active
                subscribers, sustainable trends, etc. Your relationship with the
                most trusted branding agency Mozo Tech, will give you a way
                towards opportunities, ideas, and strategic recommendations.{" "}
                <br />
                Ourselves bring out your brand to set the difference and define
                positions in the market through brand consulting. We silently
                envoy your brand through our design and manage it throughout to
                perceive the merit of the product. We always lend you a hand
                through brand revamp when you lost your connection with the
                customers and, it helps in reconnecting and repositioning
                without changing the brand identity.
                <br />
                Our designs accurately portray you to your customers and, loyalty is built, within the basket. People are getting connected to those brands that reveal the values and beliefs and, we are damn with those mindsets, collaboration skills, and methodological approaches. Ourselves, the best branding agency in Dubai, do branding services for domestic, international businesses and start-up branding services, with varied interests and excellence.  <br />
                We feature your luck into reality, Come, join us, and plan a
                project.
              </p>
            </div>

            <div className="service__third__row__img order-first md:order-last">
              <Image src={web} alt="leading branding company Calicut, Kerala" />
            </div>
          </div>
          <div className="service__third__row grid  grid-cols-1 md:grid-cols-3 md:gap-20">
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

                    <AccordionDetails
                      style={{ paddingTop: "0", marginTop: "0" }}
                    >
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
        <Proposal type={"Branding"} />

        <Footer />
      </div>
    </>
  );
}
