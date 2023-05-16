import Header from "../components/header";
import Footer from "../components/footer";
import AlbumIcon from "@material-ui/icons/Album";
import Head from 'next/head'
export default function ReFund() {
  return ( <> 
  <Head>
    <title> </title>
    <meta property="og:title" content="Blog" key="title" />
    
  </Head>
    <div className="terms">
      <div className="terms__header">
        <Header />
        <h1>REFUND POLICY</h1>
      </div>
      <div className="terms__content container">
        <h2>REFUND POLICY</h2>

        <div className="terms__container">
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              The terms hereof shall constitute the ‘Cleverkings Pvt. Ltd.’
              company cancellation and refund policy concerning the solutions
              rendered on the website.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              The client can place their cancellation for a particular service
              within 24 hours of the service agreement.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              Unless stated, you are not entitled to cancel any orders made by
              you.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              No cancellation and a refund are possible for the services offered
              with promotional discounts.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              {" "}
              Fee once paid won't be refunded in any case, even if the
              cancellation request placed within twelve hours.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              A service stands to cancel if the next payment not received within
              the next seven working days.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              The refund policy varies from one service to another as each takes
              a different course from start to end.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              A refund would not be entertained for the work already completed.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              There won't be any refund on domain registration services, as
              domain once registered you are the owner then.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              Administrative fees or installation charges won't be refunded.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>No refund on the tax paid.</p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              Services can get cancelled due to the violation of terms and
              conditions, no refund shall be provided in such cases.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              The cancellation and refund policy is subject to change without
              any prior intimation.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              The cancellation and refund policy is subject to change without
              any prior intimation.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              There is no refund policy for the services placed under same-day
              delivery.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              Cleverkings Pvt. Ltd. is not liable to pay a refund if delay or
              service disruption happens due to third party involvement.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              We reserve the right to cancel your account at any time without
              notice and refund.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              If any client is dissatisfied with our services, we provide a
              refund.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              If the payment is made with the credit card, a refund will be made
              to the original card and if it is done through the payment
              gateway, the refund will be done to the same bank account.
            </p>
          </div>
          <div className="terms__row flex">
            <AlbumIcon className="terms__icons" />
            <p>
              We request our clients to read the above-mentioned cancellation
              and refund policies thoroughly to avoid any inconvenience
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div> </>
  );
}
