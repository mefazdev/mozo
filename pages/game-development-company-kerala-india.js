import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import web from "../public/images/service/web.png";
import service from "../public/images/game.png";
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
export default function Game() {
  const [data] = useState([
    {
      question: "Why is game development Important?",
      answer:
        "Smart gadgets have gained popularity and open a new avenue of entertainment. Now the gaming sector has been so developed and unavoidable for entertainment purposes. Thus, evolved the mobile gaming sector which brings a huge revenue. ",
    },
    {
      question: "When will I start getting the revenue from the games?",
      answer:
        "Once the game is completely developed and live, then you will start getting revenue through selling and in-app purchase. If the game is free to download then profit is through the ads.",
    },
    {
      question: "How to start to have a game developed?",
      answer:
        "To start a game development project, just give an idea of the game you wish to develop and then our team will bring it into an addictive game.",
    },
  ]);

  return (
    <>
      {" "}
      <Head>
        <title>
          Game app development companies in Calicut, Kerala, Bangalore, India{" "}
        </title>
        <meta
          name="description"
          content="We are one of the leading game application development companies in Calicut, Kerala, Bangalore | Mobile game development agency India."
        />

        <meta
          property="og:title"
          content="Game app development companies in Calicut, Kerala, Bangalore, India"
          key="title"
        />
      </Head>
      <Pixel name="FACEBOOK_PIXEL_1" />
      <div className="service">
        <div className="service__header">
          <Header />
          <h1>GAME DEVELOPMENT</h1>
          <h4></h4>
        </div>

        <div className="service__content container p-3">
          <div className="service__first__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <h2>We</h2>
              <p>
                Mozo Techis the IT company in Dubai with a perfect mix of
                technical, unique, memorable, creative, effective game services.
              </p>
            </div>
            <div className="service__first__row__img order-first md:order-last">
              <Image
                src={service}
                alt="Game development companies in India, Game development companies in Kerala"
              />
            </div>
          </div>

          <div className="service__second__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <div>
                <h2>The technology we use</h2>
                <p>
                  We are the best game development company in United Arab
                  Emirates to develop 3D games and apps to support various
                  platforms like iPad/iPhone and android based smartphones or
                  tablets, windows, mac, or web. Our game development experts
                  use unity, Cocos, Unreal engine 3D, Xamarin, PhoneGap tools
                  and develop 3D and 2D of different genres and initiates from
                  the beginning, to support you till the last and also maintain
                  the level designs providing entertainment for the end-users.
                  Advanced technology and tools are used in developing visually
                  attractive UI, responsive games and always keep the gamers
                  engaged.{" "}
                </p>
              </div>
              <div style={{ marginTop: "30px" }}>
                <h2>Our characteristics</h2>
                <p>
                  The solutions we give are of utter quality and help you
                  convert your creative ideas to games in a cost-effective way.
                  Our game development company works on innovative ideas, to
                  build interactive games, graphics, and themes. Our programmers
                  are so experienced to publish the game design in leading app
                  stores and, support you at every stage of the development
                  process; also remove all hurdles encountered by using agile
                  development cycles. <br />
                  Highly interactive games are created by airing the techniques
                  in turning up with modern enterprise needs. We help you to
                  gain benefits and business returns through decorating the
                  unique idea with essential features.
                </p>
              </div>
            </div>
            <div>
              <Form />
            </div>
          </div>

          <div className="service__third__row grid  grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <h2>Our skills</h2>
              <p>
                The game development services you can extract from us are 2D,
                3D, single-player, multiplayer, gambling, gamification, social
                media integrated ones, AAA, game UI design, character design,
                core, and casual game design, play store deployment, elance,
                Upwork, outsource, casino, etc. Android and iPhone game apps for
                the different genres are puzzle, action, strategy, sports,
                adventure, arcade, etc. We are the leading game developers in
                Dubaia and deliver the best solutions to our clients.P
                <br />
                As android is most popular and user-friendly, we do custom,
                dynamic android games and our Ios games are of a professional
                standard that is easy to learn and simple to use. A new trend in
                the gaming industry is Augmented game development, and we are
                the best software company in offering game development services
                for mobile devices, smart glasses, headsets, etc. We use a
                powerful tool, unity cross-platform technology to develop robust
                games like 3D,2D, HTML5, Real money game development, social
                media games, mixed reality game app development, virtual reality
                game, E-learning based games.
              </p>
            </div>

            <div className="service__third__row__img order-first md:order-last">
              <Image src={web} alt="Game development companies in Bangalore" />
            </div>
          </div>

          <div className="service__forth__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
              <h2>Our team</h2>
              <p>
                The experienced team with us has enough knowledge of
                technologies in the gaming market and create a total bug-free
                one, and of top quality is delivered on time with affordable
                price. Mozo Tech is a provider of skill, talent needed to
                develop modern-day games and our games are taking the world by
                storm and took us to top reviewed IT company standards. We have
                already started making a beeline to the world talents and offer
                a chance to collaborate, network, share and showcase our
                creativity, and make our intellectual properties in games. Our
                efficiency in dramatical development makes it free and
                accessible, like never before. <br />
                Request a quote for ultra-quality games.
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
        <Proposal type={"Game Development"} />

        <Footer />
      </div>
    </>
  );
}
