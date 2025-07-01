import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ContextApi } from "../AuthProvaider/AuthProvaider";
import { sendEmailVerification } from "firebase/auth";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import auth from "../firebase/firebase.";


const Register = () => {
  const {emailPassword,updatePhotoName,setUser,googleHandle} = useContext(ContextApi)
      const [pass, setPass] = useState(false)
      const [confpass, setConfpass] = useState(false)
      const [error,setError] = useState('')
      const navigate = useNavigate()
      const emailRef = useRef();

    //  ইনপুটে ডুকার সাথে সাথেে মাউস র্কাসারটা email এ থাকবে
     useEffect(()=>{
      emailRef.current.focus()
     },[]) 

    //  google login
   const googleLogin = () => {
    googleHandle()
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.log(error.message)
        setError(error.message)
      });
  };

    // register
      const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const photo = form.photo.value;
    const terms = form.terms.checked;
    // console.log(name,email,password,confirmPassword,photo,terms)
   
  //  chek box
    if(!terms){
      return setError("Accept our Confirm conditions")
    }

    if(password.length < 6){
     return setError('Password must be more than 6 digits.')
    }

     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;
    if(!regex.test(password)){
   return  setError('The password must contain one uppercase letter, one lowercase letter, one number, and one special symbol.')
    }

    if(password !== confirmPassword){
     return setError("'Your Confirm password did not match.'")
    }
    setError('')
    emailPassword(email,password)
    .then((result)=>{
      const users = result.user
      console.log(result)
      // input name, photo
    updatePhotoName({displayName: name, photoURL: photo})
    .then(()=>{
    setUser({ ...users, displayName: name, photoURL: photo });
    
  //  email Verification
  sendEmailVerification(auth.currentUser)
  .then(() => {
    alert('Verification email sent');
    form.reset(); 
  })
  .catch(error => {
    console.log(error.message);
    setError(error.message)
  });

// 
 
    })
    .catch((error)=> {
      console.log(error.message)
      setError(error.message)
    })
      // কোন নিউজে এর ডিটেলসে না গিয়ে শুধু লগইন করার পর তাকে হোম পেজে নিয়ে যাবে
    navigate('/')
    
    })
    .catch((error)=> {
      console.log(error.message)
      setError(error.message)
    })
    
      }
      
    return (
          <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="card w-full max-w-md bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">Register</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="label">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered w-full"
              
            />
          </div>

          <div>
            <label className="label">Email</label>
            <input
            ref={emailRef}
              type="email"
              name="email"
              placeholder="Your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="relative">
            <label className="label">Password</label>
            <input
              type={pass ? `text` : `password`}
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />
            <button type="button" onClick={()=> setPass(!pass)} className="absolute right-2 bottom-3">{pass ? <IoEyeSharp /> : <FaRegEyeSlash /> }</button>
          </div>

          <div className="relative">
            <label className="label">Confirm Password</label>
            <input
              type={confpass ? `text` : `password`}
              name="confirmPassword"
              placeholder="Confirm password"
              className="input input-bordered w-full"
            
            />
            <button type="button" onClick={()=> setConfpass(!confpass)} className="absolute right-2 bottom-3">{confpass ? <IoEyeSharp /> : <FaRegEyeSlash /> }</button>
          </div>

          <div>
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" name="terms" className="checkbox checkbox-sm" />
            <label className="text-sm">
              I accept the <a className="text-blue-500 underline">terms and conditions</a>
            </label>
          </div>

        <p className="text-red-600 text-sm font-medium"></p>

          <button className="btn bg-purple-600 text-white w-full hover:bg-purple-700">
            Register
          </button>
          
        </form>
          <button className="btn my-2" onClick={googleLogin}><FcGoogle /> Login with Google</button>
           <div>
         {error && (
   <p className="text-red-600 text-sm font-medium text-center mt-2">
            {error}
           </p>
           )}
          </div>

          <p className="text-center text-sm mt-3">
            Already have an account?
            <Link to={'/auth/login'} className="text-purple-600 font-medium hover:underline">
              Login
            </Link>
          </p>
      </div>
    </div>
    );
};

export default Register;