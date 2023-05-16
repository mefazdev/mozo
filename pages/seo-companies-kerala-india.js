import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import web from "../public/images/service/web.png";
import service from "../public/images/seo.png";
import Form from "../components/serviceform";
import Proposal from "../components/proposal";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Head from "next/head";
import Pixel from "../components/pixel";

export default function SEO() {
  const [data] = useState([
    {
      question: "How does it work?",
      answer:
        "It is a series of steps to follow to make your webpage come on top. This involves an algorithm to rank the pages accordingly and is the best way to promote your business. The more traffic, the more beautiful will be the site.",
    },
    {
      question: "Do we need any software for the same?",
      answer:
        "There are a couple of Softwares and tools that make the attempt successful. ",
    },
    {
      question: "Which are the popular techniques?",
      answer: "SEO is the prime thing to make a strong online presence. ",
    },
    {
      question: "technical optimization.",
      answer: `- Optimization that recognises voice search.
        - Target local listings and landing pages.
        - Building a large number of backlinks. 
        And many more.
        `,
    },
    {
      question: "How long does it take?",
      answer:
        "The first thing after the website development is the Optimization of the website contents. The keyword placement is to be done correctly along with on-page and off-page SEO and may get the result on SERP very soon. If done professionally, in a week.",
    },
    {
      question: "How much do the SEO cost?",
      answer:
        "It depends on the website size, competitivity, current ranking, number of keywords, existing web presence, commitment level etc, but we assure you, we do be worth your payment",
    },
  ]);
  return (
    <>
      {" "}
      <Head>
        <title> Best SEO companies in Calicut, Kerala, Bangalore, India</title>
        <meta name="description" content="" />
        <description>
          Clever Kings are the best SEO company in Kerala, India Bangalore | SEO
          Agency Kerala, India | Search engine optimization | Grow your business
          with the help of SEO.
        </description>
        <meta
          property="og:title"
          content="Best SEO companies in Calicut, Kerala, Bangalore, India"
          key="title"
        />
      </Head>
      <Pixel name="FACEBOOK_PIXEL_1" />
      <div className="service">
        <div className="service__header">
          <Header />
          <h1>SEO</h1>
          <h4></h4>
        </div>

        <div className="service__content container p-3">
          <div className="service__first__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              {/* <h2>What is it?</h2> */}
              <p>
                Digital marketing company Mozo Tech is a reliable and
                experienced digital marketer and SEO expert in United Arab
                Emirates. SEO stands for Search Engine Optimization.
              </p>
              <h2 className="mt-5">Our working process</h2>
              <p>
              Our perfect and planned SEO results in more visitors to your website and thus increases sales, more than anything else; it gives better ranking on any search engine including Google, and puts forward a constant stream of customers. SEO is a tool used for website promotion to improve your rankings and get more customers.
               <br />
               The high-end professional SEO services offered by the best digital marketing agency in Dubai, are daily checking your ranks; auditing the website, on & off-page optimization, mobile and local SEO, website analytics, etc. Mozo Tech, a leader in social media marketing and the best SEO company in Dubai and worldwide, does everything to bring your website to the top of the Google search results and is crucial for getting more traffic to your website. 
               </p>
            </div>
            <div className="service__first__row__img order-first md:order-last">
              <Image src={service} alt="Seo companies in India" />
            </div>
          </div>

          <div className="service__second__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <div></div>
              <div style={{ marginTop: "30px" }}>
                <h2>Methodology, tools and team</h2>
                <p>
                We are the best and intelligent in all-inclusive SEO service and, will permit you, to fiercely compete in the modern specialized niche. Our online marketing company follows SEO best practices that grasp the dedicated audience and inspire their responsiveness with innovating vibes in every aspect. We make your business search engine friendly to maximize your search traffic, quality leads, and generate sales.
                   <br />
                   SEO makes sure your product visibility is high. We analyze the whole structure of your website page by page and assure to cap off those achievement barriers and make certain your product is the champion in the field. The online marketing agency Mozo Tech, guarantee to get the first page positions on the search engine in a short period and give you a detailed report on real instantaneous and also track the results by yourself.

                </p>
              </div>
            </div>
            <div>
              <Form />
            </div>
          </div>

          <div className="service__third__row grid  grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <h2>So why Mozo Tech?</h2>
              <p>
              Although the search engines change their algorithms often, our unique techniques keep up with those changes. Our integrated strategy, research, technical SEO, and constant updates will make you strong and above the rest. A part of our best SEO agency has a bespoke SEO service for enterprise-level, e-commerce, and highly proficient in delivering ROI focused services in our internet marketing company in Dubai. 
               <br />
               Ourselves is successful in revoking penalties and bring your brand on track maintaining your authority and credibility. We are a call away, ring us, and get a proposal.
               
              </p>
            </div>

            <div className="service__third__row__img order-first md:order-last">
              <Image src={web} alt="Seo companies in Calicut" />
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
        <Proposal type={"SEO"} />

        <Footer />
      </div>
    </>
  );
}
