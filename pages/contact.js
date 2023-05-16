import Header from "../components/header";
import Footer from "../components/footer";
import moment from 'moment';
import { HiLocationMarker } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { HiAtSymbol } from "react-icons/hi";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber} from 'react-phone-number-input'
import ReCAPTCHA from 'react-google-recaptcha'
import { useRouter } from 'next/router'
import { useState } from "react";
import { addDoc, collection,   query, doc ,serverTimestamp} from "@firebase/firestore";
import {db} from '../firebase'
import Pixel from '../components/pixel'
import Head from 'next/head'
import {  useDispatch } from "react-redux";
import   {openSuccessAlert} from '../redux/actions'
export default function Contact() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [verified, setVerified] = useState(false)
  const [sending, setSending] = useState(false)
  const dispatch = useDispatch()
  const sendForm = async (e) =>{
    e.preventDefault();
    setSending(true)
    const docRef = await addDoc(collection(db,'lead'), {
      name : name,
      phone : phone,
      email : email,
      questionaire: null,
      date:moment(new Date()).unix(),
      details:message,
      timestamp: serverTimestamp(),
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4> Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
      
       <h4>  Details :</h4>   <h2>${message}</h2>
        </code>` ,
      }
    })
setSending(false)
 dispatch(openSuccessAlert())
  }
  return (
    <> <Head>
    <title> </title>
    <meta property="og:title" content="Blog" key="title" />
    
  </Head>
    <Pixel name='FACEBOOK_PIXEL_1' />
    <div className="contact">
      <div className="contact__header">
        <Header />
        <h1>CONTACT US</h1>
      </div>

      <div className="contact__content container pl-2 pr-2  pr-15">
        <div className="contact__first__row  grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h5>CONTACT US</h5>
            <h1>We’d Love to Hear From You</h1>
            <p>
              {/* Whether you’re curious about features, a free trial, or even
              press—we’re ready to answer any and all questions.Our door is
              always open for a good cup of coffee. */}
              Need to upgrade your business? or looking for a tech solution to
              improve your business? Have no idea where to start? We are ready
              to answer any and all questions. feel free to ask us. Our door is
              always open for you.
            </p>
          </div>
        </div>
        <div className="contact__second__row  p-3 justify-between  grid grid-cols-1  lg:grid-cols-3">
          <div className="contact__adress__div  lg:col-span-2 ">
            <div className="flex contact__adress">
              <HiLocationMarker className="contact__adress__icons" />
              <p>
                Clever Kings Pvt Ltd. <br />
                Thamburan Arcade, Medical College,
                <br /> Kozhikode, Kerala,
                <br /> India - 673008
              </p>
            </div>
            <div className="flex contact__phone">
              <HiPhone className="contact__adress__icons" />
              <p>
                +91 9656 600 009 <br />
                +91 8013 666 999
              </p>
            </div>
            <div className="flex contact__mail">
              <HiAtSymbol className="contact__adress__icons" />
              <p>
                info@cleverkings.com,
                <br />
                support@cleverkings.com
              </p>
            </div>
            <div className="contact__social">
              <h3>Follow Us</h3>
              <a href="https://www.facebook.com/cleverkingsgroup/">
                <FacebookIcon
                  className="transform motion-safe:hover:scale-110  ... "
                  className="contact__social__icons"
                />
              </a>

              <a href="https://twitter.com/cleverkingsinfo">
                <TwitterIcon
                  className="transform motion-safe:hover:scale-110 ...  "
                  className="contact__social__icons"
                />
              </a>

              <a href="">
                <YouTubeIcon
                  className="transform motion-safe:hover:scale-110 ...  "
                  className="contact__social__icons"
                />
              </a>

              <a href="https://instagram.com/cleverkingsofficial?utm_medium=copy_link">
                <InstagramIcon
                  className="transform motion-safe:hover:scale-110 ...  "
                  className="contact__social__icons"
                />
              </a>

              <a href="https://www.linkedin.com/company/cleverkings/">
                <LinkedInIcon
                  className="transform motion-safe:hover:scale-110 ...  "
                  className="contact__social__icons"
                />
              </a>
            </div>
          </div>
          {/*<<<<<<<<<<<<<<<<<<<<< CONTACT FROM >>>>>>>>>>>>>>>>>>>> */}
          <div className=" contact__form__div">
            <h3>Write to us</h3>

            <div>
              <form onSubmit={sendForm}  className="grid grid-cols-1">
                <input required name='name' placeholder="Name" onChange={(e)=>setName(e.target.value)} />
                <input required name='email' type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                <div className='contact__phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required
               defaultCountry='IN'
               
               />
               </div> 

                <textarea name='message' placeholder="Message" onChange={(e)=>setMessage(e.target.value)}/>
                             <ReCAPTCHA className='mt-3'
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
              <button disabled={!verified}  type='submit'>{sending ? "SENDING..." :'SEND'} </button>
            
               
              </form>
            </div>
          </div>   
        </div>
      </div>
      <div className="contact__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15651.567725934121!2d75.8403423!3d11.2693538!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4aaebb286832d9e3!2sCleverkings%20Private%20Limited!5e0!3m2!1sen!2sin!4v1628506289845!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0, allowfullscreen: "", loading: "lazy" }}
        ></iframe>
      </div>
      <Footer />
    </div></>
  );
}
