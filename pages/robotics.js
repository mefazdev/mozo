import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import web from "../public/images/service/web.png";
import service from "../public/images/robot.png";
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
export default function Robotics() {
  const [data] = useState([
    {
      question: "Which are the industries that have a robotic application?",
      answer:
        "There are many like automobile, paint, material building, manufacturing, welding, vision inspection, force compliant etc.",
    },
    {
      question: "What are the different types of robotic automation?",
      answer:
        "Material handling and packaging, pick and place, welding, cutting, non-destructive inspection, etc.",
    },
    {
      question: "What are the benefits of robotic automation?",
      answer: `Improves productivity
        Worker safety
        Carry a high-risk injury
        Create more goods at lower costs
        Save money in the long run
        Reduce waste
        Performing tasks with high accuracy
        `,
    },
  ]);
  return (
    <> <Head>
    <title> </title>
    <meta name="description" content=""/>
    <meta property="og:title" content="Blog" key="title" />
    
  </Head>
    <Pixel name='FACEBOOK_PIXEL_1' />
    <div className="service">
      <div className="service__header">
        <Header />
        <h1>ROBOTICS</h1>
        <h4></h4>
      </div>

      <div className="service__content container p-3">
        <div className="service__first__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <h2>What is it?</h2>
            <p>
            Robotics is the mind-storming combination of electronics, computer software, and mechanics.
            </p>
            <h2 className="pt-4">Robotic factory</h2>
            <p>
            As the growth of robotics is daily, Mozo Tech, an IT company in Dubai, United Arab Emirates, bears the hallmark in robotics development. Our company provides reproducibility in the advancement of theories and applying them practically. We, a top Robotic process automation development company in UAE and worldwide, are filled with researchers who are established with new talents. 
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
              <h2>What you need to know?</h2>
              <p>
              Robotics is our future. Robots are to replace humans as manipulators. The top reviewed software company here includes system design and give way for its economic development. This automation leads to a consolidated environment between people and machines. The applications of robotics are too wide.
              </p>
              <h2 className="pt-4">Team up with the right</h2>
              <p>
              Mozo Tech, which is also a top reviewed software development company in Dubai, equally help manufacturers as well as users. Experts in engineering disciplines and specialized ones in robotics can only move forward in this field. We are one of such experts. 
              </p>
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>

        <div className="service__third__row grid  grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <h2>Your development partner</h2>
            <p>
            The developed application must be continually upgraded and have to keep abreast of rapid developments in the field. We effectively communicate ideas and skills. Mozo Techwill be a participating employer with you in every step. We have made our position in robotics management and automation.  <br />
            We are well equipped with a team for designing, maintaining, evaluating, and creating the prototype. Experience is the keen and foremost requirement in the field of robotics. Our robotic process automation company provides a full-term covering policy on the investigation and significant solutions to client's demands.
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
      <Proposal type={"Robotics"} />

      <Footer />
    </div></>
  );
}
