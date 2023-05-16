import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import web from "../public/images/service/web.png";
import service from "../public/images/graphic.png";
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
export default function GraphicDesign() {
  const [data] = useState([
    {
      question: "Will we get ownership of the design?",
      answer:
        "Once you purchase the design and logo from us, you will have an unlimited, exclusive and reproduction license.",
    },
    {
      question: "How will you get us involved in the process?",
      answer:
        "You are involved with us right from the beginning. We start with listing your needs, colour combinations, font styles and ideas. It is you who have to confirm and approve the design provided and submit it to production. You have to communicate clearly and more specific to make the final output reflect your vision. ",
    },
    {
      question: "How is your charge for graphic design services?",
      answer:
        "The charge depends on the variants on the design and we make sure you get it at the best possible rates. You can even get it for cheaper rates on comparing but we promise you cant get such custom designed varieties anywhere else. ",
    },
    {
      question:
        "Why should I have the graphic design done for my business needs?",
      answer:
        "Graphic design is important for the success of any business. It is visual content for brand communication and marketing. A perfect design can highlight its product and create a customer base that leads to profit. ",
    },
  ]);
  return (
    <>  <Head>
    <title> #1 Graphic design company in Kerala | Branding agency in India.</title>
    <meta name="description" content="Clever kings is the leading branding and advertising company in Kerala, India. Providing creative digital solutions for your business.  "/>
  
    <meta property="og:title" content="#1 Graphic design company in Kerala | Branding agency in India." key="title" />
    
  </Head>
    <Pixel name='FACEBOOK_PIXEL_1' />
  
    <div className="service">
      <div className="service__header">
        <Header />
        <h1>GRAPHIC DESIGNING</h1>
        <h4> </h4>
      </div>

      <div className="service__content container p-3">
        <div className="service__first__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <h2>What is it?</h2>
            <p>
              Graphics is the best and fast communication tool to convey
              anything that words can't describe.
            </p>
            <h2 className="pt-3 ">Know us</h2>
            <p>
            Our graphic designing company in Dubai provide graphic designing services that are inspiring, incredible and customized, which will be impossible for your customers to ignore. The graphic designing service provider, Mozo Tech, the best graphic designing company in UAE and across the world, builds eye-catching brand designs that stand out in terms of knowledge, skills and experience. Ourselves is the top reviewed advertising agency in Dubaia with all-time support in attracting customers for your business by creating and executing design ideas on digital media. 
            </p>
          </div>
          <div className="service__first__row__img order-first md:order-last">
            <Image src={service} alt="Branding agency in Kerala" />
          </div>
        </div>

        <div className="service__second__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <div></div>
            <div style={{ marginTop: "30px" }}>
              <h2>See how it works</h2>
              <p>
              We present an exact creative solution for the client requirement by going in-depth to your needs and achieve the best result in return. Brand identification is established by our graphic design agency, through attractive and charming designs, that speak for the brand and bring your thoughts to life. Being the best graphic design company and the emperors of digital designing in United Arab Emirates, we provide a wide range of options to enhance your experience by our intelligent and technically qualified designers who stay up-to-date with the tools and technologies that gives a convenient, reliable, magnificent and cost-efficient graphic output. 
              <br />
              The most reviewed web design company, Mozo Tech, provide innovative creations, that would meet your business requirements and makes you capable to compete with your competitors showcasing professionalism and a punch of positive impression within the customer group. 

              </p>
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>

        <div className="service__third__row grid  grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <h2>We take you to your vision</h2>
            <p>
              Our cool designs evoke the emotions of the customers creating art of visual expression that will remain as the bridge to communicate with them. The creative graphic designing services in Dubai and many other places offer the best digital design including logos, brochures, banners, business cards, social media design, flyers etc. and all those that would help to shape the perception of your company. Feel free to contact us for fascinating ideas.
              
            </p>
          </div>

          <div className="service__third__row__img order-first md:order-last">
            <Image src={web} alt="Branding agency in Kerala" />
          </div>
        </div>

        <div className="service__forth__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <h2></h2>
            <p></p>
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
                          fontFamily: " Poppins, sans-serif",
                          textAlign: "left",
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
                          font: "normal normal normal 14px/19px Poppins",
                          fontFamily: " Poppins, sans-serif",
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
      <Proposal type={"Graphic Design"} />

      <Footer />
    </div>
    </>
  );
}
