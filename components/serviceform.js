import { useState } from "react";
import { Input, Modal } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Image from "next/image";
import tick from "../public/images/tick.png";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { addDoc, collection,   query, doc ,serverTimestamp} from "@firebase/firestore";
import {db} from '../firebase'
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber} from 'react-phone-number-input'
import ReCAPTCHA from 'react-google-recaptcha'
import {
  openDetailCommon,
  openDetailWeb,
  openDetailSoftware,
  openDetailApp,
  openDetailGame,
  openDetailGraphic,
  openDetailAnimation,
  openDetailDigital,
  openDetailBranding,
  openDetailSeo,
  openDetailSmm,
  openDetailSms,
  openDetailEmail,
  openDetailInfluencer,
  openDetailDomain,
  openDetailHosting,
  openDetailCloud,
  openDetailAi,
  openDetailRobotics,
  openDetailBusiness,
  openDetailResearch,
  openDetailData,
  addFormId
} from "../redux/actions";

export default function ServiceForm() {
  const [openModal, setOpenModal] = useState(false);
  const [serviceName, setServiceName] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [verified, setVerified] = useState (false)
  const [service, setService] = useState("");
  const [sending, setSending] = useState(false)
  const dispatch = useDispatch();

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        // width: 100,
      },
    },
  };

  const services = [
    "Website Development",
    "Software Development",
    "App Development",
    "Game Develoment",
    "Graphic Designing",
    " Animation",
    "Digital Marketing",
    "Branding",
    "SEO",
    " SMM",
    "Bulk SMS and Voice Calls",
    "Email Marketing",
    "Influencer Marketing",
    "Domain",
    "Hosting",
    "Cloud Computing",
    " Artificial Intelligence",
    "Robotics",
    " Business Consultancy",
    "Research And Development",
    "Data Migration",
  ];

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(
      // On autofill we get a the stringified value.
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
      date:moment(new Date()).unix(),
      timestamp: serverTimestamp(),
      to:['info@cleverkings.com'],
      message:{
        subject: 'Lead',
        html:  `<code>
       <h4> Name : </h4>  <h2> ${name} </h2>
       <h4> Phone :</h4>  <h2>${phone}</h2>
       <h4>  Email :</h4>  <h2>${email}</h2>
       <h4>  Services :</h4> <h2>${serviceName}</h2>
       <h4>  Details :</h4>   <h2>${details}</h2>
        </code>` ,
      }
     
    }) 
    dispatch(addFormId(docRef.id))
 setSending(false)
 setVerified(false)
 setName(null)
 setEmail(null)
 setPhone(null)
 
    if (serviceName.length < 2) {
      if (serviceName == services[0]) {
        dispatch(openDetailWeb());
      } else if (serviceName == services[1]) {
        dispatch(openDetailSoftware());
      } else if (serviceName == services[2]) {
        dispatch(openDetailApp());
      } else if (serviceName == services[3]) {
        dispatch(openDetailGame());
      } else if (serviceName == services[4]) {
        dispatch(openDetailGraphic());
      } else if (serviceName == services[5]) {
        dispatch(openDetailAnimation());
      } else if (serviceName == services[6]) {
        dispatch(openDetailDigital());
      } else if (serviceName == services[7]) {
        dispatch(openDetailBranding());
      } else if (serviceName == services[8]) {
        dispatch(openDetailSeo());
      } else if (serviceName == services[9]) {
        dispatch(openDetailSmm());
      } else if (serviceName == services[10]) {
        dispatch(openDetailSms());
      } else if (serviceName == services[11]) {
        dispatch(openDetailEmail());
      } else if (serviceName == services[12]) {
        dispatch(openDetailInfluencer());
      } else if (serviceName == services[13]) {
        dispatch(openDetailDomain());
      } else if (serviceName == services[14]) {
        dispatch(openDetailHosting());
      } else if (serviceName == services[15]) {
        dispatch(openDetailCloud());
      } else if (serviceName == services[16]) {
        dispatch(openDetailAi());
      } else if (serviceName == services[17]) {
        dispatch(openDetailRobotics());
      } else if (serviceName == services[18]) {
        dispatch(openDetailBusiness());
      } else if (serviceName == services[19]) {
        dispatch(openDetailResearch());
      } else if (serviceName == services[19]) {
        dispatch(openDetailResearch());
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
    <div className="service__form">
      <h2>Quick Contact</h2>
      <form onSubmit={sendForm}>
        <input name='name' onChange={(e)=>setName(e.target.value)} placeholder="Name" className="pl-2" />
        <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="pl-2" />
        <div className='service__form_phone__input'>
              <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
               value={phone}
               onChange={setPhone}
               required
               defaultCountry='AE'
               />
              </div>

        <FormControl
          className=" w-full service__form__select"
          style={{ marginTop: "20px" }}
        >
          {/* <InputLabel id="demo-multiple-checkbox-label">Services</InputLabel> */}
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            displayEmpty
            value={serviceName}
            onChange={handleChange}
            input={
              <Input
                style={{
                  border: "#c4c4c4 solid  1px ",
                  height: "45px",
                  borderBottom: "none",
                  paddingLeft: "5px",
                }}
              />
            }
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <p>Services</p>;
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
        <ReCAPTCHA className='mt-3'
                 sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
                  <button disabled={!verified}  type='submit'>{sending ? "SENDING..." : 'SEND'} </button>
      </form>
 
    </div>
  );
}

// THIS IS COMMON FORM FOR  SERVICE PAGES
