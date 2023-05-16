// css @ team.css
import { useEffect, useState } from "react"
import SideBar from "./sideBar"
import { useSelector, useDispatch } from "react-redux";
import {userIn,fetchId} from '../../redux/actions'
import Header from './header'
import {db} from '../../firebase'
import moment from 'moment';
import GenericPdfDownloader from '../../components/GenericPdfDownloader'
import { addDoc,where,getDocs, collection, onSnapshot, orderBy, query,getDoc, doc ,serverTimestamp,deleteDoc,updateDoc} from "@firebase/firestore";
import Link from 'next/link'
import { parseCookies } from "../api/parseCookies";

export default function Job({admin,career,team,settings,blog, leadState}) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userControl);
    const [applicants, setApplicants] = useState([])
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [designation,setDesignation] = useState('')
 

    const fetchData = async () => {
        const q = await query(collection(db,'applicants'),orderBy('timestamp','desc'));
        onSnapshot(q, (snapshot) =>{
            setApplicants(snapshot.docs.map((doc) => doc))
        })
      
        
    }   
    
    useEffect(() => {
        fetchData();

    },[])

    const filterDate = async () =>{
        const start = moment (new Date(startDate)).unix()
        const end = moment (new Date(endDate)).unix()
         const docRef = collection(db,'applicants')
           const q = await query(docRef, where('date', '>=', start),where('date', '<=', end))
           const querySnapshot = await getDocs(q)
                setApplicants(querySnapshot.docs)
         
         }

    const filterType = async (value) => {
     
        const docRef = collection(db,'applicants')
        const q = await query(docRef, where('designation', '==', value ))
        const snapshot = await getDocs(q)
        setApplicants(snapshot.docs)
    }     

    return (
        <>
        {admin == 'true' ?  <div  >
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
            <div className='job'>
               <h1>Job Applicants</h1>
               <div className='job__row'>
               <div className='job__row__left flex'>
                   <div className='flex'>
                   <input value={startDate} onChange={((e)=> setStartDate(e.target.value))} placeholder="MMM/DD/YY" />
                <p>To</p>
                <input value={endDate} onChange={((e) => setEndDate(e.target.value))} placeholder="MMM/DD/YY" />
                     <button onClick={filterDate}>Go</button>
                   </div>
               <div className='flex ml-7 job__left__filter'>
                   <p>Group by</p>
                   <input  onChange={(e)=>filterType(e.target.value)} placeholder='PHP Developer'/>
                  
                  
               </div>
                 </div>

                 <GenericPdfDownloader 
                downloadFileName="Applicants" 
                rootElementId="applicantsDoc" 
              
              />
               </div>
               
               <div className='job__content' id='applicantsDoc'>
               <table style={{width:'100%',marginTop:'20px'}} id='team__table'>
                <tr>
                 <th style={{maxWidth:'10px'}} className='pl-3'>#</th>
                 <th>Name</th>
                 <th>Phone</th>
                 <th>Email</th>
                 <th>Date</th>
                 <th>Position</th>
              
                 </tr>
                {applicants.map((data,index)=>{
                    const d = data.data().date
                    const date = moment.unix(d).format("MMM DD, YY");
                    const lenght = applicants.length
                    const no = lenght - index
                    return(

                        <Link href='jobDetail' key={index}>
                          <tr 
                           onClick={() => dispatch(fetchId(data.id))}
                          className={index % 2 == 0 ? 'team__row':'team__row__gray'}>
                        <td className='pl-3'>{no}</td>
                        <td>{data.data().fname +" "+ data.data().lname}</td>
                        <td>{data.data().phone}</td>
                        <td>{data.data().email}</td>
                        <td >{date}</td>
                       
                        <td>{data.data().designation}</td>
                     </tr>
                        </Link>
                      
                    )
                })}
                
             </table>
               </div>
            </div> </div>
        </div> :""}
        </>
       
    )
}


Job.getInitialProps= ({ req }) => {
    const cookies = parseCookies(req)
  
    return {             
        admin : cookies.Admin,
        career : cookies.career,
        settings : cookies.settings,
        blog : cookies.blog,
        leadState: cookies.leads,
        team : cookies.team
       
    };
  }