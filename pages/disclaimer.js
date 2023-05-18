import Header from "../components/header";
import Footer from "../components/footer";
import AlbumIcon from "@material-ui/icons/Album";
import Head from 'next/head'
export default function Disclaimer() {
  return (

    <> <Head>
    <title> </title>
    <meta property="og:title" content="Blog" key="title" />
    
  </Head>
    <div className="terms">
      <div className="terms__header">
        <Header />
        <h1>DISCLAIMER</h1>
      </div>
      <div className="terms__content container">
        <h2>DISCLAIMER</h2>

        <div className="terms__container">
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
            Mozo Tech is a  company
              providing all sought of IT services including development,
              marketing, Hosting, consultancy and the least real-world machine
              applications. We render our services to Startups, SMEs, Corporates
              and Government agencies within the country and abroad.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              All the information and contents included on our website may
              contain inaccuracies or errors. We may bring changes to our
              services, conditions and information accordingly without notice.
              Our services/ decisions do not rely upon personal, legal and
              financial matters.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              All the information and services described are carried out as it
              is mentioned and delivered the best from us in any case, but
              without any warranty or guarantee. Our site may also contain many
              links for many purposes and some may include third parties also.
              Mozo Tech Management or the investors won't be
              responsible for any illegal content on the sites of the links
              provided.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              We provided many links to our websites just for your convenience
              and reference. The intellectual property rights, offensive
              contents of any third party. Our site is not a place for
              advertising, and you cannot see any ads on our page, together we
              won't be responsible for any consequential damages by relying on
              advertisement content.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              All the client products and logos showcased on the website are
              copyright to their respective proprietors. We also assure the
              functions contained is error-free, free of viruses and harmful
              components. They are provided solely for promotional purposes.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              All the client products and logos showcased on the website are
              copyright to their respective proprietors. We also assure the
              functions contained is error-free, free of viruses and harmful
              components. They are provided solely for promotional purposes.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              Any illegal and non-logical contents posted on the forums are not
              allowed; and also not to upload, distribute or transmit, abusive
              or threatening ones, that infringes the intellectual property of
              any person violating the copyrights. Mozo Tech will
              not be responsible for such messages and reserves the right to
              delete or move the same.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              By using this website, you agree to all the policies and
              disclaimer and should check the terms of use before engaging in
              any service or uploading any information.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              If you have any queries related to the disclaimer content, you can
              email us to info@mozotech.ae
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div></>
  );
}
