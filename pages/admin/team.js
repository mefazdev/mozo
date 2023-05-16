import { cloneElement, useEffect, useState } from "react"
import SideBar from "./sideBar"
import {  Modal } from "@material-ui/core";
import { useSelector } from "react-redux";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {db} from '../../firebase'
import { addDoc, collection, onSnapshot, orderBy, query,getDoc, doc ,serverTimestamp,deleteDoc,updateDoc} from "@firebase/firestore";
import Header from './header'
import { parseCookies } from "../api/parseCookies";


export default function Team({adminState,career,team,settings,blog, leadState}) {
    const user = useSelector((state) => state.userControl);
    const [open,setOpen] = useState(false)
    const [name,setName] = useState('')
    const [designation, setDesignation] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [permission, setPermission] = useState('')
 
    const [admin, setAdmin] = useState([])
    const [openEdit, setOpenEdit] = useState ([])

 



  


    const fetchData= async ()=>{
       const q = await query(collection(db, 'admin'),orderBy('timestamp'))
       onSnapshot(q, (snapshot) => {
       setAdmin(snapshot.docs.map((doc) => doc))
    }) 
    }

     useEffect(() => {
        fetchData();
      
    }, [])

    const addAdmin = async () =>{
    const docRef=  await addDoc(collection(db, 'admin'), {
            name:name,
            designation:designation,
            permission:permission,
            username:username,    
            password:password,
            timestamp: serverTimestamp(),
            
        })
    setOpen(false)
    }

    const updateAdmin = async (id) =>{
        const docRef = doc(db, 'admin', id);
        const updateRef=  await updateDoc (docRef,  {
            name:name,
            designation:designation,
            permission:permission,
            username:username,    
            password:password,
            
            timestamp: serverTimestamp(),   
        })
        setOpenEdit(false)
    }
    const deletItem = async (id) => {
       
        await deleteDoc(doc(db, "admin", id));
    }

    const editItem = async (id) =>{
        const docRef =  doc(db, "admin",id);
        const data = await getDoc(docRef)
  
        setOpenEdit(
            {name:data.data().name,
            designation:data.data().designation,
            permission:data.data().permission,
            username:data.data().username,
            password:data.data().password,
            id:data.id,
            state:true
        }
        )
       
    }

    return (
        <>{adminState =='true' ? <div >
            <Header    career={career}
            blog={blog}
            settings={settings}
            leadState = { leadState}
            team ={team}/>
            <div className='flex '>
            <SideBar
              career={career}
              blog={blog}
              settings={settings}
              leadState = { leadState}
              team ={team}/>
          
   
        <div className='   admin__team'>
            <div className='flex admin__team__head__row'>
            <h1 style={{fontWeight:'800',}}>Employees</h1>
           <button onClick={()=>setOpen(true)}>New Staff</button>
            </div>
         
         <table style={{width:'100%',marginTop:'20px'}} id='team__table'>
            <tr>
             <th style={{maxWidth:'10px'}} className='pl-3'>#</th>
             <th >Name</th>
             <th>Title</th>
             <th>Permission</th>
             <th></th>
             <th></th>
          
             </tr>
            {admin && admin.map((data,index)=>{
                return(
                    <tr key={index} className={index % 2 == 0 ? 'team__row':'team__row__gray'}>
                     {/* <tr> */}
                    <td className='pl-3'>{index+1}</td>
                    <td>{data.data().name}</td>    
                    <td>{data.data().designation}</td>
                    <td>{data.data().permission}</td>
                
                    <td ><button value={data.id} onClick={e => deletItem(e.target.value)}>Delete</button></td>
                   
                    <td><button value={data.id} onClick={e => editItem(e.target.value)} >Edit</button></td>
                 </tr>
                )
            })}
            
         </table>

     
        </div>   
        <Modal open={open}>
            <div className='add__team'>
        <HighlightOffIcon onClick={()=>setOpen(false)} id='add__team__close'/>
                <div className='add__team__content'>
               
                     <div className='add__team__row'>
                     <label>Name:</label>
                     <input value={name} onChange={((e)=>setName(e.target.value ))}  />
                     </div>
                     <div className='add__team__row'>
                     <label>Designation:</label>
                     <input value={designation} onChange={((e)=>setDesignation(e.target.value))} />

                     </div>
                     <div className='add__team__row'>
                   
                 <label>Permission</label>
                 <select   onChange={((e)=>setPermission(e.target.value))} style={{width:'200px',border:'solid 1px gray',marginLeft:'10px'}}>
                 <option>Select</option>
                  <option>Blog</option>
                  <option>Career</option>
                  <option>Settings</option>
              </select>
                     </div>
                     <div className='add__team__row'>
                     <label>Username:</label>
                     <input value={username} onChange={((e)=>setUserName(e.target.value))}  />
                     </div>
                     <div className='add__team__row'>
                     <label >Password:</label>
                     <input value={password} onChange={((e)=>setPassword(e.target.value))}/>
                     </div>
                   
                      <button onClick={addAdmin}>Save</button>
               
                </div>
            </div>
        </Modal>

        <Modal  open={openEdit.state   ? true : false}>
            <div className='add__team'>
        <HighlightOffIcon onClick={()=>setOpenEdit(false)} id='add__team__close'/>
                <div className='add__team__content'>
        
                     <div className='add__team__row'>
                     <label>Name:</label>
                     <input placeholder={openEdit ? openEdit.name : ''} onChange={((e)=>setName(e.target.value ? e.target.value : openEdit.name))}  />
                     </div>
                     <div className='add__team__row'>
                     <label>Designation:</label>
                     <input placeholder={openEdit ? openEdit.designation : ''}  onChange={((e)=>setDesignation(e.target.value ? e.target.value : openEdit.designation))} />

                     </div>
                     <div className='add__team__row'>
                   
                 <label>Permission</label>
                 <select   onChange={((e)=>setPermission(e.target.value ? e.target.value : openEdit.permission))} style={{width:'200px',border:'solid 1px gray',marginLeft:'10px'}}>
                  <option>Select </option>
                  <option>Blog</option>
                  <option>Career</option>
                  <option>Settings</option>
              </select>
                     </div>
                     <div className='add__team__row'>
                     <label>Username:</label>
                     <input placeholder={openEdit ? openEdit.username : ''}  onChange={((e)=>setUserName(e.target.value ? e.target.value : openEdit.username))}  />
                     </div>
                     <div className='add__team__row'>
                     <label >Password:</label>
                     <input placeholder={openEdit ? openEdit.password : ''}  onChange={((e)=>setPassword(e.target.value ? e.target.value : openEdit.password))}/>
                     </div>
                   
                      <button value={openEdit ? openEdit.id : ''} onClick={((e)=>updateAdmin(e.target.value))}>Save</button>

                </div>
            </div>  
           
        </Modal>
        </div>
    </div> : ""}</>
        
    )
}

Team.getInitialProps= ({ req }) => {
    const cookies = parseCookies(req)
  
    return {             
        adminState: cookies.Admin,
        career : cookies.career,
        settings : cookies.settings,
        blog : cookies.blog,
        leadState : cookies.leads,
        team : cookies.team
    };
  }
  
  