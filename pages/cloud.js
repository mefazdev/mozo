import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import web from "../public/images/service/web.png";
import service from "../public/images/cloud.png";
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
export default function CloudComputing() {
  const [data] = useState([
    {
      question: "What is cloud computing?",
      answer:
        "It is a convenient and on-demand network to access a pool of shared computing resources that are provisioned and released with minimal management effort. There are three types public, private and hybrid. ",
    },
    {
      question:
        "What are the security measures for cloud computing applications?",
      answer:
        "The administrators are responsible for the permissions on the subnets. Encryption methodologies are adopted to avoid breaches and IAM roles are created for those who have special privileges. Cloud security is ensured through Threat detection, fraud prevention, cyber security, network monitoring and many more.",
    },
    {
      question: "How is it beneficial for us?",
      answer: `Business continuity, Cost efficiency, Better collaboration, Scalability, Performance.
      Software updation,
      Environment friendly,
      Software integration
      `,
    },
    {
      question: "How can I know it is right for my business or not?",
      answer: `1.	First, you have to check it from strategic and perspective form. 
      2.	Evaluate the current setup. 
      3.	StalkStalk an estimated time frame. 
      4.	Assess the type of cloud. 
      5.	Strategise the cloud migration.
      `,
    },
    {
      question: "What kind of preparation can reduce the cost?",
      answer:
        "Good preparation and heavy emphasis on management plans can reduce the cost. Migrating to the hybrid cloud is to be the first healthy step in all aspects. ",
    },
  ]);
  return (
    <>
      {" "}
      <Head>
        <title> </title>
        <meta name="description" content="" />
        <meta property="og:title" content="Blog" key="title" />
      </Head>
      <Pixel name="FACEBOOK_PIXEL_1" />
      <div className="service">
        <div className="service__header">
          <Header />
          <h1>CLOUD COMPUTING</h1>
          <h4></h4>
        </div>

        <div className="service__content container p-3">
          <div
            style={{ alignItems: "center" }}
            className="service__first__row grid grid-cols-1 md:grid-cols-3 md:gap-20"
          >
            <div className="col-span-2">
              <h2>We own</h2>
              <p>
                Mozo Tech is the most reviewed IT company having a constantly
                evolving cloud infrastructure with empowering security and hold
                a comprehensive cloud-native security platform.
              </p>
            </div>
            <div className="service__first__row__img order-first md:order-last">
              <Image src={service} />
            </div>
          </div>

          <div className="service__second__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <h2 className="pt-5">The experience you look for</h2>
              <p>
                We craft out the best cloud computing services in Dubai, for
                characteristic infrastructure, database, computation, and
                storage requirements. Our top reviewed software company is a
                credible solution for managed service providers(MSP) and
                provides an easy-to-use report. It is a talent here to run every
                cloud database in one place and make it an easy job for system
                administrators.
                <br />
                Cloud software solutions from the best IT company in Dubai,
                United Arab Emirates, simplifies the process, of sharing,
                storing, accessing, and protecting data. An insight is provided
                by us on every single cloud database, mitigating the risk of the
                data breach and cloud security operations, including
                safeguarding sensitive data, fight against cybercrime, ensuring
                compliance, on all database elements through asset discovery and
                security protocols. Our IT company in Dubai, alerts, and reports
                internal and external threats, also identifying and tracking
                anomalous activities. p
              </p>
            </div>

            <Form />
          </div>

          <div className="service__third__row grid  grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <h2>How to accelerate your outcome?</h2>
              <p>
                The cloud development company belonging to us has cloud VPS with
                three varieties like general, web-hosted, managed which gives
                increased flexibility and performance with a clean and
                effortless interface.
              </p>
              <h2>Cloud Computing Company</h2>
              <p>
                We are ready to be fully scalable to grow along with you and
                have a deployed system to work onto, achieve your goals, and
                deliver an instant VPS server for your personal needs that
                possess redundant infrastructure. Mozo Tech, the best cloud
                development company in Dubai, featured dedicated networks that
                perform with premium and clustered components to attain enlarged
                bandwidth. <br />
                Our cloud computing services, cloud-integrated services, and
                cloud computing solutions help you picking up control over your
                investments through diverse cloud-based applications. We
                establish systems, to locate the data to be communicated or
                retrieved; shaping the workflow in any company also make it
                drive toward resultant cloud applications. A full pack of cloud
                computing solutions therein focus on enterprise and works
                harness in an optimized manner.
              </p>
            </div>
            <div className="service__third__row__img order-first md:order-last">
              <Image src={web} />
            </div>
          </div>

          <div className="service__forth__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <h2>What is new in us?</h2>
              <p>
                With our profound developers in integrating cloud services,
                everything is processed in an impeccable way keeping up data
                storage and accessibility standards. Most trusted cloud
                development service providers here implement sophisticated AWS
                solutions and deliver in the right way sticking to the ethics
                and is employed as loaded. Businesses are transformed into cloud
                standards with migration services to meet the business growth
                and capture the lead position. <br />
                Our cloud computing company collaborate it in an enhanced and
                easy form on reduced cost and do safe and fast delivery. Ready
                to get started?
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
        <Proposal type={"Cloud Computing"} />

        <Footer />
      </div>
    </>
  );
}
