import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Pixel from '../components/pixel'
import Head from 'next/head'
export default function Amc() {
  return (
    <><Head>
    <title>Blog </title>
    <meta property="og:title" content="Blog" key="title" />
    
  </Head>
        <Pixel name='FACEBOOK_PIXEL_1' />
    <div className="cookie">
      <div className="cookie__header">
        <Header />
        <h1>ANNUAL MAINTENANCE CONTRACT</h1>
      </div>
      <div className="cookie__content container  ">
        <h2>ANNUAL MAINTENANCE CONTRACT</h2>

        <p className="p-2">
          An annual maintenance contract is used by a company to create an
          agreement with a service provider on repair and maintenance of the
          property. Comprehensively maintaining the IT infrastructure that was
          provided to you is a valuable addition to your business. Usually,
          maintenance is included for one year with each service and can extend
          the terms if you want to continue. In such a contract we include many
          parameters like details of the service or product on which the
          contract is valid, response time to solve the problems, availability
          of remote support and additional instances on which the support is
          available. Your business growth is empowered by our assurance on your
          requirements specified on the specially customised annual maintenance
          contract. Cleverkings Pvt. Ltd. will always continue to suggest the
          best and specific options also time-to-time optimization and
          up-gradation, that will suit your business. You can leave your
          maintenance concern completely on us and focus on the revenue aspects
          of your business. Software assets are well maintained and delivered by
          the experts here. Cleverkings Pvt. Ltd. is a full-service IT provider
          who flexibly manages your server, storage, network and facility. We
          explicitly include the terms to meet the requirements and objectives
          of the client's fast-growing needs. Our aim is to achieve an
          uninterrupted IT infrastructure and put-forward maintenance that is
          free from potential faults. While undergoing the maintenance, we
          capture the complete control over the infrastructure to avoid
          disruptions to the one using it. Our maintenance service is on 24
          hours surveillance and more on performance, patches, security and
          software configuration also against malicious threats, systemic
          failure and other issues. Continuous maintenance provides optimal
          performance and productivity, no goal breakdowns and increased
          longevity. As such we become a long-term partner invested in your
          success.
        </p>
      </div>
      {/* <div className='renew__form__div'>
           <h3>Renew the contract</h3>
           <h2>No worries experts are here to guide you </h2>
      
         <div className='renew__from'>
            <div className='renew__from__row grid grid-cols-1 lg:grid-cols-3'>
                <p>Name</p>
                <input/>
            </div>
         </div>
        </div> */}
      <Footer />
    </div>
    </>
  );
}
