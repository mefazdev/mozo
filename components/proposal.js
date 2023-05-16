import { useState } from "react";
import { Modal } from "@material-ui/core";
import { addDoc, collection,   query, doc ,serverTimestamp} from "@firebase/firestore";
import { db } from '../firebase'
import ReCAPTCHA from 'react-google-recaptcha'

import {
  
  openDetailWeb,
  openDetailSoftware,
   openDetailApp,
   openDetailGame,
   openDetailGraphic,
   openDetailAnimation,
   openDetailDigital ,
   openDetailBranding,
  openDetailSeo,
   openDetailSmm,
   openDetailSms,
   openDetailEmail ,
   openDetailInfluencer,
   openDetailDomain,
   openDetailHosting ,
   openDetailCloud,
   openDetailAi ,
   openDetailRobotics,
  openDetailBusiness,
  openDetailResearch,
  openDetailData,
  addFormId
  } from '../redux/actions'
import { useDispatch } from "react-redux";
import moment from "moment";


export default function Proposal({type} ) {
 
  const [serviceName, setServiceName] = useState([]);
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')
  const [business, setBusiness] = useState('')
  const [sending, setSending] = useState(false)
  const [verified, setVerified] = useState(false)
  const dispatch = useDispatch()

  const sendForm = async(e) =>{
    
   e.preventDefault();
   setSending(true)
    const docRef = await addDoc(collection(db,'lead'), {
   proposal: `Hello, My name is ${name} and my phone number is ${phone}. and I would like to discuss about ${type}. I hope you can do the best!.
   This ${type} is for my ${business} business. I'm Located in ${location}.
   `,
   name:name,
   phone:phone,
   service:[type],
   date:moment(new Date()).unix(),
   timestamp: serverTimestamp(),
   to:['info@cleverkings.com'],
   message:{
     subject: 'Lead',
     html:  `<code>
    <h4>
    Hello, My name is ${name} and my phone number is ${phone}. and I would like to discuss about ${type}. I hope you can do the best!.
   This ${type} is for my ${business} business. I'm Located in ${location}.
    </h4>   
     </code>` ,
   }
  
 })
  setSending(false)
  setName('')
  setPhone('')
  setLocation('')
  setBusiness('')
  dispatch(addFormId(docRef.id))
    
    

    if (type === 'Website'){
      dispatch(openDetailWeb())
    }else if(type === 'Software'){
      dispatch(openDetailSoftware())
    }else if(type === 'App'){
      dispatch(openDetailApp())
    }else if(type === 'Game Development'){
      dispatch(openDetailGame())
    }else if(type === 'Graphic Design'){
      dispatch(openDetailGraphic())
    }else if(type === 'Animation'){
      dispatch(openDetailAnimation())
    }else if(type === 'Digital Marketing'){
      dispatch(openDetailDigital())
    }else if(type === 'Branding'){
      dispatch(openDetailBranding())
    }else if(type === 'SEO'){
      dispatch(openDetailSeo())
    }else if(type === 'SMM'){
      dispatch(openDetailSmm())
    }else if(type === 'Bulk SMS and Voice calls'){
      dispatch(openDetailSms())
    }else if(type === 'Email Marketing'){
      dispatch(openDetailEmail())
    }else if(type === 'Influencer Marketing'){
      dispatch(openDetailInfluencer())
    }else if(type === 'Domain'){
      dispatch(openDetailDomain())
    }else if(type === 'Hosting'){
      dispatch(openDetailHosting())
    }else if(type === 'Cloud Computing'){
      dispatch(openDetailCloud())
    }else if(type === 'Artificial Intelligence'){
      dispatch(openDetailAi())
    }else if(type === 'Robotics'){
      dispatch(openDetailRobotics())
    }else if(type === 'Business Consultancy'){
      dispatch(openDetailBusiness())
    }else if(type === 'Research And Development'){
      dispatch(openDetailResearch())
    }
    else if(type === 'Data Migration'){
      dispatch(openDetailData())
    }
  }
  return (
    <div className="proposal">
      <div className="proposal__continer container">
        <h2>PITCH US</h2>

        <form onSubmit={sendForm}>
          <div>
            <h5> Hello,</h5>

            <span>
              <p>
                My name is <input required placeholder="Your name here" value={name} onChange={(e)=> setName(e.target.value)} /> and my phone
                number is <input required placeholder="Enter Mobile number" value={phone} onChange={(e)=> setPhone(e.target.value)} /> and I
                would like to discuss about {type}.
                <br />
                I hope you can do the best!.
                <br />
                {/*  type change according to services */}
                This {type} is for my
                <input placeholder="Enter business name" required value={business} onChange={(e)=>setBusiness(e.target.value)} /> business. I'm
                Located in <input placeholder="Enter youer location" required value={location}  onChange={(e)=>setLocation(e.target.value)} />
              </p>
            </span>
           
          </div>
           <div className='grid grid-cols-1 lg:grid-cols-3'>
           <ReCAPTCHA  className='ml-5' style={{margin:'auto'}}
              theme='dark'
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
               <button type='submit' disabled={!verified}>{sending ? "SENDING..." : 'SEND'} </button>
           </div>
        
        </form>
        
      </div>
       
    
    </div>
  );
}
