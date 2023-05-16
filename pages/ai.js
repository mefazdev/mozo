import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import web from "../public/images/service/web.png";
import service from "../public/images/ai.png";
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
export default function AI() {
  const [data] = useState([
    {
      question: "Why go for artificial intelligence?",
      answer:
        "Through Artificial Intelligence we can effectively automate robots that seek human intelligence. This technology has been using now in almost all industries. ",
    },
    {
      question: "What are its benefits?",
      answer:
        "Better life,  Efficiently carry out dangerous tasks, Would automate vehicles and A pool for business professionals ",
    },
    {
      question: "What are its contributions to society?",
      answer:
        "The majority, we see today in our society is powered by Artificial Intelligence. Everything from driving a car to when you send a file on the cloud. ",
    },
    {
      question: "Are there any limitations to artificial intelligence?",
      answer:
        "We claim the AI products to be significantly reducing repetitive, time-saving and appropriate to do dangerous tasks. As it relies on data it could result in incomplete, irrelevant, outdated and inaccurate outputs.",
    },
  ]);
  return (
    <>
      <Head>
        <title>Blog </title>
        <meta property="og:title" content="Blog" key="title" />
      </Head>
      <Pixel name="FACEBOOK_PIXEL_1" />
      <div className="service">
        <div className="service__header">
          <Header />
          <h1>ARTIFICIAL INTELLIGENCE</h1>
          <h4></h4>
        </div>

        <div className="service__content container p-3">
          <div
            style={{ alignItems: "center" }}
            className="service__first__row grid grid-cols-1 md:grid-cols-3 md:gap-20"
          >
            <div className="col-span-2">
              <h2>What is it?</h2>
              <p>
                As artificial intelligence can change the future, it is a bonus
                to the exponential growth in automation.
              </p>
            </div>
            <div className="service__first__row__img order-first md:order-last">
              <Image src={service} />
            </div>
          </div>

          <div className="service__second__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <h2 className="pt-3">How our AI solutions change your world?</h2>
              <p>
                We are a digital marketing company and AI consultancy, trained
                in, cutting-edge AI and transforming digital and e-commerce
                business in a post-covid world. The AI developers here are
                masters in machine learning and deeply learned NLP skills. The
                Artificial intelligence development company in UAE. Mozo Tech,
                has an environment that integrates real-world data sets and
                business problems in the digital business context. <br />
                We understand the impact of the latest emerging trends such as
                chatbots, image and speech recognition, and intelligent
                automation. As data is the valuable asset one owns, and its
                value lies in the way it is adopted, extracting, and reusing to
                its maximum extent to automate data transformation and, machine
                learning processes and tasks at zero differential cost. Data is
                submitted efficiently and accurately such that, you get an
                understanding of the predictions made on the configuration
                model. <br />
                The clients are always satisfied and confident, as the decisions
                are focused on interpreted data, trust, and accuracy.
              </p>
            </div>
            <Form />
          </div>

          <div className="service__third__row grid  grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <h2>Our solutions and strategies</h2>
              <p>
                The digital marketing agency owned by us works well and won't
                disturb your existing investments, and focus mainly on the
                analytical data. Our online marketing agency competes with tech
                giants to create everything your enterprise needs and, develop a
                range of AI solutions that learn and behave exactly like a human
                being. Mozo Tech, an Internet marketing agency in Dubai, analyze
                the requirements and deliver the project; by moving via
                designing, implementing, deploying, and supporting.
                <br />
                The AI solution provider in us, can solve any complex tasks and
                have done many, related to human decision making. We provide
                artificial intelligence consulting services across the world in
                Deep Learning, Machine Learning, Speech Recognition, Natural
                Language Processing, Image Processing, Object Detection,
                Decision Management, Knowledge Virtualisation, Robotic Process
                Automation, Natural Language Generation, Digital Virtual Agents,
                Artificial Neural Networks(ANN), Convolutional Neural
                Networks(CNN), Deep Neural Networks(DNN) or Feed Forward Neural
                Networks(FFNNS), etc. It is a talent to make you reconciled to
                our complex design algorithms to get the maximum return on
                investment and, develop advanced artificial intelligence
                applications for your business accreditation.
                <br />
                Our AI development services and solutions lead you to a way with
                faster decisions, reduce error, cognitive assistance, low cost,
                and avoid risks. Moreover, it's safe, secure, robust, and
                custom. Get in touch with us to know more.
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
        <Proposal type={"Artificial Intelligence"} />

        <Footer />
      </div>
    </>
  );
}
