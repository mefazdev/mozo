import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Head from 'next/head'
export default function Support() {
  return ( <>
    <div className="cookie">
      <div className="cookie__header">
        <Header />
        <h1>SUPPORT</h1>
      </div>
      <div className="cookie__content container lg:pb-28">
        <h2>SUPPORT</h2>

        <p className="p-2">
          We are always here to help you with any technical need at any time,
          that is 24*7. Our actual relationship with you begins after the
          delivery of the projects and monitor you always to resolve it at once
          if any issues are found, thus the relationship continues for a long.
          We are of utter commitment for supporting, maintaining, and guiding
          your product and bring out the possibility of maintenance by having a
          well-equipped team with utmost dedication. All technical queries and
          problems are resolved, with a comfortable approach and have our
          systematic methodology for handling and improving; to assist you in a
          fast and reliable mode. We continuously preserve and care for your
          online investments and assets, safe and steady to guarantee business
          continuity. <br />
        </p>
      </div>

      <Footer />
    </div> </>
  );
}
