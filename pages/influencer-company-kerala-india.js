import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import web from "../public/images/service/web.png";
import service from "../public/images/influencer.png";
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
export default function Influencer() {
  const [data] = useState([
    {
      question: "In what aspect we should go for influencer marketing?",
      answer:
        "Influencer marketing is different for each brand. We support brands and companies in creating and managing and find the best influencers. We also create concepts and contents and track the results favourable to you. Influencer marketing helps your brand and company sell more products. ",
    },
    {
      question: "What is the cost of influencer marketing at your firm?",
      answer:
        "Each is custom-tailored in terms of client needs. The cost of influencer marketing depends on the goals, reach, quantity and quality of the influencer content, and also based on the number of followers where the campaign runs and much more. Just ping us and get the best possible rates for you. ",
    },
    {
      question: "What is the basis for the influencers to create the content?",
      answer:
        "We take time and understand your goals and ensure all the pertinent details are collected and are aligned on the campaign targets. We provide the influencers with all explicit instructions and guidelines on what type of content they have to create. They know which resonates best with their audiences. They do their job, we just give the necessary instructions.  ",
    },
  ]);
  return (
    <>  <Head>
    <title> Influencer marketing company in Calicut, Kerala, India</title>
    <meta name="description" content="Influencer marketing company in Calicut, Kerala, India | Influencer marketing agency | Influencer marketing services India"/>
   <meta property="og:title" content="Influencer marketing company in Calicut, Kerala, India" key="title" />
    
  </Head>
    <Pixel name='FACEBOOK_PIXEL_1' />
    <div className="service">
      <div className="service__header">
        <Header />
        <h1>INFLUENCER MARKETING</h1>
        <h4></h4>
      </div>

      <div className="service__content container p-3">
        <div className="service__first__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <h2>Introducing ourselves</h2>
            <p>
            As we lead the new-normal life in this pandemic period, it needs a new way of thinking. The internet marketing company in Dubai Mozo Tech brings out the data insights and technology into the creative process to build a digital brand. Ourselves is the pioneer in influencer marketing with the best distribution channels and your brand gets the highest engagements, reaches large audiences, etc. Audiences are swayed towards you when your future comes to our online marketing agency and take you along with the changing world.

            </p>
          </div>
          <div className="service__first__row__img order-first md:order-last">
            <Image src={service} alt="Influencer marketing company in Calicut, Kerala, India" />
          </div>
        </div>

        <div className="service__second__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <div>
              <h2>Starts with you</h2>
              <p>
        Ourselves being the best influencer marketing company in UAE, the key towards the audience is to perceive and imagine through the clutter and come up with a unique way, to implement world-class technologies to make your brand a reality. We are the top digital marketing company, to put forward experienced works and those with a flame of originality takes your brand to the audience in an effective way in all sense. It's our nature, to deliver it flawlessly by being relevant to the point and are creative insiders working on a competitive spirit.

              </p>
            </div>
            <div style={{ marginTop: "30px" }}>
              <h2>Scale your brand</h2>
              <p>
                Best digital marketing company here in Dubai, lead the way using a data-driven approach by understanding your needs, in turn providing an unparalleled reach. World's iconic brands get in touch with us for exceptional influencer marketing. Your business needs are perfectly tailored for each campaign through a step-by-step process to convey full-service influencer marketing. 
                 <br />
                 Through the bewildering team in our pool, we have an excellent partnership in building a network of influencer marketers who authentically fit into everyone's life. Always being up-to-date on every aspect of our campaigns where the data is continually updated made us the best influencer marketers. Our influencer marketing services in Dubai and all other places offer to take care of all innovative marketing packages by handling programs of any size and complexity and select the best fit for your project that can be easily collaborated and track the milestones from where you are. 

              </p>
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>

        <div className="service__third__row grid  grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <h2>Our Solutions</h2>
            <p>
             Our overall strategy on influencer marketing services for you, on different social media, can help out to increase brand awareness, grow your follower base, and utmost sales. You can trust us as a source for any casual platform, in introducing your brand to remove the barriers of traditional advertising and to build affordable social media influencer campaigns. Our campaigns are always ROI focussed and viral as well as understanding and establishing desired active goals. Reach Out!
            </p>
          </div>

          <div className="service__third__row__img order-first md:order-last">
            <Image src={web} alt="Influencer marketing company in Calicut, Kerala, India" />
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

      {/*<<<<<<< comonents/proposals >>>>>>>> */}
      <Proposal type={"Influencer Marketing "} />

      <Footer />
    </div> </>
  );
}
