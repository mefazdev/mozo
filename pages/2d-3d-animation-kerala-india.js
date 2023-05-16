import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import web from "../public/images/service/web.png";
import service from "../public/images/ani.png";
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
import { Description } from "@material-ui/icons";
export default function Animation() {
  const [data] = useState([
    {
      question: "How much is our participation?",
      answer:
        "You are the king. You can give the whole picture in your mind regarding the creation and, if not also it is ok. We are very much dedicated to satisfying you, and we do the project according to your ideas. ",
    },
    {
      question: "Will give the ownership of the project to us?",
      answer:
        "Yes, you are the owner of the project we create and you can use it for sales and promotion. ",
    },
    {
      question: "Will I get it at an affordable price?",
      answer:
        "The cost aspect should be the second thing to consider. The first thing is to get a good word from your audience through the best and effective marketing means, which you get from us. We offer the most affordable and value your money in all sense. The output will be worth; than anything you get at a very cheap rate in the market. ",
    },
    {
      question:
        "How do you ensure the confidentiality and security of the data?",
      answer:
        "We understand your concern about data confidentiality and security. We have data security and access control systems and provide maximum confidentiality for the data shared by the client.",
    },
  ]);
  return (
    <>
      {" "}
      <Head>
        <title>Top 2D & 3D Video Animation Services in Kerala, India </title>
        <meta
          name="description"
          content="Clever kings is one of the leading 2D/3D Animation companies in Kerala, India that offers the No,1 solution for Animation, Motion Graphics, and VFX"
        />

        <meta
          property="og:title"
          content="Top 2D & 3D Video Animation Services in Kerala, India"
          key="title"
        />
      </Head>
      <Pixel name="FACEBOOK_PIXEL_1" />
      <div className="service">
        <div className="service__header">
          <Header />
          <h1>ANIMATION</h1>
          <h4></h4>
        </div>

        <div className="service__content container p-3">
          <div className="service__first__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <h2>What we are?</h2>
              <p>
                Mozo Tech is a creative animation production company. We develop
                each one with a distinctive style and reflect the quality of
                work done for you. Our media group welcomes each one of you to
                be part of our family with each new project and the creative
                space within us grows each time you depend on us for work by
                keeping it simple, real, and stylish.
              </p>
            </div>
            <div className="service__first__row__img order-first md:order-last">
              <Image
                src={service}
                alt="Solution for animation,motion gaphics and VFX"
              />
            </div>
          </div>

          <div className="service__second__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <div>
                <h2>Our level of creativity</h2>
                <p>
                  Such an animation studio provides high-quality services with
                  talented professionals at a competitive cost. Mozo Tech
                  animation agency accepts projects in a filmy view and includes
                  our magic with a unique twist. We, the best animation company
                  in UAE, always keep high standards and expectations and, our
                  specialists work together to create great ideas through CGI,
                  live-action animation and, motion graphics.
                  <br />
                  We create avatars and stories, and thus the demand for our
                  animated videos is growing and, also add charm to your
                  business by creating interactive and quirky videos with catchy
                  dialogues; this creates a lifelong impression in the audience.
                </p>
              </div>
              <div style={{ marginTop: "30px" }}>
                <h2>How we help you reach your goals?</h2>
                <p>
                  We make a better understanding of your customers on your
                  brand, through explainer videos of your product and also
                  develop festive videos and thus create a bond with the
                  customer. We stand within a qualified ecosystem, facilitating
                  the whole deal and we are the best animation service providers
                  to help you with video storytelling and turn the visitors into
                  customers. Our videos engage, compel your customers to take
                  action, and increase conversion.
                </p>
              </div>
            </div>
            <div>
              <Form />
            </div>
          </div>

          <div className="service__third__row grid  grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <h2>Our Animation techniques</h2>
              <p>
                Experienced video services are 2D animation, 3D animation,
                corporate video, motion graphics, whiteboard, etc. Mozo Tech
                provides the best animation services of premium quality and
                handcrafted, that match your business objectives and which is
                easily convertible and proudly do it for start-ups as well as
                companies and achieve remarkable results. We are always a step
                ahead in the case of quality and efficiency. Our services are
                amazing and serve in booming your business.
                <br />
                Mozo Tech, a well-known video animation company, has engraved
                its mark in the field of Animation and aspires to explore new
                horizons in the coming years. We are the brand; trust us for
                your business needs.
              </p>
            </div>

            <div className="service__third__row__img order-first md:order-last">
              <Image
                src={web}
                alt="Solution for animation,motion gaphics and VFX"
              />
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
        <Proposal type={"Animation"} />

        <Footer />
      </div>
    </>
  );
}
