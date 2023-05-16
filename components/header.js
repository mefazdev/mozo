import YouTubeIcon from "@mui/icons-material/YouTube";
// import logoOne from "../public/images/home/logo.png";
import mozlogo from '../public/images/home/mozo.png'
import Image from "next/image";
import ShareIcon from "@mui/icons-material/Share";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";
import mobileMenu from "../public/images/mobile_menu.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useSelector, useDispatch } from "react-redux";
import { successAlert } from "./successAlert";
import { successAlertControl } from '../redux/reducers'
import {
  CommonForm,
  WebForm,
  AppForm,
  SoftwareForm,
  GameForm,
  GraphicForm,
  AnimationForm,
  DigitalForm,
  BrandingForm,
  SeoForm,
  SmmForm,
  SmsForm,
  EmailForm,
  InfluencerForm,
  DomainForm,
  HostingForm,
  CloudForm,
  AiForm,
  RoboticsForm,
  BusinessForm,
  ResearchForm,
  DataForm,
} from "./DetaileForms";

import {openCommenQuote} from "../redux/actions";
import {CommenQuote} from './serviceForms'

export default function header() {
  const [social, setSocial] = useState(false);
  const [state, setState] = useState(false);
  const router = useRouter();
   const dispatch = useDispatch();
const successState =  useSelector((state) => state.successAlertControl);
if (successState ){
  successAlert()
}
 const hideNavBar = () => {
    if (window.scrollY >= 10) {
      setState(false);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", hideNavBar);
  },[]);


  return (
    <div className="header">
      <div className="header__row flex  lg:grid grid-cols-2  justify-between">
        <div id="expand__icon">
          <Image onClick={() => setState(!state)} src={mobileMenu} />
        </div>

        <div className="logo__div rounded-full bg-black">
          <div className="logo">
            <Link href="/">
              <Image src={mozlogo} />
            </Link>
          </div>
        </div>

        <div className="header__right ">
        
          <Link href="/">
            <h5
              className={
                router.pathname == "/" ? "active" : "header__right__h5"
              }
            >
              HOME
            </h5>
          </Link>
          <Link  href="/about" >
            <h5
              className={
                router.pathname == "/about" ? "active" : "header__right__h5 "
              }
            >
              ABOUT
            </h5>
          </Link>

          <span className=" group cursor-pointer ">
            <Link href="/services" >
              <h5
                className={
                  router.pathname == "/services"
                    ? "active"
                    : "header__right__h5 "
                }
              >
             
                SERVICES
              </h5>
            </Link>

            <span style={{ textAlign: "left", zIndex: "1" }}>
              <ul className="dropdown-menu absolute hidden   group-hover:block  text-gray-700 pt-6">
                <span className="development__head cursor-pointer group">
                  <div className="flex   service__group__span rounded-t bg-gray-200 hover:bg-gray-400 py-2">
                    <li className=" px-4 block whitespace-no-wrap text-sm ">
                      Development
                    </li>
                    <ArrowRightIcon id="service__group__arrow" />
                  </div>

                  <ul className="development__list">
                    <Link href="/ecommerce-web-development-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-2  whitespace-no-wrap text-sm ">
                        {" "}
                        Website development
                      </li>
                    </Link>
                    <Link href="/software-development-company-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-sm">
                        Software development
                      </li>
                    </Link>
                    <Link href="/mobile-app-development-kerala-india"   >
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-sm">
                        App development
                      </li>
                    </Link>
                    <Link href="/game-development-company-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-sm">
                        Game development
                      </li>
                    </Link>
                  </ul>
                </span>

                <span className="design__head">
                  <div className="flex   service__group__span  bg-gray-200 hover:bg-gray-400 py-2">
                    <li className=" px-4 block whitespace-no-wrap text-sm ">
                      Designing
                    </li>
                    <ArrowRightIcon id="service__group__arrow" />
                  </div>
                  <ul className="design__list ">
                    <Link href="/graphicdesign-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 pt-3 py-2 px-2 block whitespace-no-wrap text-sm">
                        Graphic designing
                      </li>
                    </Link>

                    <Link href="/2d-3d-animation-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 pb-3 py-2 px-2 block whitespace-no-wrap text-sm">
                        Animation
                      </li>
                    </Link>
                  </ul>
                </span>

                <span className="marketing__head">
                  <div className="flex   service__group__span  bg-gray-200 hover:bg-gray-400 py-2">
                    <li className=" px-4 block whitespace-no-wrap text-sm ">
                      Marketing
                    </li>
                    <ArrowRightIcon id="service__group__arrow" />
                  </div>
                  <ul className="marketing__list ">
                    <Link href="/digital-marketing-agency-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-2 pt-3 block whitespace-no-wrap text-sm">
                        Digital marketing
                      </li>
                    </Link>
                    <Link href="/branding-company-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-sm">
                        Branding
                      </li>
                    </Link>
                    <Link href="/seo-companies-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-sm">
                        SEO
                      </li>
                    </Link>
                    <Link href="/social-media-marketing-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-sm">
                        SMM
                      </li>
                    </Link>
                    <Link href="/bulk-sms-services-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-sm">
                        Bulk sms and voice calls
                      </li>
                    </Link>
                    <Link href="/emailmarketing-company-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-sm">
                        Email marketing
                      </li>
                    </Link>
                    <Link href="/influencer-company-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-sm">
                        Influencer marketing
                      </li>
                    </Link>
                  </ul>
                </span>
                <span className="hosting__head">
                  <div className="flex   service__group__span  bg-gray-200 hover:bg-gray-400 py-2">
                    <li className=" px-4 block whitespace-no-wrap text-sm ">
                      Hosting
                    </li>
                    <ArrowRightIcon id="service__group__arrow" />
                  </div>
                  <ul className="hosting__list ">
                    <Link href="/domain">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 pl-4  block whitespace-no-wrap text-sm">
                        Domain
                      </li>
                    </Link>
                    <Link href="/hosting">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 pl-4  block whitespace-no-wrap text-sm">
                        Hosting
                      </li>
                    </Link>
                    <Link href="/cloud">
                      <li className=" bg-gray-200 hover:bg-gray-400  py-2 pl-4 block whitespace-no-wrap text-sm">
                        Cloud computing
                      </li>
                    </Link>
                    <Link href="/data">
                      <li className=" bg-gray-200 hover:bg-gray-400  py-2 pl-4 block whitespace-no-wrap text-sm">
                        Data migration
                      </li>
                    </Link>
                  </ul>
                </span>

                <span className="expert__head">
                  <div className="flex   service__group__span  bg-gray-200 hover:bg-gray-400 py-2">
                    <li className=" px-4 block whitespace-no-wrap text-sm ">
                      Expert systems
                    </li>
                    <ArrowRightIcon id="service__group__arrow" />
                  </div>
                  <ul className="expert__list">
                    <Link href="/ai">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 pl-4 block whitespace-no-wrap text-sm">
                        Artificial intelligence
                      </li>
                    </Link>
                    <Link href="/robotics">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 pl-4 block whitespace-no-wrap text-sm">
                        Robotics
                      </li>
                    </Link>
                  </ul>
                </span>

                <Link href="/b_consultancy">
                  <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-sm">
                    Business consultancy
                  </li>
                </Link>
                <Link href="/research">
                  <li className="rounded-b bg-gray-200 hover:bg-gray-400 pb-3 py-2 px-4 block whitespace-no-wrap text-sm">
                    Research and development
                  </li>
                </Link>
              </ul>
            </span>
          </span>
          <Link href="/portfolio">
            <h5
              className={
                router.pathname == "/portfolio"
                  ? "active"
                  : "header__right__h5 "
              }
            >
              PORTFOLIO
            </h5>
          </Link>
          <Link href="/process">
            <h5
              className={
                router.pathname == "/process" ? "active" : "header__right__h5 "
              }
            >
              PROCESS
            </h5>
          </Link>
          <Link href="/career">
            <h5
              className={
                router.pathname == "/career" ? "active" : "header__right__h5 "
              }
            >
              CAREERS
            </h5>
          </Link>
          <Link href="/contact">
            <h5
              className={
                router.pathname == "/contact" ? "active" : "header__right__h5 "
              }
            >
              CONTACT
            </h5>
          </Link>

          <button
            className="transform duration-400     hover:scale-105 ..."
            onClick={() => dispatch(openCommenQuote())}
          >
            Get quote
          </button>
        </div>

        <div className="mobile__social">
          <ShareIcon id="social__icon" onClick={() => setSocial(!social)} />

          {social ? (
            <div className="mobile__social__div">
              <div id="wtsap__icon" className="social__circle  rounded-full">
                <a
                  href="whatsapp://send?phone=+918645999666"
                  data-action="share/whatsapp/share"
                >
                  <WhatsAppIcon id="home__social__icon" />
                </a>
              </div>
              <div className="social__circle rounded-full mt-2">
                <a href="https://www.facebook.com/cleverkingsgroup/">
                  <FacebookIcon id="home__social__icon" />
                </a>
              </div>
              <div className="social__circle rounded-full mt-2">
                <a href="https://instagram.com/cleverkingsofficial?utm_medium=copy_link">
                  <InstagramIcon id="home__social__icon" />
                </a>
              </div>
              <div className="social__circle rounded-full mt-2">
                <a href="https://twitter.com/cleverkingsinfo">
                  <TwitterIcon id="home__social__icon" />
                </a>
              </div>
              <div className="social__circle rounded-full mt-2">
                <a href="">
                  <YouTubeIcon id="home__social__icon" />
                </a>
              </div>
              <div className="social__circle rounded-full mt-2">
                <a href="https://www.linkedin.com/company/cleverkings/">
                  <LinkedInIcon id="home__social__icon" />
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/*<<<<<<<<<<<<<<<<<<<<<<<< NAV BAR MOBILE VIEW COLLAPS >>>>>>>>>>>>>>>>>>>>> */}
      {state ? (
        <div id="collaps">
          <Link href="/">
            <h5
              className={
                router.pathname == "/" ? "active_collaps" : "collaps__head"
              }
            >
              Home
            </h5>
          </Link>

          <Link href="/about">
            <h5
              className={
                router.pathname == "/about"
                  ? "active_collaps"
                  : "collaps__head "
              }
            >
              About Us
            </h5>
          </Link>

          <Link href="/services">
            <h5
              className={
                router.pathname == "/services"
                  ? "active_collaps"
                  : "collaps__head "
              }
            >
              Services
            </h5>
          </Link>

          <Link href="/portfolio">
            <h5
              className={
                router.pathname == "/portfolio"
                  ? "active_collaps"
                  : "collaps__head "
              }
            >
              Portfolio
            </h5>
          </Link>

          <Link href="/career">
            <h5
              className={
                router.pathname == "/career"
                  ? "active_collaps"
                  : "collaps__head"
              }
            >
              {" "}
              Careers
            </h5>
          </Link>

          <Link href="/process">
            <h5
              className={
                router.pathname == "/process"
                  ? "active_collaps"
                  : "collaps__head "
              }
            >
              {" "}
              Process
            </h5>
          </Link>

          <Link href="/contact">
            <h5
              className={
                router.pathname == "/contact"
                  ? "active_collaps"
                  : "collaps__head "
              }
            >
              Contact
            </h5>
          </Link>
        </div>
      ) : (
        ""
      )}

      {/*<<<<<<<<<<<<<<<<<<<<<<< MODEL FOR FOR GETSTARTE BUTTON >>>>>>>>>>>>>>>>>>>> */}
      <div>
       

        <CommonForm />
        <WebForm />
        <SoftwareForm />
        <AppForm />
        <GameForm />
        <GraphicForm />
        <AnimationForm />
        <DigitalForm />
        <BrandingForm />
        <SeoForm />
        <SmmForm />
        <SmsForm />
        <EmailForm />
        <InfluencerForm />
        <DomainForm />
        <HostingForm />
        <CloudForm />
        <AiForm />
        <RoboticsForm />
        <BusinessForm />
        <ResearchForm />
        <DataForm />
        <CommenQuote/>
      </div>
     
    </div>
  );
}







