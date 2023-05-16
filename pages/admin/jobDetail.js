import SideBar from './sideBar'
import { useSelector } from "react-redux";
import Header from "./header";
import {db} from '../../firebase'
import { addDoc, collection, onSnapshot, orderBy, query,getDoc, doc ,serverTimestamp,deleteDoc,updateDoc} from "@firebase/firestore";
import { useEffect, useState } from "react";
import { parseCookies } from "../api/parseCookies";

export default function JobDetail({admin,career,team,settings,blog, leadState}) {
    const user = useSelector((state) => state.userControl);
    const dataId = useSelector((state) => state.idReducer)
    const [applicants, setApplcants] = useState([])
    const fetchData = async () => {
        const docRef = await doc(db, 'applicants',dataId)
        const data = await getDoc(docRef)
       
        setApplcants( data.data())
       
    }
 useEffect(() =>{
     
     if(dataId){fetchData()}
  },[])
    return (
        <>
        {admin == 'true' ?  <div>
            <Header    career={career}
            blog={blog}
            settings={settings}
            leadState = { leadState}
            team ={team}/>
            <div className='flex'>
          
        <SideBar
        career={career}
        blog={blog}
        settings={settings}
        leadState = { leadState}
        team ={team}
        />
        <div className='mt-10 ml-10 lead__details  '>
            <h1 style={{fontWeight:'800',fontSize:'25px'}}>Lead Details</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 lead__details__content' >
            <div className='basic__details'>
              <h5>Basic Details</h5>
              <div className='basic__details__row flex'>
                  <p>Name:</p>
                  <h6>{applicants.fname} {applicants.lname}</h6>
              </div>
              <div className='basic__details__row flex'>
                  <p>Email:</p>
                  <h6>{applicants.email}</h6>
              </div>
            
              <div className='basic__details__row flex'>
                  <p>Phone:</p>
                  <h6>{applicants.phone}</h6>
              </div>
              <div className='basic__details__row flex'> 
                  <p>Vacancy:</p>
                  <h6>{applicants.designation}</h6>
              </div>
            

              <button 
              ><a href={applicants.cv} download target="_blank"  >Download CV</a> </button>
            </div>
            <div className='lead__question lg:col-span-3'>
          <h5>Questions</h5>
           {applicants.questionaire ? applicants.questionaire.map((q,index)=>{
               return(
                <div key={index} className='lead__question__row '>
                <p>{index+1}.{q.question}</p>
                <h5 className='pt-2'>{q.answer ? q.answer : 'Not found  '}</h5>
            </div>
               )
           }) : <h5 style={{color:'gray'}} className='mt-1'>Not Found</h5>
        }
           
         
            </div>
            </div>
        </div>   </div>
    </div> :""}
        </>
       
    )
}

JobDetail.getInitialProps= ({ req }) => {
    const cookies = parseCookies(req)
  
    return {             
        admin : cookies.Admin,
    career : cookies.career,
    settings : cookies.settings,
    blog : cookies.blog,
    leadState : cookies.leads,
    team : cookies.team
       
    };
  }
  