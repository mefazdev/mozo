import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import process1 from "../public/images/process/process1.svg";
import process2 from "../public/images/process/process2.svg";
import process3 from "../public/images/process/process3.svg";
import process4 from "../public/images/process/process4.svg";
import process5 from "../public/images/process/process5.svg";
import Head from 'next/head'
import process6 from "../public/images/process/process6.svg";
import process7 from "../public/images/process/process7.svg";
import process8 from "../public/images/process/process8.svg";
import process9 from "../public/images/process/process9.svg";
import Pixel from '../components/pixel'
export default function Process() {
  return (
    <> <Head>
    <title> </title>
    <meta property="og:title" content="Blog" key="title" />
    
  </Head>
     <Pixel name='FACEBOOK_PIXEL_1' />
    <div className="process">
      <div className="process__header">
        <Header />
        <h1>PROCESS</h1>
      </div>

      <div className="process__content container">
        <h2>PROCESS</h2>

        <div className="process__first__row grid grid-cols-1 md:grid-cols-3">
          <div className="process__box ">
            <div
              className="flex "
              style={{
                alignItems: "center",
                padding: "10",
                justifyContent: "center",
              }}
            >
              {/* <span className="rounded-full">
                <h6>1</h6>
              </span> */}
              <h3>Common approach but unique methodology, add value</h3>
            </div>

            <div className="process__image">
              <Image src={process1} />
            </div>
            <p>
              Our interpretation is taking objectives from a framework to
              benchmark. We take the ideas through different phases and bring
              out an excellent output. These phases include discovering,
              planning, estimating, prototyping, building, testing, and
              launching.
            </p>
          </div>
          <div className="process__box ">
            <div
              className="flex "
              style={{
                alignItems: "center",
                padding: "10",
                justifyContent: "center",
              }}
            >
              <span className="rounded-full">
                <h6>1</h6>
              </span>
              <h5>Discover</h5>
            </div>

            <div className="process__image">
              <Image src={process2} />
            </div>
            <p>
              This stage is to identify your objective ideas, motivation, goal,
              budget, etc to meet your organization’s true goal and minimize
              project risk. We conduct a Q&A session to get a perspective on
              everything that you want to achieve and customize a process
              improvement program that provides an insight into what is
              important for your business.We analyze your objective situation and match it to the project goal and divide it into different segments to make the achievement easier.
            </p>
          </div>
          <div className="process__box  " style={{ border: "none" }}>
            <div
              className="flex "
              style={{
                alignItems: "center",
                padding: "10",
                justifyContent: "center",
              }}
            >
              <span className="rounded-full">
                <h6>2</h6>
              </span>
              <h5>Plan</h5>
            </div>

            <div className="process__image">
              <Image src={process3} />
            </div>
            <p>
              Planning is the basis of project creation that adds value to your
              business through technology-based architecture. Our planning
              approach is the complete agenda on evaluating operational process
              to be done on your well clear objectives with high efficiency and
              reduced cost of ownership. We develop and utilize templates
              specific to the industry you are dealing with and along with it
              features the quality, cost, and time to deliver the project
              results.
            </p>
          </div>
        </div>
        <div className="process__first__row grid grid-cols-1 md:grid-cols-3">
          <div className="process__box ">
            <div
              className="flex "
              style={{
                alignItems: "center",
                padding: "10",
                justifyContent: "center",
              }}
            >
              <span className="rounded-full">
                <h6>3</h6>
              </span>
              <h5>Estimation</h5>
            </div>

            <div className="process__image">
              <Image src={process4} />
            </div>
            <p>
              Depending on the identified objectives and well executable plans,
              at this stage, a simplified summary on the estimated project cost,
              project initialization date, project timeline, launch, etc, are
              handed over to you. The project will move on to the next stage
              with your approval and the initial payment.
            </p>
          </div>

          <div className="process__box ">
            <div
              className="flex "
              style={{
                alignItems: "center",
                padding: "10",
                justifyContent: "center",
              }}
            >
              <span className="rounded-full">
                <h6>4</h6>
              </span>
              <h5>Prototyping</h5>
            </div>

            <div className="process__image">
              <Image src={process5} />
            </div>
            <p>
              Now we are about to start the main phase. Prototyping brings us an
              understanding of the additional requirements, that are achieved
              easily to make your project more reliable, efficient, and robust
              strictly following the project management disciplines. This stage
              helps us to take a step forward to overcome the problems,
              limitations, confusions which were there with us till the last
              stage. At this stage, we prepare high-quality visual designs for
              any service we are about to provide that reflects the beauty of
              your brand, product, and life.
            </p>
          </div>

          <div className="process__box  " style={{ border: "none" }}>
            <div
              className="flex "
              style={{
                alignItems: "center",
                padding: "10",
                justifyContent: "center",
              }}
            >
              <span className="rounded-full">
                <h6>5</h6>
              </span>
              <h5>Build</h5>
            </div>

            <div className="process__image">
              <Image src={process6} />
            </div>
            <p>
              Outline of the project is done, completely to your satisfaction,
              and move to the development stage where we get a chance to
              explicitly show off our coding talent and add the content
              management system. A content management system developed for you
              helps to get involved in the project with your content where no
              programming skill is required.
            </p>
          </div>
        </div>
        <div
          className="process__first__row grid grid-cols-1 md:grid-cols-3"
          style={{ border: "none" }}
        >
          <div className="process__box ">
            <div
              className="flex "
              style={{
                alignItems: "center",
                padding: "10",
                justifyContent: "center",
              }}
            >
              <span className="rounded-full">
                <h6>6</h6>
              </span>
              <h5>Testing</h5>
            </div>

            <div className="process__image">
              <Image src={process7} />
            </div>
            <p>
              This is the integration phase to be dealt with extreme care and
              defects of the project are identified and resolved with detailed
              research and planning. This in-detail process is carried out upon
              an agenda kept out for carrying out the plan.
            </p>
          </div>
          <div className="process__box ">
            <div
              className="flex "
              style={{
                alignItems: "center",
                padding: "10",
                justifyContent: "center",
              }}
            >
              <span className="rounded-full">
                <h6>7</h6>
              </span>
              <h5>Launch</h5>
            </div>

            <div className="process__image">
              <Image src={process8} />
            </div>
            <p>
              Launch As a result of the continuous evaluation & cross-checking
              through the project and several successful testing on the
              real-time environment, we launch it for you and give a new face to
              your business.
            </p>
          </div>
          <div className="process__box  " style={{ border: "none" }}>
            <div
              className="flex "
              style={{
                alignItems: "center",
                padding: "10",
                justifyContent: "center",
              }}
            ></div>

            <div className="process__image">
              <Image src={process9} />
            </div>
            <p></p>
          </div>
        </div>
      </div>

      <Footer />
    </div></>
  );
}
