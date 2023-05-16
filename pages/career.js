import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import job from "../public/images/career/job.png";
import icon1 from "../public/images/career/icon1.png";
import icon2 from "../public/images/career/icon2.png";
import icon3 from "../public/images/career/icon3.png";
import icon4 from "../public/images/career/icon4.png";
import icon5 from "../public/images/career/icon5.png";
import icon6 from "../public/images/career/icon6.png";
import notFound from "../public/images/career/not-found.png";
import { useEffect, useState } from "react";
import { Modal,Theme, makeStyles, } from "@material-ui/core";
import tick from "../public/images/tick.png";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { addDoc, collection, onSnapshot, orderBy, query,getDoc, doc ,serverTimestamp,deleteDoc,updateDoc, snapshotEqual} from "@firebase/firestore";
import {db,storage} from '../firebase'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import ReCAPTCHA from 'react-google-recaptcha'
import moment from 'moment';
import {  ref,uploadString, getDownloadURL } from "firebase/storage";
import Pixel from '../components/pixel'
import Head from 'next/head'
import { openSuccessAlert } from "../redux/actions";
import {  useDispatch } from "react-redux";
export default function Career() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
 const [openForm,setOpenForm] = useState(false)
const [openings, setOpenings] = useState([])
const [designation, setDesignation] = useState('')
const [fname, setFname] = useState('')
const [lname, setLname] = useState('') 
const [email,  setEmail] = useState('')
const [phone, setPhone] = useState('')
const [uploading, setUploading] = useState(false);
const [updating, setUpdating] = useState(false)
const [cv, setCv] = useState([])
const [formId, setFormId] = useState('')
const [verified, setVerified] = useState(false)  
const [answer1, setAnswer1] = useState("");
const [answer2, setAnswer2] = useState("");
const [answer3, setAnswer3] = useState("");
const [answer4, setAnswer4] = useState("");
const [answer5, setAnswer5] = useState("");
const [answer6, setAnswer6] = useState("");
const [answer7, setAnswer7] = useState("");
const [answer8, setAnswer8] = useState("");
const [answer9, setAnswer9] = useState("");
const [answer10, setAnswer10] = useState("");
const [answer11, setAnswer11] = useState("");
const [answer12, setAnswer12] = useState("");
const [answer13, setAnswer13] = useState("");
const [answer14, setAnswer14] = useState("");

const updateDetails = async () => {
 setUpdating(true)
  const docRef = doc(db, "applicants", formId);
  const updateRef = await updateDoc(docRef, {
    questionaire: [
      {
        question: "Tell us about yourself?",
        answer: answer1,
      },
      {
        question: 'Why should we hire you?',
        answer: answer2,
      },
      {
        question: 'What accomplishment are you most proud of?',
        answer: answer3,
      },
      {
        question: 'Why do you want to work in this field?',
        answer: answer4,
      },
      {
        question: 'What are your strengths?',
        answer: answer5,
      },
      {
        question: 'What are your goals?',
        answer: answer6,
      },
      {
        question: 'Why do you want this job?',
        answer: answer7,
      },
      {
        question: 'What are your interests?',
        answer: answer8,
      },
      {
        question: 'What is your major qualification?',
        answer: answer9,
      },
      {
        question: 'What specific skill set do you bring to this job?',
        answer: answer10,
      },
      {
        question: '      Tell us about a time your planned and accomplished a challenging goal?',
        answer: answer11,
      },
      {
        question: 'What are you passionate about?',
        answer: answer12,
      },
      {
        question: 'What are you currently working on?',
        answer: answer13,
      },
      {
        question: 'What are your hobbies?',
        answer: answer14,
      },
    ],
  });
  setOpen(false)
  setUpdating(false)
  dispatch(openSuccessAlert())
};

const fetchData = async () => {
  const q = await query(collection(db,'openings'),orderBy('timestamp','desc'))
  onSnapshot(q, (snapshot) => {
    setOpenings(snapshot.docs.map((doc) => doc))

  })
  }

  useEffect(() => {
    fetchData(); 
  }, [])
 
  const applyJob = async(id) =>{
    setOpenForm(true)
    const docRef = doc(db,'openings',id)
    const data = await getDoc(docRef);
    const designation = data.data().designation
    setDesignation(designation)
  

  }

  const handleChange = (e) =>{
 const reader = new FileReader();
 if(e.target.files[0]){
   reader.readAsDataURL(e.target.files[0])
 }
 reader.onload = (readerEvent) =>{
   setCv(readerEvent.target.result)

 
 }
}

 const sendForm = async (e)=> {
   
    setUploading(true);
    e.preventDefault();
      const docRef = await addDoc(collection(db,'applicants'),{
      fname : fname,
      lname : lname,
      email : email,
      phone : phone,
      designation : designation,
      questionaire: null,
      date:moment(new Date()).unix(),
      timestamp : serverTimestamp(),
     
       })
       addDoc(collection(db,'mail'),{
        to:['career@cleverkings.com'],
        message:{
          subject: 'Job application',
          html:  `<code>
          <h4>Name : </h4>  <h2> ${fname+" "+lname} </h2>
          <h4> Phone :</h4>  <h2>${phone}</h2>
         <h4>  Email :</h4>  <h2>${email}</h2>
         <h4>  Designation :</h4> <h2>${designation}</h2>
     
          </code>` , 
        }
      })
       const fileRef = ref(storage, `cv/${docRef.id}/cv`);
       await uploadString(fileRef,cv,'data_url').then(async snapshot => {
         const downloadURL = await getDownloadURL(fileRef);
           await updateDoc(doc(db,'applicants',docRef.id),{
           cv : downloadURL
         })
       })
       setFormId(docRef.id)
       setUploading(false);
       setOpenForm(false)
       setOpen(true);
       setDesignation(null)
       setFname(null)
       setLname(null) 
       setPhone(null)
       setEmail(null)
       setCv(null)
       setVerified(false)

  

 

 }
  
  return (
    <>  <Head>
    <title> </title>
    <meta property="og:title" content="Blog" key="title" />
    
  </Head>
     <Pixel name='FACEBOOK_PIXEL_1' />
   
    <div className="career">
      <div className="career__header">
        <Header />
        <h1>JOIN WITH US</h1>
        <h3>Lets Learn and Grow Together</h3>
      </div>

      <div className="career__content container">
        <div className="career__sub__head pb-3 ">
          <h2>Right Skills Right Jobs </h2>
        </div>

        <div className="career__first__row   grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="career__first__row__left col-span-2">
            <p>
              Welcome to the career service of Mozo tech, providing
              comprehensive employment business solutions and support, service
              employers and job seekers. Our services include offers for job
              seekers and businesses of any size, effective recruitment, hiring,
              and training expert services. We address any employment as an
              entry point to the extensive network of public and private support
              programs. Ourselves get committed to career and professional
              development, fully prepared to succeed and to find a purposeful
              position to the individuals. The strong belief in us, redefine the
              work and career towards passion can articulate professional skills
              and activities. Career service here offer encouragement to the
              true ones and cast them to be a purpose-driven leader ready to
              tackle any challenge. We love to guide you at each stage of your
              professional journey, starting from building your professional
              identity to taking you inside. Let's work together towards
              achieving career aspirations. Check out the current openings!
            </p>
            {/*<<<<<<<<<<<<<<<<<<<<<<< CURRENT OPENING BUTTON >>>>>>>>>>>>>>>>> */}
            {/* <button>View Current Openings</button> */}
          </div>

          <div className="career__first__row___img  order-first md:order-last">
            <Image src={job} />
          </div>
        </div>  
      </div>

      <div className="career__second__row">
        <h2>Check out our benefits</h2>

        <div className="career__icons__row p-5 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
          <div className="career__icon__box">
            <div className="carrer__icon">
              <Image src={icon1} />
            </div>
            <h4>Tuition Reimbursement</h4>
          </div>
          <div className="career__icon__box">
            <div className="carrer__icon">
              <Image src={icon2} />
            </div>
            <h4>Corporate Discounts</h4>
          </div>
          <div className="career__icon__box">
            <div className="carrer__icon">
              <Image src={icon3} />
            </div>
            <h4>Paid Vacation</h4>
          </div>
          <div className="career__icon__box">
            <div className="carrer__icon">
              <Image src={icon4} />
            </div>
            <h4>Performance Bonus</h4>
          </div>
          <div className="career__icon__box">
            <div className="carrer__icon">
              <Image src={icon5} />
            </div>
            <h4>Office Perks</h4>
          </div>
          <div className="career__icon__box">
            <div className="carrer__icon">
              <Image src={icon6} />
            </div>
            <h4>Employee Training</h4>
          </div>
        </div>
      </div>



       <div className='career__openings'>
         <h2>Current openings</h2>
         <div className='career__openings__content'>
        <div className='career__openings__content__row'>
          {openings.length == 0 ? 
           <div >
             <div className='notFound__img'>   
             <Image src={notFound } />
             <h6>No openings now</h6>
             </div>
               
         </div>
          : ''}
      
        {openings.map((data,index) =>{
           if (data.data().show){
            return(
            
              <Accordion key={index} id='opening__accordion' className='pt-2 pl-3 pr-3 '>
              <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <div className='career__item__title'>
                    <div className='flex'>
                    <div className='rounded-full career__item__no'><p>{index+1}</p></div>
                    <div className='career__item__title__right'>
                      <h2>{data.data().designation}</h2>
                      <h4>{data.data().experience} Year Exp</h4>
                    </div>
                    </div>
                   
      
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div>
                  <p id='career__item__description'>{data.data().description}</p>
                 <div className='career__item__skill'> 
                <h6>Skills required:</h6>
                {data.data().skill.map((skill,index) =>{
                  return(
                    <p key={index}>{skill}</p>
                  )
                })}
                <p></p>
                 </div>
                 <button id='career__apply__btn' value={data.id} onClick={(e)=>applyJob(e.target.value)}>APPLY NOW</button>
                  </div>
                
                </Typography>
              </AccordionDetails>
            </Accordion>
            )
           }
        
        })}
       
      </div>
         </div>
       </div>




 {/*<<<<<<<<<<<<<<<<<<<<<<<< CAREER FORM >>>>>>>>>>>>>>>>> */}
<Modal

hideBackdrop='true'
id='career__form__modal'
open={openForm}
aria-labelledby="simple-modal-title"
aria-describedby="simple-modal-description"
>
 <div className="career__form__row container">
        <h2>Apply for your dream job!</h2>

        <div className="career_form grid grid-cols-1 xl:grid-cols-3">
          <div className="career__from__left pt-5 col-span-2">
            <form onSubmit={sendForm} >
              <div
                className="grid grid-cols-1 md:grid-cols-2 "
                style={{ maxWidth: "1000px", margin: "auto" }}
              >
                <input required  name='fname' value={fname} onChange={(e)=> setFname(e.target.value)}  placeholder="First Name" />
                <input required name='lname' value={lname} onChange={(e)=> setLname(e.target.value)} placeholder="Last Name" />
              </div>
              <div
                className="grid grid-cols-1 md:grid-cols-2 "
                style={{ maxWidth: "1000px", margin: "auto" }}
              >
                <input  required type="email" placeholder="Email Address" name='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                
                <div className='career__phone__input'>
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
            
              
              </div>
              <div
                className="grid grid-cols-1 md:grid-cols-2 "
                style={{ maxWidth: "1000px", margin: "auto" }}
              >
                <input
                  placeholder="Select Job"
                  value = {designation}
                  name="job"
                  required
                
                />

               

                <div className="grid custome__input__div">
                  <input
                    required
                    type="file"
                    className="custom-file-input"
                   onChange={handleChange}
                  />
                  <FileCopyIcon id="upload__icons" />
                </div>
              </div>
              <div
                className="grid grid-cols-1 md:grid-cols-2 "
                style={{ maxWidth: "1000px", margin: "auto" }}
              >
                
                <ReCAPTCHA className='mt-3'
                 sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             />
                 <button type='submit' disabled={!verified}  > {uploading ? 'Applying...':'APPLY'}</button>
              </div>
              
            </form>
           
         
          </div>

          <div className="best__font">
            <h2>Best of luck!</h2>
          </div>
        </div>
      </div> 
</Modal>
     
      

      <Footer />

      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>Tell us about yourself?</h6>
                </div>

                <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6> Why should we hire you?</h6>
                </div>
                <input
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6>What accomplishment are you most proud of?</h6>
                </div>
                <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6>Why do you want to work in this field?</h6>
                </div>
                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>What are your strengths?</h6>
                </div>
                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6>What are your goals?</h6>
                </div>
                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>Why do you want this job?</h6>
                </div>
                <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6>What are your interests?</h6>
                </div>
                <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>9.</p>
                  <h6>What is your major qualification?</h6>
                </div>
                <input
                  value={answer9}
                  onChange={(e) => setAnswer9(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>10.</p>
                  <h6>What specific skill set do you bring to this job?</h6>
                </div>
                <input
                  value={answer10}
                  onChange={(e) => setAnswer10(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>11.</p>
                  <h6>
                    Tell us about a time your planned and accomplished a
                    challenging goal?
                  </h6>
                </div>
                <input
                  value={answer11}
                  onChange={(e) => setAnswer11(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>12.</p>
                  <h6>What are you passionate about?</h6>
                </div>
                <input
                  value={answer12}
                  onChange={(e) => setAnswer12(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>13.</p>
                  <h6>What are you currently working on?</h6>
                </div>
                <input
                  value={answer13}
                  onChange={(e) => setAnswer13(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>14.</p>
                  <h6>What are your hobbies?</h6>
                </div>
                <input
                  value={answer14}
                  onChange={(e) => setAnswer14(e.target.value)}
                />
              </div>
            </form>

            <div className="modal__from__buttons">
              <button onClick={() => setOpen(false)} id="modal__from__close">
                CLOSE
              </button>
              <button id="modal__from__send" onClick={updateDetails}> {updating ? 'Sending...' :'SEND'}</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
    </>
  );
}
