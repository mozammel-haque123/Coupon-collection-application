import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.";

export const ContextApi = createContext(null)
const AuthProvaider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loder, setLoder] = useState(true)

  //  google login
    const providerGoogle = new GoogleAuthProvider();
    const googleHandle = ()=>{
         setLoder(true)
   return signInWithPopup(auth, providerGoogle)
    }

    // register
    const emailPassword = (email,password)=>{
      setLoder(true)
   return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const loginEmailPass = (email,password)=>{
      setLoder(true)
      return signInWithEmailAndPassword(auth,email,password)
    }
    // logu out
      const logoutehandlae = ()=>{
        setLoder(true)
    return signOut(auth)
  }

  // forget password
  const fogetpasswordHandle = (email)=>{
    setLoder(true)
    return sendPasswordResetEmail(auth,email)
  }
    // update user, name , photo
    const updatePhotoName = (updatedData)=>{
      setLoder(true)
    return updateProfile(auth.currentUser,updatedData)
    }
    
    // ইমেইল ইনপুট নিয়ে রিসেট বাটন দিলে Gmail এ রিডাইরেক্ট করুন এবং লগআউট করুন
    const sendPasswordResetEmailHandle = (email)=>{
         setLoder(true)
      return sendPasswordResetEmail(auth,email)
    }
    // save user
      useEffect(()=>{
      const unsubmit = onAuthStateChanged(auth,(currenuser)=>{
     console.log('user', currenuser)
     setUser(currenuser)
     setLoder(false)
      })
    
      return ()=> {
        unsubmit()
      }
      },[])
    return (
        <div>
        <ContextApi.Provider value={{user,setUser,emailPassword,updatePhotoName,logoutehandlae,loginEmailPass,fogetpasswordHandle,sendPasswordResetEmailHandle,googleHandle,loder}}>
        {children}
        </ContextApi.Provider>
        </div>
    );
};

export default AuthProvaider;