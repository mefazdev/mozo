import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import web from "../public/images/service/web.png";
import service from "../public/images/domain.png";
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
export default function Domain() {
  const [data] = useState([
    {
      question: "Who is the owner of the domain I register for?",
      answer:
        "A domain name is never owned, it is rented subjected to terms of the registrar. ",
    },
    {
      question: "How to start with a domain?",
      answer:
        "A domain should be one that would describe your business or brand. We have a huge set of domain name collections to deal with. ",
    },
    {
      question: "Why is it necessary to have a domain?",
      answer:
        "It is necessary to make your business online. Without a domain, you cannot do it.  ",
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
        <h1>DOMAIN</h1>
        <h4></h4>
      </div>

      <div className="service__content container p-3">
        <div className="service__first__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <h2>What is it?</h2>
            <p>
              A domain name is your business address and gives a credible
              professional touch to your business in cyberspace.
            </p>
            <h2 className="pt-3">Who we are?</h2>
            <p>
            Here is the best domain service provider company in UAE, Mozo Tech offering domain registration, domain transfer and domain renewal with various extensions like .com, .net, .in etc. For all these, we put forward an easy-to-use domain management control panel and DNS services at a reasonable price. As domain registration gives a new beginning to your business success we have the domain availability check tool to select the effective, unique and easy-to-remember huge selection of domain name that matches your profession and also the bulk domain names, that makes your online business strategy a success. 

            </p>
          </div>
          <div className="service__first__row__img order-first md:order-last">
            <Image src={service} />
          </div>
        </div>

        <div className="service__second__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <div>
              <h2>How are we unique?</h2>
              <p>
               We are the leading domain and web hosting service providers in Dubai and have made our standard place in the industry through reliable, innovative and friendly domain services. Our domain service provider put forward a full-featured service like premium domains, URL forwarding, full-time polite support and advice you on any query through phone and chat, security on your personal information with a domain lock along with multiple year registration. Once you register with us, your domain is our responsibility and we always stand as armour against any malware or unauthorized access. Customer starts evaluating you right from your domain name and we provide the perfect service, that takes your website to top ranks and customers get engaged with you all the time they make a move. 
                <br />
                Our Domain name is accompanied by a professional email
                representing your business, and it is a trusted source to which
                the customers tend to make conversations. Come get the best
                solution.
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
      <Proposal type={"Domain"} />

      <Footer />
    </div>
    </>
  );
}
