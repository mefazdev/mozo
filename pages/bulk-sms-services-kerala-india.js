import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import web from "../public/images/service/web.png";
import service from "../public/images/sms.png";
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
export default function Sms() {
  const [data] = useState([
    {
      question: "What is the cost of bulk SMS service and how it is done?",
      answer:
        "It depends on factors, like the bundle you select, the country to which SMS is to be sent, the route used to send etc. You simply purchase the bundle and use it as you need.",
    },
    {
      question: "Is there any credit expiry and payment for failed SMS?",
      answer:
        "No, the credit never expires. The failed SMS is also chargeable because we resend it once the issues are resolved.",
    },
    {
      question: "Can I send multiple messages with different content?",
      answer: "Yes, it is possible using BulkSMS Text messenger",
    },
  ]);
  return (
    <>
      {" "}
      <Head>
        <title>The best bulk SMS service provider in Kerala, India </title>
        <meta
          name="description"
          content="Cleverkings is the best  Bulk SMS provider companies in Kerala, India | Bulk SMS and voice Calls India"
        />
        <meta
          property="og:title"
          content="The best bulk SMS service provider in Kerala, India"
          key="title"
        />
      </Head>
      <Pixel name="FACEBOOK_PIXEL_1" />
      <div className="service">
        <div className="service__header">
          <Header />
          <h1>BULK SMS AND VOICE CALLS</h1>
          <h4></h4>
        </div>

        <div className="service__content container p-3">
          <div className="service__first__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <h2>What is it?</h2>
              <p>
                The best bulk SMS service provider in United Arab Emirates, Mozo
                Tech enables you; to easily communicate with people through
                brief and pertinent messages. The Bulk SMS Marketing technique
                is a great and superior option to promote business, and this
                idea came from our never-ending relationship with the cell
                phone.
              </p>
            </div>
            <div className="service__first__row__img order-first md:order-last">
              <Image src={service} alt="Bulk sms and voice call" />
            </div>
          </div>

          <div className="service__second__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <div>
                <h2>The much-needed edge of marketing</h2>
                <p>
                  We are the leading and best Digital Marketing agency in Dubai,
                  United Arab Emirates, with the BULK SMS service committed to
                  the task done for your business's success. Our online SMS
                  service has grown fast as we take full advantage of the
                  messaging option in the marketing and advertising sector. Our
                  services are highly effective in that they penetrate directly
                  to the customer's brain and heart. SMS being the cheapest way
                  of communication, most of the clients prefer this medium for
                  the promotion of businesses.
                  <br />
                  The nature of Cleverkings Bulk SMS marketing is natural,
                  instant, fast-tracking, and maximum return on investment.
                  Through this marketing technique, we explain the features of
                  your products and straightforwardly impart data and offers.
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
              <h2>Best-in-class for your business needs</h2>
              <p>
                The BULK SMS marketing comprises a silent promotion as it is
                delivered silently, so the customer can intervene at their
                desired time and can make a proper understanding of the product
                and services and also has a 'store and forward' feature which
                does not need an active customer always, but it will reach the
                customer when they are active. Our business promotion for big
                and small brands, SMS is a short and sure way to connect with
                millions of people at a time, and we have specified SMS gateways
                for the bulk SMS services in Dubai, United Arab Emirates and
                worldwide.
                <br />
                We also have an option of sending bulk voice SMS between various
                telephone exchanges or operators depending on the server load
                and interconnect traffic, to update, broadcast, and send
                pre-recorded voice messages. Ourselves, provide HTTP/API which
                can be incorporated into your application/software.
              </p>
            </div>
            <div className="service__third__row__img order-first md:order-last">
              <Image src={web} alt=" Bulk sms Kerala" />
            </div>
          </div>

          <div className="service__forth__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <h2>Our messaging solutions</h2>
              <p>
                The top BULK SMS service provider in Dubai and many other
                countries, Mozo Tech; runs your campaign with high security and
                uses conventional methods in promotional SMS with and without
                API, transactional SMS with and without API, WhatsApp messages,
                voice SMS, missed call alert, etc. We provide you with excellent
                experience in bringing out high responses for your campaign and
                take no time in establishing your trust.
                <br />
                Come on, let's indulge in your business and open the world of
                opportunities.
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
        <Proposal type={"Bulk SMS and Voice calls"} />

        <Footer />
      </div>
    </>
  );
}
