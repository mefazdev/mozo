import SideBar from "./sideBar"
import { useSelector } from "react-redux";
import Header from "./header";
import {db} from '../../firebase'
import { addDoc, collection, onSnapshot, orderBy, query,getDoc, doc ,serverTimestamp,deleteDoc,updateDoc} from "@firebase/firestore";
import { useEffect, useState } from "react";
import { parseCookies } from "../api/parseCookies";

export default function LeadDetails({admin,career,team,settings,blog, leadState}) {
    const user = useSelector((state) => state.userControl);
    const dataId = useSelector((state) => state.idReducer)
    const [lead, setLead] = useState([])
    
  
    const fetchData = async () => {
       const docRef = await doc(db, 'lead',dataId)
       const data = await getDoc(docRef)
      
       setLead( data.data())
      
   }
useEffect(() =>{
    
    if(dataId){fetchData()}
 },[])

    return (
        <>
        {admin == 'true' ?  <div >
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
            <div className='mt-10 ml-10 lead__details '>
                <h1 style={{fontWeight:'800',fontSize:'25px'}}>Lead Details</h1>
                <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-10 lead__details__content' >
                <div className='basic__details'>
                  <h5>Basic Details</h5>
                  <div className='basic__details__row flex'>
                      <p>Name:</p>
                      <h6>{lead.name}</h6>
                  </div>
                  <div className='basic__details__row flex'>
                      <p>Email:</p>
                      <h6>{lead.email}</h6>
                  </div>
                  
                  <div className='basic__details__row flex'>
                      <p>Phone:</p>
                      <h6>{lead.phone}</h6>
                  </div>
                  <div className='basic__details__row flex'>
                      <p>Service:</p>
                      <h6>{lead.service} </h6>
                  </div>
                  <div className='basic__details__row flex'>
                      <p>Description:</p>
                      <h6>{lead.details}</h6>
                  </div>
                </div>
                <div className='lead__question lg:col-span-3'>
                {lead.proposal ?
                 <p className='proposal__text'>{lead.proposal}</p>
                 : ''}
              <h5>Questions</h5>
              
   
            {lead.questionaire ?  lead.questionaire.map((q,index) =>{
                      return (
                        <div key={index} className='lead__question__row'>
                         
                        <p>{index+1}.{q.question}</p>
                        <h5 className='pt-2'>{q.answer ? q.answer : "Not found"}</h5>
                    </div>
                      )
                  }) : <h5 style={{color:'gray'}} className='mt-1'>Not Found</h5>}
             
                
                </div>
                </div>
            </div> 
            </div>
        </div>  : ""}
        </>
       
    )
}

LeadDetails.getInitialProps= ({ req }) => {
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
  
  


