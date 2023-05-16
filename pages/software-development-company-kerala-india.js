import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import web from "../public/images/service/web.png";
import service from "../public/images/soft.png";
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
export default function software() {
  const [data] = useState([
    {
      question:
        "What are the possible services you can provide associated with the software Development?",
      answer:
        "We do everything including, defining the business goals, values, features and priorities. Our team creates user personas, mock-ups, stories, project status and estimation. Server-side architecture, front end, back end, graphic and UX design and back-office consoles are activities we carry out as part of project development. ",
    },
    {
      question: "Which is the better option, web app or mobile app?",
      answer:
        "The mobile app and web app both have their benefits and flaws. Progressive web apps are the best solution. ",
    },
    {
      question:
        "How can I communicate with you without knowing the technical part?",
      answer:
        "Don’t worry about not being an expert in the software field. We are here and will guide you and explain in detail every process. ",
    },
    {
      question: "What is the guarantee for product quality?",
      answer:
        "To give you what you have paid for, we regularly check and take your feedback to make it efficient",
    },
  ]);
  return (
    <> <Head>
    <title> Top best Custom Software Development Companies in Kerala, Bangalore, India</title>
    <meta name="description" content="Leading top best Custom Software Development Companies in calicut Kerala, Bangalore | Best software development companies India."/>
    
    <meta property="og:title" content="Top best Custom Software Development Companies in Kerala, Bangalore, India" key="title" />
    
  </Head>
    <Pixel name='FACEBOOK_PIXEL_1' />
    <div className="service">
      <div className="service__header">
        <Header />
        <h1>SOFTWARE DEVELOPMENT</h1>
        <h4></h4>
      </div>

      <div className="service__content container p-3">
        <div className="service__first__row  grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
      
            <p className="align-baseline ">
            Mozo Tech, the software development company in Dubai and worldwide, design, develop and deploy solutions to your software ideas. 
            </p>
            <h2 className="mt-5">Right choice you look for</h2>
            <p>
            The first and foremost challenge on the client's side is to choose the right software company with a top review like us, for your project requirements. Our team uses a lively development methodology to develop the software by sticking to the best standards and using emerging technologies. Mozo Tech, a software development company in Dubai, United Arab Emirates, deliver software, do software testing, and carry forward software services and maintenance. 
            </p>
          </div>
          <div className="service__first__row__img order-first md:order-last">
            <Image src={service} alt="Software development company in Calicut" />
          </div>
        </div>

        <div className="service__second__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <div></div>
            <div style={{ marginTop: "30px" }}>
              <h2>Our development ranges</h2>
              <p>
              We have proven ourselves in the field of software implementation and extended our services in almost all sectors like Healthcare, Retail, and E-commerce, Travel, and Hospitality, Logistics, startups, Enterprise software developments, etc. First of all, we make a detailed understanding of your ideas, targets, and users. Good understanding makes problem-solving easy. According to the provided information, we offer the plan which includes scope, timeline, workflow, and development cost.
              </p>
              <h2>Why Mozo Tech?</h2>
              <p>
              According to the provided information, we offer the plan which includes scope, timeline, workflow, and development cost. Your ideas are then converted into software that is reliable, robust, and secure. We can also help you in the digital transformation of your business through outsourcing software development. Our company has a large team of top developers equipped with the right skills to ensure your project requirements and to deliver custom software successfully.  
              </p>
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>

        <div className="service__third__row grid  grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <h2>Our highlights</h2>
            <p>
            The work we do involve planning, analysis, system design, coding and development, testing, deployment, support, and maintenance. Mozo Techis the experienced, expertise, and best software development agency in Dubai, United Arab Emirates. Mozo Techis a reputed software development company that is consistent and committed to your work and promise to bring out exceptional user experience to your work.
            </p>
          </div>

          <div className="service__third__row__img order-first md:order-last">
            <Image src={web} alt="Software development company in Kerala" />
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
      <Proposal type={"Software"} />

      <Footer />
    </div></>
  );
}
