import { useEffect, useState } from "react";
import SideBar from "./sideBar";
import { useSelector, useDispatch } from "react-redux";
import { userIn } from "../../redux/actions";
import Header from "./header";
import { Modal } from "@material-ui/core";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {db} from '../../firebase'
import { addDoc, collection, onSnapshot, orderBy, query,getDoc, doc ,serverTimestamp,deleteDoc,updateDoc, snapshotEqual, Timestamp} from "@firebase/firestore";
import { parseCookies } from "../api/parseCookies";



export default function Openings({admin,career,team,settings,blog, leadState}) {
  const user = useSelector((state) => state.userControl);
  const [open, setOpen] = useState(false);
  const [designation, setDesignation] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");
  const [skill1, setSkill1] = useState('')
  const [skill2, setSkill2] = useState('')
  const [skill3, setSkill3] = useState('')
  const [skill4, setSkill4] = useState('')
  const [skill5, setSkill5] = useState('')
  const [skill6, setSkill6] = useState('')
  const [skill7, setSkill7] = useState('')
  const [skill8, setSkill8] = useState('')
  const [skill9, setSkill9] = useState('')
  const [skill10, setSkill10] = useState('')
  const [openings, setOpenings] = useState([])
 

  const addJob = async (e) =>{
    setOpen(false)
    e.preventDefault()
    const docRef = await addDoc(collection(db,'openings'),{
    designation:designation,
    experience:experience,
    description:description,
    skill : [skill1,skill2,skill3,skill4,skill5,skill6,skill7],
    timestamp: serverTimestamp(),
    show:true
  })
 
  }

  const fetchData = async () => {
    const q = await query(collection(db,'openings'),orderBy('timestamp'))
    onSnapshot(q, (snapshot) => {
      setOpenings(snapshot.docs.map((doc) => doc))
    
    })
  }

  useEffect(() => {
    fetchData();
  }, [])

  const deletItem = async (id) => {
    await deleteDoc(doc(db,'openings',id));
  }

  const hideItem = async (id) => {  
    
    const docRef = doc(db,'openings',id);
   const updateRef = await updateDoc(docRef, {
      show:false
    } )
  }

  const showItem = async (id) => {
    const docRef = doc(db,'openings',id);
    const updateRef = await updateDoc(docRef, {
      show:true
    })
  }
  return (
    <>
    {admin == 'true' ? 
    
    <div>
    
    <Header    career={career}
            blog={blog}
            settings={settings}
            leadState = { leadState}
            team ={team}/>
    <div className="flex">
      <SideBar  career={career}
            blog={blog}
            settings={settings}
            leadState = { leadState}
            team ={team}/>
      <div className="job">
        <div className="add__opening__row">
          <button onClick={() => setOpen(true)}>New Job</button>
        </div>
        <table id='add__job__table'>
          <tr>
            <th style={{ maxWidth: "10px" }} className="pl-3">
              #
            </th>
            <th>Designation</th>
            <th >Exp-Year</th>
            <th style={{minWidth:'250px'}}>Description</th>
            <th>Action</th>
          </tr>
          {openings.map((data, index) => {
            return (
              <tr key={index}
                className={index % 2 == 0 ? "team__row" : "team__row__gray"}
              >
                <td className="pl-3">{index+1}</td>
                <td>{data.data().designation}</td>
                <td style={{width:'100px'}}>{data.data().experience}</td>
                <td style={{ maxWidth: "200px" }}>{data.data().description}</td>
                <td>
                  {data.data().show ? 
                   <button className='m-5' value={data.id} onClick={e => hideItem(e.target.value)}>Hide</button>
                   : 
                  <button className='m-5' value={data.id} onClick={e => showItem(e.target.value)}>Show</button>
                  }
                  |  
                  <button className='m-5' value={data.id} onClick={e => deletItem(e.target.value)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
    <Modal open={open}>
      <div style={{overflowY:'scroll'}} className="add__team">
        <HighlightOffIcon
          onClick={() => setOpen(false)}
          id="add__team__close"
        />
        <div className="add__team__content">
          <div className="add__team__row">
            <label>Designation:</label>
            <input
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>
          <div className="add__team__row">
            <label>Experience:</label>
            <input
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
          <div className="add__team__row">
            <label >Description:</label>
            <textarea
           
            rows='2'
            cols='25'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="add__team__row">
            <label>Skills required :</label>
          </div>
       
          <div style={{marginTop:"10px"}} className="add__team__row">
            <label>1.</label>
            <input
              value={skill1}
              onChange={(e) => setSkill1(e.target.value)}
            />
          </div>
          <div className="add__team__row">
            <label>2.</label>
            <input
              value={skill2}
              onChange={(e) => setSkill2(e.target.value)}
            />
          </div>
          <div className="add__team__row">
            <label>3.</label>
            <input
              value={skill3}
              onChange={(e) => setSkill3(e.target.value)}
            />
          </div>
          <div className="add__team__row">
            <label>4.</label>
            <input
              value={skill4}
              onChange={(e) => setSkill4(e.target.value)}
            />
          </div>
          <div className="add__team__row">
            <label>5.</label>
            <input
              value={skill5}
              onChange={(e) => setSkill5(e.target.value)}
            />
          </div>
          <div className="add__team__row">
            <label>6.</label>
            <input
              value={skill6}
              onChange={(e) => setSkill6(e.target.value)}
            />
          </div>
          <div className="add__team__row">
            <label>7.</label>
            <input
              value={skill7}
              onChange={(e) => setSkill7(e.target.value)}
            />
          </div>
          <div className="add__team__row">
            <label>8.</label>
            <input
              value={skill8}
              onChange={(e) => setSkill8(e.target.value)}
            />
          </div>
          <div className="add__team__row">
            <label>9.</label>
            <input
              value={skill9}
              onChange={(e) => setSkill9(e.target.value)}
            />
          </div>
          <div className="add__team__row">
            <label>10.</label>
            <input
              value={skill10}
              onChange={(e) => setSkill10(e.target.value)}
            />
          </div>
          <button onClick={addJob}>Save</button>
        </div>
      </div>
    </Modal>
  </div>
    : ''}
  
    </>
  );
}


Openings.getInitialProps= ({ req }) => {
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

