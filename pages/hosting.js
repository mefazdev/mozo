import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import web from "../public/images/service/web.png";
import service from "../public/images/host.png";
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
export default function Hosting() {
  const [data] = useState([
    {
      question: "What is web hosting?",
      answer:
        "A web hosting hosts your website by placing it on a computer that is specifically designed for hosting. Your website resides on a web servers facility and you get it on your computer. ",
    },
    {
      question: "How about the price?",
      answer:
        "Price consideration is more for shared hosting than the independent one. You can choose the premium hosting plans which has comparatively high bandwidth and unlimited space and save costs by sharing the same.  ",
    },
    {
      question: "What is the importance of hosting?",
      answer:
        "For anything to function on the web, we need a domain and has to be stored either by, installing a local server or have to deal with hosting service providers. ",
    },
    {
      question: "If so which one to choose sharing or dedicated?",
      answer:
        "The choice is up to you. In a local server, a team has to be dedicated to work and see the space consumption to avoid storage issues. In the web hosting service providers you can sit back and relax, the entire responsibility is theirs. ",
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
        <h1>HOSTING</h1>
        <h4></h4>
      </div>

      <div className="service__content container p-3">
        <div
          className="service__first__row grid grid-cols-1 md:grid-cols-3 md:gap-20"
          style={{ alignItems: "center" }}
        >
          <div className="col-span-2">
            {/* <h2>What is it?</h2> */}
            <p>
            Mozo Tech stands up as the best domain service provider company in UAE and many other places in the world, with the most powerful and reliable hosting services; shared, cloud, dedicated and VPS, by being a good companion in your online business journey with proactive and excellent customer support. 

            </p>
          </div>
          <div className="service__first__row__img order-first md:order-last">
            <Image src={service} />
          </div>
        </div>

        <div className="service__second__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <div>
              <h2>Hosting plans to meet every need</h2>
              <p>
              We are the best web hosting service provider with flexible hosting and domain options in the market, suitable for small and big enterprises at an affordable price. Our IT company in Dubai, host servers ensuring maximum uptime and availability and come with an intuitive control panel to furnish your website and this made us the leader in the hosting industry. Ourselves is a top reviewed software company providing an innovative and friendly web hosting company offering a wide spectrum of best-in-class web hosting services fitting all your requirements. 

              </p>
            </div>
            <div style={{ marginTop: "30px" }}>
              <h2>Try risk free</h2>
              <p>
               The hosting task by the best IT company Mozo Tech in Dubai, United Arab Emirates, is compatible and available on all platforms also scalable and measurable with which you can power your business, unlocking the world of unlimited possibilities. Hosting services here at the best digital marketing agency at Dubai, are equipped with minimal downtime, increased flexibility and optimized performance. We are the top web development company who make our highly experienced staff work hard to keep your resource safe and secure along with which you will be provided with an SSL certificate, domain registration, unlimited bandwidth, uptime guarantee, daily backups and CDN, also can experience the ability to perform tasks quickly. Another important aspect of our hosting is the malware removal tool to protect from any malware or threats.
               <br />
               Mainly speaking, our web hosting services in UAE and all other places in the globe offer excellent customer support and provide the best service in the market today. We swiftly align between the client needs and features and give you a positive response with a solution.
              </p>
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>

        <div className="service__third__row grid  grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2"></div>

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
      <Proposal type={"Hosting"} />

      <Footer />
    </div>
    </>
  );
}
