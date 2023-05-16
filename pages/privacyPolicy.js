import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";
export default function PrivacyPolicy() {
  return (
    <>
      {" "}
      <Head>
        <title> </title>
        <meta property="og:title" content="Blog" key="title" />
      </Head>
      <div className="cookie">
        <div className="cookie__header">
          <Header />
          <h1>PRIVACY POLICY</h1>
        </div>
        <div className="cookie__content container lg:pb-28">
          <h2>PRIVACY POLICY</h2>

          <p className="p-2">
            We are committed to protecting the online privacy of users of the
            website and all related subdomains. As such, this document has been
            written to allow you to understand how your data will be handled
            when using the website. This privacy policy will also provide you
            with information so that you can consent to the processing of your
            data in an explicit and informed manner. Any information or data you
            provide to us over the website in the context of the use of our
            services will be processed lawfully, fairly, and transparently. We
            consider internationally recognized principles governing the
            processing of personal data.
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
}
