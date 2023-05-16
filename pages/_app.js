import "tailwindcss/tailwind.css";
import "../public/css/home.css";
import "../public/css/header.css";
import "../public/css/footer.css";

import "../public/css/services.css";
import "../public/css/about.css";
import "../public/css/contact.css";
import "../public/css/portfolio.css";
import "../public/css/career.css";
import "../public/css/terms.css";
import "../public/css/cookie.css";
import "../public/css/blog.css";
import "../public/css/blogmore.css";
import "../public/css/service.css";
import "../public/css/process.css";
import "../public/css/directorProfile.css";
import "../public/css/modalForm.css";
import "../public/css/bannerSlider.css";
import "../public/css/projectSlider.css";
import "../public/css/amc.css";
import "./admin/sideBar.css";
import "./admin/leads.css";
import "./admin/team.css";
import "./admin/settings.css";
import "./admin/header.css";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import { createContext } from "react";
import Script from "next/script";

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-CP6V068CLX"
      />

      <Script strategy="lazyOnload">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CP6V068CLX');
  `}
      </Script>

      
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
