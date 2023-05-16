import Header from "../components/header";
import blackLogo from "../public/images/black-logo.png";
import director from "../public/images/director.png";
import comma from "../public/images/home/coma.png";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Footer from "../components/footer";
import Head from 'next/head'
export default function directorProfile() {
  return (
    <div><Head>
    <title> </title>
    <meta property="og:title" content="Blog" key="title" />
    
  </Head>
      <Header />
      <div className="director__head">
        <h1>Director Profile</h1>
        <h5>Winning By Teaming</h5>
      </div>
      <div className="director__content grid grid-cols-1 md:grid-cols-3">
        <div className="director__left ">
          <div className="director__logo">
            <Image src={blackLogo} />
          </div>
          <div className="director__img">
            <Image src={director} />
          </div>
        </div>

        <div className="director__right col-span-2">
          <p>
          Mozo Tech holds versatile, talented and profoundly dedicated team of directors, who are highly skilled at increasing efficiency, problem-solving, critical thinking, stimulating growth  and leads the company with their proven experience in the field.  Directors here are highly experienced and professional executives, confident in handling challenges with the aim of company’s growth. They are the leaders, thinkers and makers dedicated to provide strategic advice backed by their experience and establishes a strong employer-employee bonding through motivation which helps in providing quality products and services.  They control and oversee all business operations and venture with proven success in maximising income, increasing retension, and identifying growth opportunities which makes Mozo Tech the best company.
          </p>

          <div className="director__right__bold flex">
            <div className="director__comma">
              <Image src={comma} />
            </div>
            <div className="director__name">
              <h2>
                My team is my strength and your dream weaver.. The courage they
                take rules the business, doing work worth.
              </h2>
              <h3 style={{ textAlign: "right" }}>Shafhan Kalathil, CEO</h3>
            </div>
          </div>

          <p> A strong relationship they maintained between the client and the company had increased the reliability of the enterprise and is responsible for the overall success of the firm.  They are the enterprenuers with the ability to enhance the business strategies, marketing experience, customer experience and business development steering the company to the most profitable direction by implementing its vision, mission and the long-term goals. They are passionately creative and multi-talented who moulds the team via motivation and honest works without diverging from its strategic guidelines which results in the development of the enterprise. 
Our founder Mouza Ghareeb Salem Hashel Al-Qaydi, an inbuilt with an extraordinary leadership quality who is self-motivated to develop and strengthen the team spirit which in turn increases the trustworthiness of the clients.

          </p>
        </div>
      </div>
      <div className="home__end">
        <div className="home__end__content">
          <h2>Its come to an end. Lets talk now</h2>
          <div className="home__end__form flex">
            <input placeholder="Enter phone number" />
            <span className="rounded-full">
              <ArrowForwardIcon id="home__end__arrow" />
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
