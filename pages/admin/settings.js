import { useEffect, useState } from "react";
import SideBar from "./sideBar";
import { useSelector } from "react-redux";
import Header from "./header";
import { Modal } from "@material-ui/core";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {  ref,uploadString, getDownloadURL,deleteObject } from "firebase/storage";

import { storage,db } from "../../firebase";
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from "@firebase/firestore";
import { parseCookies } from "../api/parseCookies";


export default function Settings({admin,career,team,settings,blog, leadState}) {
  const [data] = useState([
    { client: "mazin" },
    { client: "mazin" },
    { client: "mazin" },
    { client: "mazin" },
  ]);
  const user = useSelector((state) => state.userControl);
  const [open, setOpen] = useState(false);
  const [client, setClient] = useState("");
  const [position, setPosition] = useState('')
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [clientData, setClientData] = useState([])

  const handleChange = (e) => {

    const reader = new FileReader();
    if(e.target.files[0]){
        reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = (readerEvent) => {
        setImage(readerEvent.target.result);
    }
  
  };

  const handleUpload = async () => {
    setUploading(true);

      const docRef = await addDoc(collection(db,'clients'), {
          client: client, 
          position:position,
          timestamp:serverTimestamp()
      })
    

      const imageRef = ref(storage, `clients/${docRef.id}/image`);

      await uploadString(imageRef, image, 'data_url').then(async snapshot => {
          const downloadURL = await getDownloadURL(imageRef);

          await updateDoc(doc(db, 'clients', docRef.id), {
              image: downloadURL
          })
      })

      setUploading(false)
      
      setOpen(false)
      setImage(null)
      setClient(null)
      setPosition(null)
  };

  const fetchData = async () =>{
      const q = await query(collection(db,'clients'),orderBy('timestamp'))
      onSnapshot(q, (snapshot) =>{
         setClientData(snapshot.docs.map((doc) => doc)) 
      })
  }
  useEffect(() => {
    fetchData();
  }, [])

  const deletItem = async (id) =>{
    await deleteDoc(doc(db,'clients',id))
    const imageRef = ref(storage, `clients/${id}/image`);
    deleteObject(imageRef).then(
      console.log("image deleted")
    )
  }

  return (
    <>
     
      {admin == 'true' ? (
        <div className="flex">
          <Header    career={career}
            blog={blog}
            settings={settings}
            leadState = { leadState}
            team ={team}/>
          <div className="flex">
            <SideBar   career={career}
            blog={blog}
            settings={settings}
            leadState = { leadState}
            team ={team} />
            <div className="settings">
              <h1>Site Settings</h1>

              <div className=" settings__content">
                <div className="settings__left">
                  <div className="flex justify-between">
                    <h3>Client Logo</h3>
                    <button onClick={() => setOpen(true)}>New Logo</button>
                  </div>
                  <table id="settings__table">
                    <tr>
                      <th className="pl-3">#</th>
                      <th style={{width:'200px'}}>Client Name</th>
                      <th>Position</th>
                      <th></th>
                      <th>Action</th>
                    </tr>
                    {clientData.map((data, index) => {
                        const img = data.data().image
                        console.log('img is => ',img)
                      return (
                        <tr
                          className={
                            index % 2 == 0
                              ? "client__table__row "
                              : "client__table__row__gray"
                          }
                        >
                          <td className="pl-3">{index+1}</td>
                          <td style={{width:'150px'}}>{data.data().client}</td>
                          <td style={{width:'130px'}}>{data.data().position}</td>
                          <td style={{width:'100px'}}>
                              <div>
                          <img width='80' height='40' src={img} />
                              </div>
                           </td>
                          <td><button value={data.id} onClick={(e)=>deletItem(e.target.value)}>Delete</button> </td>
                        </tr>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <Modal open={open}>
        <div className="settings__modal">
          <HighlightOffIcon
            onClick={() => setOpen(false)}
            style={{ float: "right" }}
          />

          <div className="mt-5">
            <label>Client Name :</label>
            <input value={client} onChange={(e) => setClient(e.target.value)} />
            {/* <label >Position</label> */}
           <select value={position} onChange={(e) => setPosition(e.target.value)}>
           <option>Position:</option>
           <option>First row</option>
           <option>Second row</option>
           <option>Third row</option>
           </select>
            <input className="mt-10" type="file" onChange={handleChange} />
          </div>
          <button  onClick={handleUpload}>{uploading ? 'Uploading' : 'Upload'}</button>
        </div>
      </Modal>
    </>
  );
}


Settings.getInitialProps= ({ req }) => {
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

