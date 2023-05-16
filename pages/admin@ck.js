// CSS IN SIDEBAR.CSS
import logo from "../public/images/home/logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { db } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {userIn,superAdmin,} from "../redux/actions";
import { useDispatch } from "react-redux";
import { collection, query, getDocs, doc } from "@firebase/firestore";
import Cookies from "js-cookie";


export default function Adminck() {

  const auth = getAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  

const adminControll = async ()=>{
  Cookies.set('Admin',true)
 
}




  const signIn = (e) => {
    e.preventDefault();
    if (username === "cleverkings.com@gmail.com") {
      signInSuperAdmin();
    } else {
      signInAdmin();
    }
  };
  const signInSuperAdmin = () => {
    signInWithEmailAndPassword(auth, username, password)
  
      .then((userCredential) => {
        console.log("password is ", password)
        dispatch(userIn());
        dispatch(superAdmin());
       Cookies.set('settings',true,)
       Cookies.set('blog',true)
       Cookies.set('team',true)
       Cookies.set('career',true)
       Cookies.set('leads',true)
        adminControll()
        router.push({
          pathname: "/admin/leads",
        });
        
      })
      .catch((error) => {
        alert(error);
      });
  };
  const signInAdmin = async () => {
    const querySnapshot = await getDocs(collection(db, "admin"));
    querySnapshot.forEach((doc) => {
      if (
        doc.data().username === username &&
        doc.data().password === password
      ) {
        if (doc.data().permission === "Settings") {
          Cookies.set("settings",true)
          router.push({
            pathname: "/admin/settings",
          });
          
          
        } else if (doc.data().permission === "Blog") {
          Cookies.set('blog',true)
          router.push({
            pathname: "/admin/blog",
          });
         
        } else if (doc.data().permission === "Career") {
          Cookies.set('career',true)
          router.push({
            pathname: "/admin/job",
          });
         
        } else {
          alert("You have no permission !!!");
        }
        adminControll()
      }
    });
  };

  return (
    <div className="flex login">
      <div className="login__box">
        <div className="admin__logo">
          <Image src={logo} />
        </div>
        <form>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </form>
        <button type="submit" onClick={signIn}>
          Login
        </button>
      </div>
    </div>
  );

 
}





  // const signUp = (event) => {
  //   event.preventDefault();
  //   createUserWithEmailAndPassword( auth,username, password)
  //     .then(() => {
  //         dispatch(userIn())
  //       router.push({
  //           pathname: '/admin/leads',

  //       });
  //     })
  //     .catch((error) => alert(error.message));

  // };