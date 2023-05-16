import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import web from "../public/images/service/web.png";
import service from "../public/images/email.png";
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
export default function EmailMarketing() {
  const [data] = useState([
    {
      question:
        "Why email marketing is important and how can I know it is right for my business?",
      answer:
        "An email marketing effort would give your prospects and customers what they want. Email marketing makes it easier to measure attribution and ROI.",
    },
    {
      question: "How will I get more emails for this purpose?",
      answer:
        "An effective acquisition method is to be opted to get more emails. The first step is to provide the visitor, with downloadable content and then build a landing page to promote the content and finally create a framework to drive more visitors to the landing page. ",
    },
    {
      question: "How can I know the email marketing is successful or not?",
      answer:
        "Based on your unique goals and on determining the best indicator of success for each campaign. ",
    },
    {
      question: "What is the cost of email marketing?",
      answer:
        "We assign only a typically fair price and you get the best service worth for your payment. ",
    },
  ]);
  return (
    <>
      {" "}
      <Head>
        <title>Best reliable email marketing company in Kerala, India </title>
        <meta
          name="description"
          content="Best reliable email marketing company in Kerala, India"
        />
        <meta
          property="og:title"
          content="Best reliable email marketing company in Kerala, India"
          key="title"
        />
      </Head>
      <Pixel name="FACEBOOK_PIXEL_1" />
      <div className="service">
        <div className="service__header">
          <Header />
          <h1>EMAIL MARKETING</h1>
          <h4></h4>
        </div>

        <div className="service__content container p-3">
          <div className="service__first__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <h2>What is it?</h2>
              <p>
                Bulk E-Mail marketing is the easiest method to communicate with
                customers. This is a marketing platform for businesses and
                marketers, to send marketing messages and triggered mail. An
                email marketing system is a combination of workspace email,
                workspace for online storage, workspace calendar, and many more.
              </p>
            </div>
            <div className="service__first__row__img order-first md:order-last">
              <Image
                src={service}
                alt="best reliable email marketing service"
              />
            </div>
          </div>

          <div className="service__second__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <div>
                <h2>Powerful features to do more</h2>
                <p>
                  United Arab Emirates's best digital marketing company Mozo
                  Tech; also provide the best email marketing services in Dubai
                  and many other places with the raise brand awareness on
                  clients across the globe, and, integrate e-marketing to
                  generate leads and connecting them to the business. As
                  demanded workspace is now online, this is the most efficient
                  and successful method of all. But it is most important to do
                  the marketing in the right way and we the best digital
                  marketing agency is here to do it for you. <br />
                  Our e-marketing strategies are always robust, sensitive, and
                  ultimately successful. In the stream of email marketing, we
                  should be regular and active with client communication. Top
                  digital marketing company Mozo Techunderstands and is so kind
                  to your business any time and offers you information,
                  guidance, and services that are effectively useful for you and
                  your business. We have flexible B2B data that fit any sales or
                  marketing requirements.
                </p>
              </div>
              <div style={{ marginTop: "30px" }}></div>
            </div>
            <div>
              <Form />
            </div>
          </div>

          <div className="service__third__row grid  grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <h2>Integration for your success</h2>
              <p>
                Our internet marketing company in Dubai has a powerful
                e-marketing platform so that sending, delivering, tracking
                campaign results uses leading-edge technology in the market that
                matches and beats your expectations. We have executives and
                decision-makers who are, highly focused on targeted data sets.
                The internet marketing agency here has high knowledge, creative
                skills, experience, and help to tune the content that gives you
                the highest engagements.
                <br />
                To provide you with success, we combine e-marketing with social
                media marketing and internet marketing. We are the perfect
                solution to your bulk email marketing needs. Through email
                marketing, we attain a steady flow in the traffic and instant
                building of your brand.
              </p>
            </div>
            <div className="service__third__row__img order-first md:order-last">
              <Image src={web} alt=" reliable email marketing service India" />
            </div>
          </div>

          <div className="service__forth__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <h2>Who we are?</h2>
              <p>
                Ours is the best and cost-effective e-mail marketing. The prime
                concern for us in choosing email solutions are reliability and
                deliverability. We end up providing you with a full-circle
                report containing the details, how many of the customers clicked
                your link in the email, how many subscribers, how many got
                bounced, how many read the email, etc. Our online marketing
                agency strives to attain maximum delivery in minimum time and;
                does have IP and anti-spamming techniques. We create campaigns
                and send personalized emails at a low cost. Email marketing
                services of Mozo Techis user-friendly and does not have any
                complications.
              </p>
              <br />
              Do grab the features with recent technology at an affordable price
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
        <Proposal type={"Email Marketing"} />

        <Footer />
      </div>
    </>
  );
}
