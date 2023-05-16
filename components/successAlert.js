import Swal from 'sweetalert2'
import { closeSuccessAlert } from '../redux/actions'
import {  useDispatch } from "react-redux";


export const successAlert = async ()=>{

  const distpatch = useDispatch()
   await Swal.fire(
     
        {
          title:'Your Request has been received.!',
          text:'Will get back to you soon',
      
          icon:'success',
          
          confirmButtonColor:'gray',
     
        }
      )
    distpatch(closeSuccessAlert())
}
