import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import web from "../public/images/service/web.png";
import service from "../public/images/business.png";
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
export default function business() {
  const [data] = useState([
    {
      question: "How will my decision to employ you will benefit me?",
      answer:
        "We would be working independently in your company, taking part in the meets, dealing with the banking related issues and deals the potential clients. We also go through with the management staff and their workforce and also the recruiting section. Our intervention or actions won't disrupt your business operations.",
    },
    {
      question:
        "What about the confidentiality of the associated works you deal with?",
      answer:
        " You can trust us. It is against our ethics to reveal your business to anyone. We have been working in and on keeping up our ethics and client confidentiality. ",
    },
    {
      question: "How much will we have to get involved with you?",
      answer:
        "We, or our consultant, may need your help or assistance, concerning the implementation of the solutions to the identified problems. To implement the solutions completely, partnership in work is necessary. ",
    },
    {
      question: "What kind of business do you provide your services to?",
      answer:
        "We lend our services to small, medium and large kinds of businesses.",
    },
  ]);
  return (
    <>
      {" "}
      <Head>
        <title></title>
        <meta name="description" content="" />
        <meta property="og:title" content="Blog" key="title" />
      </Head>
      <Pixel name="FACEBOOK_PIXEL_1" />
      <div className="service">
        <div className="service__header">
          <Header />
          <h1>BUSINESS CONSULTANCY</h1>
          <h4></h4>
        </div>

        <div className="service__content container p-3">
          <div className="service__first__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <p>
                Mozo Tech points to all-round business consulting for maximising
                the Return On Investment providing end-to-end development. Our
                company specializes in providing high-quality software solutions
                for a wide range of industries, including start-ups,
                enterprises, and businesses in healthcare, banking,
                manufacturing, retail, professional services, oil and gas,
                telecommunications, logistics, transportation, insurance,
                marketing, advertising, public services, and many others. We
                understand that each industry has unique requirements and
                challenges, and we tailor our solutions to meet the specific
                needs of our clients. Our team of experienced developers,
                designers, and project managers work closely with our clients to
                ensure that our software solutions are effective, efficient, and
                user-friendly. Whether you need a custom-built application, a
                software product tailored to your business needs, or support for
                an existing software solution, we are committed to delivering
                high-quality results that meet your expectations. Our focus on
                quality, reliability, and innovation ensures that our solutions
                provide long-lasting value for our clients. With our deep
                expertise across a broad range of industries, we are able to
                offer tailored solutions that drive business growth and improve
                customer satisfaction. We pride ourselves on our commitment to
                excellence, and we work tirelessly to ensure that our clients
                receive the best possible service and support. . Our success is
                our customers, through an incremental approach focusing on core
                business processes by helping in identifying and solving every
                aspect related to your business development. Our expert
                consultancy services manage the technical challenges working
                with evolving customer expectations and emerging technologies.
                Mozo Tech is here to help you navigate the next challenges with
                the new business strategies that adapt to the market dynamics
                minimizing disruptions in your operations. We gain extreme
                knowledge on issues and opportunities by navigating deep into
                your business and develop world-class inspiring capabilities
                keeping you ahead in the competition.
              </p>
            </div>
            <div className="service__first__row__img order-first md:order-last">
              <Image src={service} />
            </div>
          </div>

          <div className="service__second__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <div>
                <h2 className="pt-5">
                  Information technology business strategy and management
                  consulting{" "}
                </h2>
                <p>
                Strategy consultation is the most critical forms of business consulting, we bring out a solution for this by being an advisor to your company helping the organization to create and follow a long-term strategic plan. Mozo Tech guides you to achieve the long-term goals creating a path your company can follow to reach the heights. We ensure that your projects fit in alignment with all the IT infrastructure components that stay in line with your vision. We prototype your ideas and mould them into your so-called business.
                 <br />
                 We are the specialist in corporate consulting to assist you in the internal workings of the business. Our mannerism includes operating business hierarchy effectively, streaming towards the positive alteration of the business operations. We suggest you the best business structure to adopt helping you in optimizing your organisation carrying out the workflow within the business. We help you deal with intradepartmental or interdepartmental issues and more...

                  <br />
                  We leverage your IT infrastructure and makes your business
                  better by optimizing the management methodologies thus
                  improving efficiency.
                </p>
              </div>
            </div>
            <div>
              <Form />
            </div>
          </div>

          <div className="service__third__row grid  grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <h2>Mentorship services for innovative start-ups and SME </h2>
              <p>
                Mozo Tech acts as a neutral third party with a perspective to spot the challenges that highly benefit your company. We focus on your changes and growth that make your business run more efficiently. Our new business skills do a solid understanding of our specialized business strategies, trends and methodologies saving money, time and stress. We will be a bigger up-front investment prompting employees to reach your goal with perfect guidance and motivation.
                 <br />
                 Finance is the basics of any business. Mozo Tech helps new businesses set up their accounting, develop business process and hire talented staffs and help in finding a solution for finance or reputation. We put forward a positive impact on your business bringing in information, advice, and effective solutions using our unique skill set and specialized experience. The core internal and external business processes are redesigned to a fresh and objective oriented perspective.  
 

              </p>
            </div>
            <div className="service__third__row__img order-first md:order-last">
              <Image src={web} />
            </div>
          </div>

          <div className="service__third__row grid  grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <h2>Business consultancy services for startup and SME</h2>
              <p>
              Mozo Tech helps new companies overcome challenges and grow. We provide management consulting to improve your performance and efficiency by analyzing and creating solutions. Our procedure is to identify the problems and initiate a change for reviving the organization. It takes time to learn your business goal as the first phase uncovering your company mission and enter on to the second evaluation phase of identification of current and foreseeable problems. The solution to the evaluation phase will result in boosting efficiency and profit. The reliable business is transformed into the digital world to build in a smarter journey.

              </p>
            </div>

            <div className="col-span-2">
              <h2>Detailed project report preparation</h2>
              <p>
                 Establishment of a new business goes through a process of project report making, a road map to the successful venture. It is a thorough discussion of warnings and problems including the background procedures and profiles also the long term and short term objectives. We do prepare an assessment on marketability, technical feasibility, financing resulting in a relevant business plan recognizing fundamental start-up plans. Market analytic details are also included like the type, description, influencers, specific for which market, clients, advantages, consumption patterns, supply location, production prospects, exports and imports, price structure and many more. 
                 <br />
                 Financial expenditure is analysed and mentioned through investment expenditure on the methods of investment based on the anticipated productivity. The money flow is evaluated by the investment value and a financial ranking is attained. Then comes, the marketing assessment depending on the product, place, price and promotion. Next is the operational plan based on the business models and the production of goods and services; followed by financial plan, management structure and the business structure. 
                  <br />
                Your strengths, weaknesses, opportunities and threats in future
                will be studied and documented in detail and attach you to the
                profits and loss.
              </p>
            </div>
            <div className="service__third__row__img pt-7">
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
        <Proposal type={"Business Consultancy"} />

        <Footer />
      </div>
    </>
  );
}
