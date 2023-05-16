import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import web from "../public/images/service/web.png";
import service from "../public/images/business.png";
import Form from "../components/serviceform";
import Proposal from "../components/proposal";
import { useState } from "react";
import Pixel from '../components/pixel'
import Head from 'next/head'
export default function DataMigration() {
  const [data] = useState([
    {
      question: "How much branding helps me in getting ahead?",
      answer:
        "It is your reflection. We help you make it right from the beginning, that is, the logo. We identify the target audience, tone, content and much more which determines the success. A professional brand can give you trust and awareness. ",
    },
    {
      question: "Why should I choose you and not go for a cheaper option?",
      answer:
        "We are a unique and creative team providing strategic thinking and purposeful solution that you can rely upon. We craft a well-designed brand experience and help you achieve high market saturation. A cheaper option will be cheaper as we provide it for the best possible rate and come out in better colours.",
    },
  ]);

  return (
    <> <Head>
    <title> </title>
    <meta name="description" content=""/>
    <meta property="og:title" content="Blog" key="title" />
    
  </Head>
    <Pixel name='FACEBOOK_PIXEL_1' />
  
    <div className="service">
      <div className="service__header">
        <Header />
        <h1>DATA MIGRATION</h1>
        <h4></h4>
      </div>

      <div className="service__content container p-3">
        <div
          className="service__first__row grid grid-cols-1 md:grid-cols-3 md:gap-20"
          style={{ alignItems: "center" }}
        >
          <div className="col-span-2" style={{ alignItems: "center" }}>
            <h2>Accelerating to top</h2>
            <p>
              Many prompt to migrate data into new systems for a variety of
              reasons and, many are ill-equipped to handle it on their own. Data
              migration services are to happen in the blink of an eye and to be
              executed with extreme care.
            </p>
          </div>
          <div className="service__first__row__img order-first md:order-last">
            <Image src={service} />
          </div>
        </div>

        <div className="service__second__row grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <div>
              <h2></h2>

              <p>
                Cleverkings Pvt. Ltd. is the best IT company in Calicut, to
                provide data migration service which includes cloud migration,
                database migration, transferring of data to the new
                infrastructure by the experts, using strategic planning
                providing an uninterrupted transition. The most reviewed
                software company here use a structured methodology that
                efficiently manages the risk involved in the migration project
                and move it efficiently and compliantly saving your time and
                resources. Our system does it without disrupting your business
                process providing thorough documentation leaving you confident
                of the validity. We are the top IT company in Calicut who point
                out the best methods for data migration based on your location,
                cost, data model, data transformation and security also, making
                use of all types of automated tools resulting in a fast
                transfer. Ourselves, the top reviewed software development
                company in India, assist enterprises to easily navigate to
                digital transformation going through configuration, migration
                design, testing design, migration development, testing
                development and execution.
              </p>
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>

        <div className="service__third__row grid  grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="col-span-2">
            <p>
              {" "}
              We strictly adhere to legal requirements and privacy standards to
              provide a result-oriented approach and follow a tested and proven
              delivery method. Giving the priority to customer satisfaction,
              most reviewed IT company in India, Cleverkings. Pvt. Ltd. is
              available 24*7 and delivers a cost-effective project, saving
              customers money and time. Even data from complex infrastructures
              are extracted, moved, consolidated and unified to provide
              homogenous as well as heterogeneous, onetime and continuous
              replication without redundancy, highly resilient and self-healing.
              If the server fails in between the backup server takes in charge
              without interrupting the service and continues the migration from
              where it was halted. Smooth delivery is achieved by agreeing and
              defining all requirements providing transparency and control. Here
              is a team of experienced professionals and have proven ourselves
              in doing a complete data transfer safely and securely.
            </p>
          </div>

          <div className="service__third__row__img order-first md:order-last">
            <Image src={web} />
          </div>
        </div>
      </div>
      <Proposal type={"Data Migration"} />

      <Footer />
    </div>
    </>
  );
}
