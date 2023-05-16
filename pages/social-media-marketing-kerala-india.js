import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import web from "../public/images/service/web.png";
import service from "../public/images/smm.png";
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
export default function SMM() {
  const [data] = useState([
    {
      question: "What and why social media marketing?",
      answer:
        "Social media marketing involves branding, resolving customer queries, publishing the contents on social media, and all that makes your business succeed on the internet. Once social media marketing is done correctly, it can connect potential customers to existing customers.",
    },
    {
      question: "How can I generate leads?",
      answer:
        "SMM creates an online awareness of your product. Here the people expect information that leads more sales to come in. Set it right more traffic will flow to your website.",
    },
  ]);
  return (
    <> <Head>
    <title>Best Social media marketing agency in Calicut, Kerala, Bangalore India </title>
    <meta name="description" content="Social media marketing company | Digital marketing agency in Calicut, Kerala, Bangalore. Find out the best digital agency in India."/>
    <meta property="og:title" content="Best Social media marketing agency in Calicut, Kerala, Bangalore India" key="title" />
    
  </Head>
    <Pixel name='FACEBOOK_PIXEL_1' />
    <div className="service">
      <div className="service__header">
        <Header />
        <h1>SMM</h1>
        <h4></h4>
      </div>

      <div className="service__content container p-3">
        <div className="service__first__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <h2>What is it?</h2>
            <p>
              
Social media is a voice to communicate with the bulk of potential customers and spread the brand message to the world. Social media marketing is the procedure of driving engagement and sharing on a social media platform. 

            </p>
          </div>
          <div className="service__first__row__img order-first md:order-last">
            <Image src={service} alt="Social media marketing agency in Calicut, Kerala, Bangalore" />
          </div>
        </div>

        <div className="service__second__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <div>
              <h2>Our Relevancy</h2>
              <p>
              Competitors in this field look forward to the rankings on your posts, so the best social media marketing agency in the Dubai and worldwide, Mozo Tech, is here to solve it for you by implementing different strategies using the latest available tools. Professionals here direct the continuous flow of traffic consistently as the audience expects from you. We, the best digital marketing agency in Dubai, post content for you in the appropriate format regularly and optimally; moreover, the aim is to involve the target people in the best possible way to get more mileage in brand engagement. 
               <br />
               Here is the best SMM service provider who optimally uses the business space provided by almost all platforms to attain a maximum brand advantage. Our contents usually oscillate the connection with the target audience and mix it with successful strategies for an engaging campaign. The top online marketing company in Dubaia belonging to us, merge the use of all available options that will take your brand reach out to millions of potential business possibilities.

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
            <h2>Meet your social needs with us</h2>
            <p>
             Ourselves, the leading social media marketing company in Dubai, uses innovative strategies to attract maximum attention and retain their attention on your brand name and a well-planned strategy earns maximum leads, that change into a business. The content we prepare to post on social media strikes just the right chord with the customers and maximum impact created on them with a positive image.  The only internet marketing company in UAE having enough knowledge and expertise to leverage the SEO advantage is owned by us and assure you the conversion rates engrossed till date.
              <br />
              It is possible to add impressive images and videos, along with the relevant content, and also use hashtags, keywords, address listing, and other marketing tips that will help your brand emerge on the top. Mozo Tech has customized social media Optimisation (SMO) techniques, that help you achieve increased loyalty, reach, visibility, brand awareness, online visitors, and better ROI. The proficiency in paid and organic advertising campaigns that spread information about your business using allied services to sell your products online makes us the number one digital marketing destination.

            </p>
          </div>

          <div className="service__third__row__img order-first md:order-last">
            <Image src={web} alt=" Social media marketing Company India" />
          </div>
        </div>

        <div className="service__forth__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <h2>Lets grow together</h2>
            <p>
             Our firm cost-effectively offers efficient social media operations for businesses of all sizes. The experienced team here in the best social media management company in UAE  reflects their talent in the performance and dedication on, how they utilize and adapt the social channels, for the best and fast results on your business.
              <br />
            </p>
            We are flexible in changing quickly according to changes in consumer
            habits and can wrap the consumer expectations. Let's connect!
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
      <Proposal type={"SMM"} />

      <Footer />
    </div></>
  );
}
