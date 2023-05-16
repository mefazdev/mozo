import CloseIcon from "@material-ui/icons/Close";
import { Input, Modal } from "@material-ui/core";
import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { addDoc, collection,   query, doc ,serverTimestamp} from "@firebase/firestore";
import  { useRef } from 'react';
import { db } from '../firebase'
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber} from 'react-phone-number-input'
import { useSelector, useDispatch } from "react-redux";
import ReCAPTCHA from 'react-google-recaptcha'

import moment from 'moment';
import {
  openDetailWeb,
  openDetailApp,
  openDetailSoftware,
  openDetailBusiness,
  openDetailDigital,
  openDetailBranding,
  openDetailSeo,
  openDetailSmm,
  openDetailSms,
  openDetailEmail,
  openDetailInfluencer,
  openDetailDomain,
  openDetailHosting,
  openDetailAnimation,
  openDetailAi,
  openDetailGame,
  openDetailCloud,
  openDetailRobotics,
  openDetailResearch,
  openDetailGraphic,
  openDetailCommon,
  openDetailData,
  openCommenQuote,
  addFormId
} from "../redux/actions";
import {
  closeWebQuote,
  closeAppQuote,
  closeSoftwareQuote,
  closeBrandingQuote,
  closeBusinessQuote,
  closeSeoQuote,
  closeSmmQuote,
  closeEmailQuote,
  closeRoboticsQuote,
  closeResearchQuote,
  closeAiQuote,
  closeGraphicQuote,
  closeAnimationQuote,
  closeCloudQuote,
  closeDomainQuote,
  closeHostingQuote,
  closeDigitalQuote,
  closeSmsQuote,
  closeInfluencerQuote,
  closeGameQuote,
  closeDataQuote,
  closeCommenQuote,
 
} from "../redux/actions";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
};

const services = [
  "Website Development",
  "App Development",
  "Software Development",
  "Business Consultancy",
  "Digital Marketing",
  "Branding",
  "SEO",
  "SMM",
  "Bulk SMS and Voice Calls",
  "Email Marketing",
  "Influencer Marketing",
  "Domain",
  "Hosting",
  "Animation",
  "Artificial Intelligence",
  "Game Develoment",
  "Cloud Computing",
  "Robotics",
  "Research And Development",
  "Graphic Designing",
  "Data Migration",
];


// COMMEN QUOTE FORM


export function CommenQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [serviceName, setServiceName] = useState([]);
  const [sending,setSending] = useState(false)
  const open = useSelector((state) => state.commenQuoteControl);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(
     typeof value === "string" ? value.split(",") : value
    );
  };
 
  const sendForm = async (e) => {
    e.preventDefault();
    setSending(true)
    const docRef = await addDoc(collection(db, 'lead'), {
      name:name,
      phone:phone,
      email:email,
      service:serviceName,
      details:details,
      questionaire: null,
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
     

    }
  
    ) 

    addDoc(collection(db,'mail'),{
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
    })
    dispatch(closeCommenQuote());
    dispatch(addFormId(docRef.id))
    setSending(false)
    setVerified(false)
    if (serviceName.length < 2) {
      if (serviceName == services[0]) {
        dispatch(openDetailWeb());
      } else if (serviceName == services[1]) {
        dispatch(openDetailApp());
      } else if (serviceName == services[2]) {
        dispatch(openDetailSoftware());
      } else if (serviceName == services[3]) {
        dispatch(openDetailBusiness());
      } else if (serviceName == services[4]) {
        dispatch(openDetailDigital());
      } else if (serviceName == services[5]) {
        dispatch(openDetailBranding());
      } else if (serviceName == services[6]) {
        dispatch(openDetailSeo());
      } else if (serviceName == services[7]) {
        dispatch(openDetailSmm());
      } else if (serviceName == services[8]) {
        dispatch(openDetailSms());
      } else if (serviceName == services[9]) {
        dispatch(openDetailEmail());
      } else if (serviceName == services[10]) {
        dispatch(openDetailInfluencer());
      } else if (serviceName == services[11]) {
        dispatch(openDetailDomain());
      } else if (serviceName == services[12]) {
        dispatch(openDetailHosting());
      } else if (serviceName == services[13]) {
        dispatch(openDetailAnimation());
      } else if (serviceName == services[14]) {
        dispatch(openDetailAi());
      } else if (serviceName == services[15]) {
        dispatch(openDetailGame());
       } else if (serviceName == services[16]) {
        dispatch(openDetailCloud());
      } else if (serviceName == services[17]) {
        dispatch(openDetailRobotics());
      } else if (serviceName == services[18]) {
        dispatch(openDetailResearch());
      } else if (serviceName == services[19]) {
        dispatch(openDetailGraphic());
      } else if (serviceName == services[20]) {
        dispatch(openDetailData());
      }
      if (serviceName.length === 0) {
        dispatch(openDetailCommon());
      }
    } else {
      dispatch(openDetailCommon());
    }
 
 

   };

  return (
    <div>
      <Modal
       disableEnforceFocus
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="contact__form__model__wrapp">
          <div className="contact__form__model grid grid-cols-1">
            <CloseIcon
              id="contact__form__model__close"
              onClick={() => dispatch(closeCommenQuote())}
            />
            <form onSubmit={sendForm} className="grid">
              <input
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="pl-2"
                required
              />
              <input
                type="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-2"
                value={email}
                required
              />
             
              <div className='phone__input'>
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
              

              <FormControl style={{ marginTop: "13px" }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  displayEmpty
                  name='service'
                  value={serviceName}
                  onChange={handleChange}
                  input={
                    <Input
                      style={{
                        border: "#c4c4c4 solid  1px ",
                        height: "50px",
                        borderBottom: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{ color: "#8b8a8a" }}>Services</p>;
                    }    

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                     
                      <Checkbox checked={serviceName.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
                name='detail'
                className="pl-2"
              />
               <ReCAPTCHA className='mt-3 service__form__recaptcha'
              //  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               sitekey='6Ld-J_gcAAAAALWe15z5n7aRpcec7uhJehNEa9MU'
               onChange={()=>setVerified(true)}
               />
               
               <button disabled={!verified}   type='submit'>{sending ? 'SENDING...':'SEND'}</button>
            </form>
            
          </div>
         
        </div>  
      </Modal>
    </div>
  );
}

// WEB QUOTE FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function WebQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [sending,setSending] = useState(false)
  const [serviceName, setServiceName] = useState(["Website Development"]);
  const open = useSelector((state) => state.webQuoteControl);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(

      typeof value === "string" ? value.split(",") : value
    );
  };

  const sendForm = async (e) => {
    e.preventDefault();
    setSending(true)
    const docRef = await addDoc(collection(db, 'lead'), {
      name:name,
      phone:phone,
      email:email,
      service:serviceName,
      details:details,
      questionaire: [],
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
     
     }) 
     addDoc(collection(db,'mail'),{
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
    })
    setSending(false)
    setVerified(false)
    dispatch(addFormId(docRef.id))
    dispatch(closeWebQuote());

    
    if (serviceName.length < 2 && serviceName == services[0]) {
      dispatch(openDetailWeb());
    } else {
      dispatch(openDetailCommon());
    }
  };



  return (
    <div>
      <Modal
          disableEnforceFocus
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="contact__form__model__wrapp">
          <div className="contact__form__model grid grid-cols-1">
            <CloseIcon
              id="contact__form__model__close"
              onClick={() => dispatch(closeWebQuote())}
            />
           <form onSubmit={sendForm} className="grid">
              <input
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="pl-2"
                required
              />
              <input
                type="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-2"
                value={email}
                required
              />
               <div className='phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required  defaultCountry='IN'
               />
              </div>
              
              <div className='phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required
               />
              </div>
              

              <FormControl style={{ marginTop: "13px" }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  displayEmpty
                  name='service'
                  value={serviceName}
                  onChange={handleChange}
                  input={
                    <Input
                      style={{
                        border: "#c4c4c4 solid  1px ",
                        height: "50px",
                        borderBottom: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{ color: "#8b8a8a" }}>Services</p>;
                    }    

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                     
                      <Checkbox checked={serviceName.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
                name='detail'
                className="pl-2"
              />
               <ReCAPTCHA className='mt-3'
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
                <button disabled={!verified}  type='submit'>{sending ? 'SENDING...':'SEND'}</button>
            </form>
         
          </div>
        </div>
      </Modal>
    </div>
  );
}

// APP QUOTE FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function AppQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [serviceName, setServiceName] = useState(["App Development"]);
  const open = useSelector((state) => state.appQuoteControl);
  const dispatch = useDispatch();
  const [sending,setSending] = useState(false)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(typeof value === "string" ? value.split(",") : value);
  };

  const sendForm = async (e) => {
    setSending(true)
    e.preventDefault();
    const docRef = await addDoc(collection(db, 'lead'), {
      name:name,
      phone:phone,
      email:email,
      details:details,
      service:serviceName,
      questionaire: [],
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
     
    }) 
    addDoc(collection(db,'mail'),{
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
    })
    dispatch(addFormId(docRef.id))
    dispatch(closeAppQuote());
    setSending(false)
    setVerified(false)
    if (serviceName.length < 2 && serviceName == services[1]) {
      dispatch(openDetailApp());
    } else {
      dispatch(openDetailCommon());
    }
  };

  return (
    <div>
      <Modal
       disableEnforceFocus
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="contact__form__model__wrapp">
          <div className="contact__form__model grid grid-cols-1">
            <CloseIcon
              id="contact__form__model__close"
              onClick={() => dispatch(closeAppQuote())}
            />
            <form onSubmit={sendForm} className="grid">
              <input
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="pl-2"
                required
              />
              <input
                type="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-2"
                value={email}
                required
              />
             
              <div className='phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required  defaultCountry='IN'
               />
              </div>
              

              <FormControl style={{ marginTop: "13px" }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  displayEmpty
                  name='service'
                  value={serviceName}
                  onChange={handleChange}
                  input={
                    <Input
                      style={{
                        border: "#c4c4c4 solid  1px ",
                        height: "50px",
                        borderBottom: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{ color: "#8b8a8a" }}>Services</p>;
                    }    

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                     
                      <Checkbox checked={serviceName.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
                name='detail'
                className="pl-2"
              />
               <ReCAPTCHA className='mt-3'
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
                 <button disabled={!verified}  type='submit'>{sending ? 'SENDING...':'SEND'}</button>
            </form>
          
          </div>
        </div>
      </Modal>
    </div>
  );
}

// SOFTWARE QUOTE FORM
export function SoftwareQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [serviceName, setServiceName] = useState(["Software Development"]);
  const open = useSelector((state) => state.softwareQuoteControl);
  const dispatch = useDispatch();
  const [sending,setSending] = useState(false)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(typeof value === "string" ? value.split(",") : value);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    setSending(true)
    const docRef = await addDoc(collection(db, 'lead'), {
      name:name,
      phone:phone,
      email:email,
      details:details,
      service:serviceName,
      questionaire: [],
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
    
    }) 
    addDoc(collection(db,'mail'),{
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
    })
    dispatch(addFormId(docRef.id))
    dispatch(closeSoftwareQuote());
    setSending(false)
    setVerified(false)
    if (serviceName.length < 2 && serviceName == services[2]) {
      dispatch(openDetailSoftware());
    } else {
      dispatch(openDetailCommon());
    }
  };
  

  return (
    <div>
      <Modal
       disableEnforceFocus
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="contact__form__model__wrapp">
          <div className="contact__form__model grid grid-cols-1">
            <CloseIcon
              id="contact__form__model__close"
              onClick={() => dispatch(closeSoftwareQuote())}
            />
            <form onSubmit={sendForm} className="grid">
              <input
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="pl-2"
                required
              />
              <input
                type="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-2"
                value={email}
                required
              />
             
              <div className='phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required  defaultCountry='IN'
               />
              </div>
              

              <FormControl style={{ marginTop: "13px" }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  displayEmpty
                  name='service'
                  value={serviceName}
                  onChange={handleChange}
                  input={
                    <Input
                      style={{
                        border: "#c4c4c4 solid  1px ",
                        height: "50px",
                        borderBottom: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{ color: "#8b8a8a" }}>Services</p>;
                    }    

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                     
                      <Checkbox checked={serviceName.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
                name='detail'
                className="pl-2"
              />
               <ReCAPTCHA className='mt-3'
                 sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
               <button disabled={!verified}  type='submit'>{sending ? 'SENDING...':'SEND'}</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// BUSINESS QUOTE FORM
export function BusinessQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [serviceName, setServiceName] = useState(["Business Consultancy"]);
  const open = useSelector((state) => state.businessQuoteControl);
  const dispatch = useDispatch();
  const [sending,setSending] = useState(false)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(typeof value === "string" ? value.split(",") : value);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    setSending(true)
    const docRef = await addDoc(collection(db, 'lead'), {
      name:name,
      phone:phone,
      email:email,
      details:details,
      service:serviceName,
      questionaire: [],
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
    
    }) 
    addDoc(collection(db,'mail'),{
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
    })
    dispatch(addFormId(docRef.id))
    dispatch(closeBusinessQuote());
    setSending(false)
    setVerified(false)
    if (serviceName.length < 2 && serviceName == services[3]) {
      dispatch(openDetailBusiness());
    } else {
      dispatch(openDetailCommon());
    }
  };
 
  return (
    <div>
      <Modal
       disableEnforceFocus
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="contact__form__model__wrapp">
          <div className="contact__form__model grid grid-cols-1">
            <CloseIcon
              id="contact__form__model__close"
              onClick={() => dispatch(closeBusinessQuote())}
            />
           <form onSubmit={sendForm} className="grid">
              <input
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="pl-2"
                required
              />
              <input
                type="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-2"
                value={email}
                required
              />
             
              <div className='phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required  defaultCountry='IN'
               />
              </div>
              

              <FormControl style={{ marginTop: "13px" }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  displayEmpty
                  name='service'
                  value={serviceName}
                  onChange={handleChange}
                  input={
                    <Input
                      style={{
                        border: "#c4c4c4 solid  1px ",
                        height: "50px",
                        borderBottom: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{ color: "#8b8a8a" }}>Services</p>;
                    }    

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                     
                      <Checkbox checked={serviceName.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
                name='detail'
                className="pl-2"
              />
               <ReCAPTCHA className='mt-3'
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
               <button disabled={!verified}  type='submit'>{sending ? 'SENDING...':'SEND'}</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// D_MARKETING QUOTE FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function DigitalQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [serviceName, setServiceName] = useState(["Digital Marketing"]);
  const open = useSelector((state) => state.digitalQuoteControl);
  const dispatch = useDispatch();
  const [sending,setSending] = useState(false)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(typeof value === "string" ? value.split(",") : value);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    setSending(true)
    const docRef = await addDoc(collection(db, 'lead'), {
      name:name,
      phone:phone,
      email:email,
      details:details,
      service:serviceName,
      questionaire: [],
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
    
    }) 
    addDoc(collection(db,'mail'),{
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
    })
    dispatch(addFormId(docRef.id))
    dispatch(closeDigitalQuote());
    setSending(false)
    setVerified(false)
    if (serviceName.length < 2 && serviceName == services[4]) {
      dispatch(openDetailDigital());
    } else {
      dispatch(openDetailCommon());
    }
  };
  

  return (
    <div>
      <Modal
       disableEnforceFocus
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="contact__form__model__wrapp">
          <div className="contact__form__model grid grid-cols-1">
            <CloseIcon
              id="contact__form__model__close"
              onClick={() => dispatch(closeDigitalQuote())}
            />
            <form onSubmit={sendForm} className="grid">
              <input
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="pl-2"
                required
              />
              <input
                type="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-2"
                value={email}
                required
              />
             
              <div className='phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required  defaultCountry='IN'
               />
              </div>
              

              <FormControl style={{ marginTop: "13px" }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  displayEmpty
                  name='service'
                  value={serviceName}
                  onChange={handleChange}
                  input={
                    <Input
                      style={{
                        border: "#c4c4c4 solid  1px ",
                        height: "50px",
                        borderBottom: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{ color: "#8b8a8a" }}>Services</p>;
                    }    

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                     
                      <Checkbox checked={serviceName.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
                name='detail'
                className="pl-2"
              />
               <ReCAPTCHA className='mt-3'
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
              <button disabled={!verified}  type='submit'>{sending ? 'SENDING...':'SEND'}</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// BRANDINGQUOTE FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function BrandingQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [serviceName, setServiceName] = useState(["Branding"]);
  const open = useSelector((state) => state.brandingQuoteControl);
  const dispatch = useDispatch();
  const [sending,setSending] = useState(false)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(typeof value === "string" ? value.split(",") : value);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, 'lead'), {
      name:name,
      phone:phone,
      email:email,
      details:details,
      service:serviceName,
      questionaire: [],
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
     
     }) 
     addDoc(collection(db,'mail'),{
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
    })
    setSending(true)
    dispatch(addFormId(docRef.id))
    dispatch(closeBrandingQuote());
    if (serviceName.length < 2 && serviceName == services[5]) {
      dispatch(openDetailBranding());
    } else {
      dispatch(openDetailCommon());
    }
  };
  

  return (
    <div>
      <Modal
       disableEnforceFocus
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="contact__form__model__wrapp">
          <div className="contact__form__model grid grid-cols-1">
            <CloseIcon
              id="contact__form__model__close"
              onClick={() => dispatch(closeBrandingQuote())}
            />
            <form onSubmit={sendForm} className="grid">
              <input
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="pl-2"
                required
              />
              <input
                type="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-2"
                value={email}
                required
              />
             
              <div className='phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required  defaultCountry='IN'
               />
              </div>
              

              <FormControl style={{ marginTop: "13px" }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  displayEmpty
                  name='service'
                  value={serviceName}
                  onChange={handleChange}
                  input={
                    <Input
                      style={{
                        border: "#c4c4c4 solid  1px ",
                        height: "50px",
                        borderBottom: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{ color: "#8b8a8a" }}>Services</p>;
                    }    

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                     
                      <Checkbox checked={serviceName.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
                name='detail'
                className="pl-2"
              />
               <ReCAPTCHA className='mt-3'
               sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
              
              <button disabled={!verified}  type='submit'>{sending ? 'SENDING...':'SEND'}</button>
               
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// SEO QUOTE FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function SeoQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [serviceName, setServiceName] = useState(["SEO"]);
  const open = useSelector((state) => state.seoQuoteControl);
  const dispatch = useDispatch();
  const [sending,setSending] = useState(false)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(typeof value === "string" ? value.split(",") : value);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    setSending(true)
    const docRef = await addDoc(collection(db, 'lead'), {
      name:name,
      phone:phone,
      email:email,
      service:serviceName,
      details:details,
      questionaire: [],
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
      
     }) 
     addDoc(collection(db,'mail'),{
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
    })
    setSending(false)
    setVerified(false)
    dispatch(addFormId(docRef.id))
    dispatch(closeSeoQuote());
    if (serviceName.length < 2 && serviceName == services[6]) {
      dispatch(openDetailSeo());
    } else {
      dispatch(openDetailCommon());
    }
  };
 

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="contact__form__model__wrapp">
          <div className="contact__form__model grid grid-cols-1">
            <CloseIcon
              id="contact__form__model__close"
              onClick={() => dispatch(closeSeoQuote())}
            />
           <form onSubmit={sendForm} className="grid">
              <input
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="pl-2"
                required
              />
              <input
                type="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-2"
                value={email}
                required
              />
             
              <div className='phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required  defaultCountry='IN'
               /> 
              </div>
              

              <FormControl style={{ marginTop: "13px" }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  displayEmpty
                  name='service'
                  value={serviceName}
                  onChange={handleChange}
                  input={
                    <Input
                      style={{
                        border: "#c4c4c4 solid  1px ",
                        height: "50px",
                        borderBottom: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{ color: "#8b8a8a" }}>Services</p>;
                    }    

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                     
                      <Checkbox checked={serviceName.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
                name='detail'
                className="pl-2"
              />
               <ReCAPTCHA className='mt-3'
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
                 <button disabled={!verified}  type='submit'>{sending ? 'SENDING...':'SEND'}</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// SMM QUOTE FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function SmmQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [serviceName, setServiceName] = useState(["SMM"]);
  const open = useSelector((state) => state.smmQuoteControl);
  const dispatch = useDispatch();
  const [sending,setSending] = useState(false)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(typeof value === "string" ? value.split(",") : value);
  };

  const sendForm = async (e) => {
    setSending(true)
    e.preventDefault();
    const docRef = await addDoc(collection(db, 'lead'), {
      name:name,
      phone:phone,
      email:email,
      service:serviceName,
      details:details,
      questionaire: [],
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
    
     }) 
     addDoc(collection(db,'mail'),{
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
    })
    dispatch(addFormId(docRef.id))
    dispatch(closeSmmQuote());
    setSending(false)
    setVerified(false)
    if (serviceName.length < 2 && serviceName == services[7]) {
      dispatch(openDetailSmm());
    } else {
      dispatch(openDetailCommon());
    }
  };

  return (
    <div>
      <Modal
       disableEnforceFocus
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="contact__form__model__wrapp">
          <div className="contact__form__model grid grid-cols-1">
            <CloseIcon
              id="contact__form__model__close"
              onClick={() => dispatch(closeSmmQuote())}
            />
           <form onSubmit={sendForm} className="grid">
              <input
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="pl-2"
                required
              />
              <input
                type="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-2"
                value={email}
                required
              />
             
              <div className='phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required  defaultCountry='IN'
               />
              </div>
              

              <FormControl style={{ marginTop: "13px" }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  displayEmpty
                  name='service'
                  value={serviceName}
                  onChange={handleChange}
                  input={
                    <Input
                      style={{
                        border: "#c4c4c4 solid  1px ",
                        height: "50px",
                        borderBottom: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{ color: "#8b8a8a" }}>Services</p>;
                    }    

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                     
                      <Checkbox checked={serviceName.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
                name='detail'
                className="pl-2"
              />
               <ReCAPTCHA className='mt-3'
                 sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
              <button disabled={!verified}  type='submit'>{sending ? 'SENDING...':'SEND'}</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// SMS  QUOTE FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function SmsQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [serviceName, setServiceName] = useState(["Bulk SMS and Voice Calls"]);
  const open = useSelector((state) => state.smsQuoteControl);
  const dispatch = useDispatch();
  const [sending,setSending] = useState(false)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(typeof value === "string" ? value.split(",") : value);
  };

  const sendForm = async (e)  => {
    
    e.preventDefault();
    setSending(true)
    const docRef = await addDoc(collection(db, 'lead'), {
      name:name,
      phone:phone,
      email:email,
      details:details,
      service:serviceName,
      questionaire: [],
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
     
     }) 
     addDoc(collection(db,'mail'),{
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
    })
    setSending(false)
    setVerified(false)
    dispatch(addFormId(docRef.id))
    dispatch(closeSmsQuote());
    if (serviceName.length < 2 && serviceName == services[8]) {
      dispatch(openDetailSms());
    } else {
      dispatch(openDetailCommon());
    }
  };
 
  return (
    <div>
      <Modal
       disableEnforceFocus
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="contact__form__model__wrapp">
          <div className="contact__form__model grid grid-cols-1">
            <CloseIcon
              id="contact__form__model__close"
              onClick={() => dispatch(closeSmsQuote())}
            />
             <form onSubmit={sendForm} className="grid">
              <input
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="pl-2"
                required
              />
              <input
                type="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-2"
                value={email}
                required
              />
             
              <div className='phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required  defaultCountry='IN'
               />
              </div>
              

              <FormControl style={{ marginTop: "13px" }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  displayEmpty
                  name='service'
                  value={serviceName}
                  onChange={handleChange}
                  input={
                    <Input
                      style={{
                        border: "#c4c4c4 solid  1px ",
                        height: "50px",
                        borderBottom: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{ color: "#8b8a8a" }}>Services</p>;
                    }    

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                     
                      <Checkbox checked={serviceName.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
                name='detail'
                className="pl-2"
              />
               <ReCAPTCHA className='mt-3'
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
                <button disabled={!verified}  type='submit'>{sending ? 'SENDING...':'SEND'}</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// EMAIL QUOTE FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function EmailQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [serviceName, setServiceName] = useState(["Email Marketing"]);
  const open = useSelector((state) => state.emailQuoteControl);
  const dispatch = useDispatch();
  const [sending,setSending] = useState(false)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(typeof value === "string" ? value.split(",") : value);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    setSending(true)
    const docRef = await addDoc(collection(db, 'lead'), {
      name:name,
      phone:phone,
      email:email,
      details:details,
      service:serviceName,
      questionaire: [],
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
    
     }) 
     addDoc(collection(db,'mail'),{
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
    })
    setSending(false)
    setVerified(false)
    dispatch(addFormId(docRef.id))
    dispatch(closeEmailQuote());
    if (serviceName.length < 2 && serviceName == services[9]) {
      dispatch(openDetailEmail());
    } else {
      dispatch(openDetailCommon());
    }
  };

  return (
    <div>
      <Modal
       disableEnforceFocus
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="contact__form__model__wrapp">
          <div className="contact__form__model grid grid-cols-1">
            <CloseIcon
              id="contact__form__model__close"
              onClick={() => dispatch(closeEmailQuote())}
            />
           <form onSubmit={sendForm} className="grid">
              <input
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="pl-2"
                required
              />
              <input
                type="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-2"
                value={email}
                required
              />
             
              <div className='phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required  defaultCountry='IN'
               />
              </div>
              

              <FormControl style={{ marginTop: "13px" }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  displayEmpty
                  name='service'
                  value={serviceName}
                  onChange={handleChange}
                  input={
                    <Input
                      style={{
                        border: "#c4c4c4 solid  1px ",
                        height: "50px",
                        borderBottom: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{ color: "#8b8a8a" }}>Services</p>;
                    }    

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                     
                      <Checkbox checked={serviceName.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
                name='detail'
                className="pl-2"
              />
               <ReCAPTCHA className='mt-3'
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
               <button disabled={!verified}  type='submit'>{sending ? 'SENDING...':'SEND'}</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
// INFLUENCER _ M QUOTE FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function InfluencerQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [serviceName, setServiceName] = useState(["Influencer Marketing"]);
  const open = useSelector((state) => state.influencerQuoteControl);
  const dispatch = useDispatch();
  const [sending,setSending] = useState(false)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(typeof value === "string" ? value.split(",") : value);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    setSending(true)
    const docRef = await addDoc(collection(db, 'lead'), {
      name:name,
      phone:phone,
      email:email,
      details:details,
      service:serviceName,
      questionaire: [],
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
    
     }) 
     addDoc(collection(db,'mail'),{
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
    })
    setSending(false)
    setVerified(false)
    dispatch(addFormId(docRef.id))
    dispatch(closeInfluencerQuote());
    if (serviceName.length < 2 && serviceName == services[10]) {
      dispatch(openDetailInfluencer());
    } else {
      dispatch(openDetailCommon());
    }
  };
    

  return (
    <div>
      <Modal
       disableEnforceFocus
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="contact__form__model__wrapp">
          <div className="contact__form__model grid grid-cols-1">
            <CloseIcon
              id="contact__form__model__close"
              onClick={() => dispatch(closeInfluencerQuote())}
            />
           <form onSubmit={sendForm} className="grid">
              <input
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="pl-2"
                required
              />
              <input
                type="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-2"
                value={email}
                required
              />
             
              <div className='phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required  defaultCountry='IN'
               />
              </div>
              

              <FormControl style={{ marginTop: "13px" }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  displayEmpty
                  name='service'
                  value={serviceName}
                  onChange={handleChange}
                  input={
                    <Input
                      style={{
                        border: "#c4c4c4 solid  1px ",
                        height: "50px",
                        borderBottom: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{ color: "#8b8a8a" }}>Services</p>;
                    }    

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                     
                      <Checkbox checked={serviceName.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
                name='detail'
                className="pl-2"
              />
               <ReCAPTCHA className='mt-3'
               sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
                <button disabled={!verified}  type='submit'>{sending ? 'SENDING...':'SEND'}</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// DOMAIN QUOTE FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function DomainQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [serviceName, setServiceName] = useState(["Domain"]);
  const open = useSelector((state) => state.domainQuoteControl);
  const dispatch = useDispatch();
  const [sending,setSending] = useState(false)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(typeof value === "string" ? value.split(",") : value);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    setSending(true)
    const docRef = await addDoc(collection(db, 'lead'), {
      name:name,
      phone:phone,
      email:email,
      details:details,
      service:serviceName,
      questionaire: [],
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
     
     }) 
     addDoc(collection(db,'mail'),{
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
    })
    setSending(false)
    setVerified(false)
    dispatch(addFormId(docRef.id))
    dispatch(closeDomainQuote());
    if (serviceName.length < 2 && serviceName == services[11]) {
      dispatch(openDetailDomain());
    } else {
      dispatch(openDetailCommon());
    }
  };

  return (
    <div>
      <Modal
       disableEnforceFocus
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="contact__form__model__wrapp">
          <div className="contact__form__model grid grid-cols-1">
            <CloseIcon
              id="contact__form__model__close"
              onClick={() => dispatch(closeDomainQuote())}
            />
            <form onSubmit={sendForm} className="grid">
              <input
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="pl-2"
                required
              />
              <input
                type="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-2"
                value={email}
                required
              />
             
              <div className='phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required  defaultCountry='IN'
               />
              </div>
              

              <FormControl style={{ marginTop: "13px" }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  displayEmpty
                  name='service'
                  value={serviceName}
                  onChange={handleChange}
                  input={
                    <Input
                      style={{
                        border: "#c4c4c4 solid  1px ",
                        height: "50px",
                        borderBottom: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{ color: "#8b8a8a" }}>Services</p>;
                    }    

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                     
                      <Checkbox checked={serviceName.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
                name='detail'
                className="pl-2"
              />
               <ReCAPTCHA className='mt-3'
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
                 <button disabled={!verified}  type='submit'>{sending ? 'SENDING...':'SEND'}</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// HOSTING QUOTE FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function HostingQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [serviceName, setServiceName] = useState(["Hosting"]);
  const open = useSelector((state) => state.hostingQuoteControl);
  const dispatch = useDispatch();
  const [sending,setSending] = useState(false)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(typeof value === "string" ? value.split(",") : value);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    setSending(true)
    const docRef = await addDoc(collection(db, 'lead'), {
      name:name,
      phone:phone,
      email:email,
      details:details,
      service:serviceName,
      questionaire: [],
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
    
     }) 
     addDoc(collection(db,'mail'),{
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
    })
    setSending(false)
    setVerified(false)
    dispatch(addFormId(docRef.id))
    dispatch(closeHostingQuote());
    if (serviceName.length < 2 && serviceName == services[12]) {
      dispatch(openDetailHosting());
    } else {
      dispatch(openDetailCommon());
    }
  };
     
  return (
    <div>
      <Modal
       disableEnforceFocus
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="contact__form__model__wrapp">
          <div className="contact__form__model grid grid-cols-1">
            <CloseIcon
              id="contact__form__model__close"
              onClick={() => dispatch(closeHostingQuote())}
            />
            <form onSubmit={sendForm} className="grid">
              <input
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="pl-2"
                required
              />
              <input
                type="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-2"
                value={email}
                required
              />
             
              <div className='phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required  defaultCountry='IN'
               />
              </div>
              

              <FormControl style={{ marginTop: "13px" }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  displayEmpty
                  name='service'
                  value={serviceName}
                  onChange={handleChange}
                  input={
                    <Input
                      style={{
                        border: "#c4c4c4 solid  1px ",
                        height: "50px",
                        borderBottom: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{ color: "#8b8a8a" }}>Services</p>;
                    }    

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                     
                      <Checkbox checked={serviceName.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
                name='detail'
                className="pl-2"
              />
               <ReCAPTCHA className='mt-3'
                 sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
            <button disabled={!verified}  type='submit'>{sending ? 'SENDING...':'SEND'}</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}


// ANIMATION QUOTE FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function AnimationQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [serviceName, setServiceName] = useState(["Animation"]);
  const open = useSelector((state) => state.animationQuoteControl);
  const dispatch = useDispatch();
  const [sending,setSending] = useState(false)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(typeof value === "string" ? value.split(",") : value);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    setSending(true)
    const docRef = await addDoc(collection(db, 'lead'), {
      name:name,
      phone:phone,
      email:email,
      details:details,
      service:serviceName,
      questionaire: [],
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
    
     }) 
     addDoc(collection(db,'mail'),{
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
    })  
    setSending(false)
    setVerified(false)
    dispatch(addFormId(docRef.id))
    dispatch(closeAnimationQuote());
    if (serviceName.length < 2 && serviceName == services[13]) {
      dispatch(openDetailAnimation());
    } else {
      dispatch(openDetailCommon());
    }
  };
 

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="contact__form__model__wrapp">
          <div className="contact__form__model grid grid-cols-1">
            <CloseIcon
              id="contact__form__model__close"
              onClick={() => dispatch(closeAnimationQuote())}
            />
             <form onSubmit={sendForm} className="grid">
              <input
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="pl-2"
                required
              />
              <input
                type="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-2"
                value={email}
                required
              />
             
              <div className='phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required  defaultCountry='IN'
               />
              </div>
              

              <FormControl style={{ marginTop: "13px" }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  displayEmpty
                  name='service'
                  value={serviceName}
                  onChange={handleChange}
                  input={
                    <Input
                      style={{
                        border: "#c4c4c4 solid  1px ",
                        height: "50px",
                        borderBottom: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{ color: "#8b8a8a" }}>Services</p>;
                    }    

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                     
                      <Checkbox checked={serviceName.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
                name='detail'
                className="pl-2"
              />
               <ReCAPTCHA className='mt-3'
                 sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
              <button disabled={!verified}  type='submit'>{sending ? 'SENDING...':'SEND'}</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// AI QUOTE FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function AiQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [serviceName, setServiceName] = useState(["Artificial Intelligence"]);
  const open = useSelector((state) => state.aiQuoteControl);
  const dispatch = useDispatch();
  const [sending,setSending] = useState(false)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(typeof value === "string" ? value.split(",") : value);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    setSending(true)
    const docRef = await addDoc(collection(db, 'lead'), {
      name:name,
      phone:phone,
      email:email,
      service:serviceName,
      details:details,
      questionaire: [],
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
     
     }) 
     addDoc(collection(db,'mail'),{
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
    })
    setSending(false)
    setVerified(false)
    dispatch(addFormId(docRef.id))
    dispatch(closeAiQuote());
    if (serviceName.length < 2 && serviceName == services[14]) {
      dispatch(openDetailAi());
    } else {
      dispatch(openDetailCommon());
    }
  };

  return (
    <div>
      <Modal
       disableEnforceFocus
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="contact__form__model__wrapp">
          <div className="contact__form__model grid grid-cols-1">
            <CloseIcon
              id="contact__form__model__close"
              onClick={() => dispatch(closeAiQuote())}
            />
            <form onSubmit={sendForm} className="grid">
              <input
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="pl-2"
                required
              />
              <input
                type="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-2"
                value={email}
                required
              />
             
              <div className='phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required  defaultCountry='IN'
               />
              </div>
              

              <FormControl style={{ marginTop: "13px" }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  displayEmpty
                  name='service'
                  value={serviceName}
                  onChange={handleChange}
                  input={
                    <Input
                      style={{
                        border: "#c4c4c4 solid  1px ",
                        height: "50px",
                        borderBottom: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{ color: "#8b8a8a" }}>Services</p>;
                    }    

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                     
                      <Checkbox checked={serviceName.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
                name='detail'
                className="pl-2"
              />
               <ReCAPTCHA className='mt-3'
                 sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
               <button disabled={!verified}   type='submit'>{sending ? 'SENDING...':'SEND'}</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// GAME QUOTE FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function GameQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [serviceName, setServiceName] = useState(["Game Develoment"]);
  const open = useSelector((state) => state.gameQuoteControl);
  const dispatch = useDispatch();
  const [sending,setSending] = useState(false)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(typeof value === "string" ? value.split(",") : value);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    setSending(true)
    const docRef = await addDoc(collection(db, 'lead'), {
      name:name,
      phone:phone,
      email:email,
      details:details,
      service:serviceName,
      questionaire: [],
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
    
     }) 
     addDoc(collection(db,'mail'),{
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
    })
    setVerified(false)
    setSending(false)
    dispatch(addFormId(docRef.id))
    dispatch(closeGameQuote());
    if (serviceName.length < 2 && serviceName == services[15]) {
      dispatch(openDetailGame());
    } else {
      dispatch(openDetailCommon());
    }
  };
   
  return (
    <div>
      <Modal
       disableEnforceFocus
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="contact__form__model__wrapp">
          <div className="contact__form__model grid grid-cols-1">
            <CloseIcon
              id="contact__form__model__close"
              onClick={() => dispatch(closeGameQuote())}
            />
            <form onSubmit={sendForm} className="grid">
              <input
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="pl-2"
                required
              />
              <input
                type="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-2"
                value={email}
                required
              />
             
              <div className='phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required  defaultCountry='IN'
               />
              </div>
              

              <FormControl style={{ marginTop: "13px" }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  displayEmpty
                  name='service'
                  value={serviceName}
                  onChange={handleChange}
                  input={
                    <Input
                      style={{
                        border: "#c4c4c4 solid  1px ",
                        height: "50px",
                        borderBottom: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{ color: "#8b8a8a" }}>Services</p>;
                    }    

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                     
                      <Checkbox checked={serviceName.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
                name='detail'
                className="pl-2"
              />
               <ReCAPTCHA className='mt-3'
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
               <button disabled={!verified}   type='submit'>{sending ? 'SENDING...' : 'SEND'}</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
// CLOUD QUOTE FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function CloudQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [serviceName, setServiceName] = useState(["Cloud Computing"]);
  const open = useSelector((state) => state.cloudQuoteControl);
  const dispatch = useDispatch();
  const [sending,setSending] = useState(false)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(typeof value === "string" ? value.split(",") : value);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    setSending(true)
    const docRef = await addDoc(collection(db, 'lead'), {
      name:name,
      phone:phone,
      email:email,
      details:details,
      service:serviceName,
      questionaire: [],
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
    
     }) 
     addDoc(collection(db,'mail'),{
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
    })
    setSending(false)
    setVerified(false)
    dispatch(addFormId(docRef.id))
    dispatch(closeCloudQuote());
    if (serviceName.length < 2 && serviceName == services[16]) {
      dispatch(openDetailCloud());
    } else {
      dispatch(openDetailCommon());
    }
  };
  
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="contact__form__model__wrapp">
          <div className="contact__form__model grid grid-cols-1">
            <CloseIcon
              id="contact__form__model__close"
              onClick={() => dispatch(closeCloudQuote())}
            />
            <form onSubmit={sendForm} className="grid">
              <input
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="pl-2"
                required
              />
              <input
                type="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-2"
                value={email}
                required
              />
             
              <div className='phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required  defaultCountry='IN'
               />
              </div>
              

              <FormControl style={{ marginTop: "13px" }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  displayEmpty
                  name='service'
                  value={serviceName}
                  onChange={handleChange}
                  input={
                    <Input
                      style={{
                        border: "#c4c4c4 solid  1px ",
                        height: "50px",
                        borderBottom: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{ color: "#8b8a8a" }}>Services</p>;
                    }    

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                     
                      <Checkbox checked={serviceName.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
                name='detail'
                className="pl-2"
              />
               <ReCAPTCHA className='mt-3'
                 sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
               <button   type='submit'>SEND</button>
            </form>
            <button disabled={!verified}  type='submit'>{sending ? 'SENDING...':'SEND'}</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
// ROBOTICS QUOTE FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function RoboticsQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [serviceName, setServiceName] = useState(["Robotics"]);
  const open = useSelector((state) => state.roboticsQuoteControl);
  const dispatch = useDispatch();
  const [sending,setSending] = useState(false)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(typeof value === "string" ? value.split(",") : value);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    setSending(true)
    const docRef = await addDoc(collection(db, 'lead'), {
      name:name,
      phone:phone,
      email:email,
      details:details,
      service:serviceName,
      questionaire: [],
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
    
     }) 
     addDoc(collection(db,'mail'),{
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
    })
    setSending(false)
    setVerified(false)
    dispatch(addFormId(docRef.id))
    dispatch(closeRoboticsQuote());
    if (serviceName.length < 2 && serviceName == services[17]) {
      dispatch(openDetailRobotics());
    } else {
      dispatch(openDetailCommon());
    }
  };
 

  return (
    <div>
      <Modal
       disableEnforceFocus
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="contact__form__model__wrapp">
          <div className="contact__form__model grid grid-cols-1">
            <CloseIcon
              id="contact__form__model__close"
              onClick={() => dispatch(closeRoboticsQuote())}
            />
            <form onSubmit={sendForm} className="grid">
              <input
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="pl-2"
                required
              />
              <input
                type="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-2"
                value={email}
                required
              />
             
              <div className='phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required  defaultCountry='IN'
               /> 
              </div>
              

              <FormControl style={{ marginTop: "13px" }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  displayEmpty
                  name='service'
                  value={serviceName}
                  onChange={handleChange}
                  input={
                    <Input
                      style={{
                        border: "#c4c4c4 solid  1px ",
                        height: "50px",
                        borderBottom: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{ color: "#8b8a8a" }}>Services</p>;
                    }    

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                     
                      <Checkbox checked={serviceName.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
                name='detail'
                className="pl-2"
              />
               <ReCAPTCHA className='mt-3'
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
             <button disabled={!verified}  type='submit'>{sending ? 'SENDING...':'SEND'}</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// RESEARCH QUOTE FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function ResearchQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [serviceName, setServiceName] = useState(["Research And Development"]);
  const open = useSelector((state) => state.researchQuoteControl);
  const dispatch = useDispatch();
  const [sending,setSending] = useState(false)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(typeof value === "string" ? value.split(",") : value);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    setSending(true)
    const docRef = await addDoc(collection(db, 'lead'), {
      name:name,
      phone:phone,
      email:email,
      details:details,
      service:serviceName,
      questionaire: [],
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
    
     }) 
     addDoc(collection(db,'mail'),{
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
    })
    setSending(false)
    setVerified(false)
    dispatch(addFormId(docRef.id))
    dispatch(closeResearchQuote());
    if (serviceName.length < 2 && serviceName == services[18]) {
      dispatch(openDetailResearch());
    } else {
      dispatch(openDetailCommon());
    }
  };

  return (
    <div>
      <Modal
       disableEnforceFocus
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="contact__form__model__wrapp">
          <div className="contact__form__model grid grid-cols-1">
            <CloseIcon
              id="contact__form__model__close"
              onClick={() => dispatch(closeResearchQuote())}
            />
             <form onSubmit={sendForm} className="grid">
              <input
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="pl-2"
                required
              />
              <input
                type="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-2"
                value={email}
                required
              />
             
              <div className='phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required  defaultCountry='IN'
               />
              </div>
              

              <FormControl style={{ marginTop: "13px" }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  displayEmpty
                  name='service'
                  value={serviceName}
                  onChange={handleChange}
                  input={
                    <Input
                      style={{
                        border: "#c4c4c4 solid  1px ",
                        height: "50px",
                        borderBottom: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{ color: "#8b8a8a" }}>Services</p>;
                    }    

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                     
                      <Checkbox checked={serviceName.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
                name='detail'
                className="pl-2"
              />
               <ReCAPTCHA className='mt-3'
                 sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
               <button disabled={!verified}  type='submit'>{sending ? 'SENDING...':'SEND'}</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// Graphic QUOTE FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function GraphicQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [serviceName, setServiceName] = useState(["Graphic Designing"]);
  const open = useSelector((state) => state.graphicQuoteControl);
  const dispatch = useDispatch();
  const [sending,setSending] = useState(false)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(typeof value === "string" ? value.split(",") : value);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    setSending(true)
    const docRef = await addDoc(collection(db, 'lead'), {
      name:name,
      phone:phone,
      email:email,
      details:details,
      service:serviceName,
      questionaire: [],
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
    
     }) 
     addDoc(collection(db,'mail'),{
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
    })
    setSending(false)
    setVerified(false)
    dispatch(addFormId(docRef.id))
    dispatch(closeGraphicQuote());
    if (serviceName.length < 2 && serviceName == services[19]) {
      dispatch(openDetailGraphic());
    } else {
      dispatch(openDetailCommon());
    }
  };

  return (
    <div>
      <Modal
       disableEnforceFocus
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="contact__form__model__wrapp">
          <div className="contact__form__model grid grid-cols-1">
            <CloseIcon
              id="contact__form__model__close"
              onClick={() => dispatch(closeGraphicQuote())}
            />
            <form onSubmit={sendForm} className="grid">
              <input
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="pl-2"
                required
              />
              <input
                type="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-2"
                value={email}
                required
              />
             
              <div className='phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required  defaultCountry='IN'
               /> 
              </div>
              

              <FormControl style={{ marginTop: "13px" }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  displayEmpty
                  name='service'
                  value={serviceName}
                  onChange={handleChange}
                  input={
                    <Input
                      style={{
                        border: "#c4c4c4 solid  1px ",
                        height: "50px",
                        borderBottom: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{ color: "#8b8a8a" }}>Services</p>;
                    }    

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                     
                      <Checkbox checked={serviceName.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
                name='detail'
                className="pl-2"
              />
               <ReCAPTCHA className='mt-3'
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
               <button disabled={!verified}  type='submit'>{sending ? 'SENDING...':'SEND'}</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// DATA MIGRATION QUOTE FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function DataQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [serviceName, setServiceName] = useState(["Graphic Designing"]);
  const open = useSelector((state) => state.dataQuoteControl);
  const dispatch = useDispatch();
  const [sending,setSending] = useState(false)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(typeof value === "string" ? value.split(",") : value);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    setSending(true)
    const docRef = await addDoc(collection(db, 'lead'), {
      name:name,
      phone:phone,
      email:email,
      details:details,
      service:serviceName,
      questionaire: [],
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
   
     }) 
     addDoc(collection(db,'mail'),{
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4>Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
    })
    setSending(false)
    setVerified(false)
    dispatch(addFormId(docRef.id))
    dispatch(closeGraphicQuote());
    if (serviceName.length < 2 && serviceName == services[20]) {
      dispatch(openDetailData());
    } else {
      dispatch(openDetailCommon());
    }
  };
 
  return (
    <div>
      <Modal
       disableEnforceFocus
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="contact__form__model__wrapp">
          <div className="contact__form__model grid grid-cols-1">
            <CloseIcon
              id="contact__form__model__close"
              onClick={() => dispatch(closeDataQuote())}
            />
             <form onSubmit={sendForm} className="grid">
              <input
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="pl-2"
                required
              />
              <input
                type="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-2"
                value={email}
                required
              />
             
              <div className='phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required
               />
              </div>
              

              <FormControl style={{ marginTop: "13px" }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  displayEmpty
                  name='service'
                  value={serviceName}
                  onChange={handleChange}
                  input={
                    <Input
                      style={{
                        border: "#c4c4c4 solid  1px ",
                        height: "50px",
                        borderBottom: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{ color: "#8b8a8a" }}>Services</p>;
                    }    

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                     
                      <Checkbox checked={serviceName.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
                name='detail'
                className="pl-2"
              />
               <ReCAPTCHA className='mt-3'
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
                <button disabled={!verified}  type='submit'>{sending ? 'SENDING...':'SEND'}</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}





