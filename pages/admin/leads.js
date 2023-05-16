import SideBar from "./sideBar";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {db} from '../../firebase'
import { addDoc, collection, onSnapshot, orderBy, query,getDoc, doc ,serverTimestamp,deleteDoc,updateDoc, where, getDocs, QuerySnapshot} from "@firebase/firestore";
import { shouldForwardProp } from "@mui/styled-engine";
import moment from 'moment';
import GenericPdfDownloader from '../../components/GenericPdfDownloader'
import { useDispatch } from "react-redux";
import {userIn, fetchId} from '../../redux/actions';
import Header from './header'
import Link from 'next/link'
import LeadDetails from "./leadDetails";
import { parseCookies } from "../api/parseCookies";
import {

  superAdmin,
  showSettings,
  showJob,
  showLead,
  showBlog,
  showTeam,
} from "../../redux/actions"

export default function Leads({admin,career,team,settings,blog, leadState}) {
  
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userControl);
  const [leads,setLeads] = useState([]);
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  // const [value, setValue] = useState()
  const fetchData= async ()=>{
    const q = await query(collection(db, 'lead'),orderBy('timestamp','desc'))
    onSnapshot(q, (snapshot) => {
    setLeads(snapshot.docs.map((doc) => doc))

 }) 
 }

useEffect( async()  => {
     fetchData(); 
}, [])


const filter = async () =>{
const start = moment (new Date(startDate)).unix()
const end = moment (new Date(endDate)).unix()
 const docRef = collection(db,'lead')
   const q = await query(docRef, where('date', '>=', start),where('date', '<=', end))
   const querySnapshot = await getDocs(q)
        setLeads(querySnapshot.docs)
 
 }
 



  return (
    <>
      {admin == 'true' ? (
        <div >
          <Header  career={career}
            blog={blog}
            settings={settings}
            leadState = { leadState}
            team ={team}/>
         
          <div className='flex'>
 <SideBar 
           career={career}
            blog={blog}
            settings={settings}
            leadState= { leadState}
            team ={team}
            />
        
          <div className="admin__leads">
            <div>
              <h1>Leads</h1>
            </div>
            <div className="admin__leads__head__row">
              <div className="admin__leads__head__left flex">
                <input value={startDate} onChange={((e)=> setStartDate(e.target.value))} placeholder="MMM/DD/YY" />
                <p>To</p>
                <input value={endDate} onChange={((e) => setEndDate(e.target.value))} placeholder="MMM/DD/YY" />
                <button onClick={filter}>Go</button>
              </div>
              <GenericPdfDownloader 
                downloadFileName="Leads" 
                rootElementId="pdfDoc" 
              
              />
             
            </div>

            <div className="admin__leads__content" id="pdfDoc">
              <table id='admin__lead__table' style={{ width: "100%" }}>
                <tr className="leads__content__head">
                  <th style={{ maxWidth: "20px" }}>
                    #
                  </th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th >Date</th>
                  <th>Service</th>
                </tr>

                {leads && leads.map((lead, index) => {
                  const d = lead.data().date
                  const date = moment.unix(d).format("MMM DD, YY");
                  const length = leads.length
                  const no= length - index
                  const s = lead.data().service
                  if(s){
                    const service = s.join(", ")
                  }
                  
                  return (
                    <Link key={index} href='leadDetails' >
                     <tr
                    onClick={() => dispatch(fetchId(lead.id))}
                      className={
                        index % 2 == 0 ? "lead__row" : "lead__row__gray"
                      }
                    >      
                      <td >{no}</td>
                      <td>{lead.data().name}</td>
                      <td>{lead.data().phone}</td>
                      <td >{lead.data().email}</td>
                      <td style={{minWidth:'100px'}} >{date}</td>
                      <td style={{maxWidth:'150px'}}>{service}</td>
                    </tr>
                     </Link>
                  
                  );
                })}
              </table>
            </div>
          </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}


Leads.getInitialProps= ({ req }) => {
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

