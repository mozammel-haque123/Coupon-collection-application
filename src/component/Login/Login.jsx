import { Link, useLocation, useNavigate } from "react-router-dom";
import { ContextApi } from "../AuthProvaider/AuthProvaider";
import { useContext, useEffect, useRef, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const {loginEmailPass,fogetpasswordHandle,googleHandle} = useContext(ContextApi)
    const [error,setError] = useState('')
     const [pass, setPass] = useState(false)
    const emailRefs = useRef()
    const navigate = useNavigate()
    const location = useLocation()
    
  //  ইনপুটে ডুকার সাথে সাথেে মাউস র্কাসারটা email এ থাকবে
      useEffect(()=>{
          emailRefs.current.focus()
         },[]) 

    // google login
    const googleLogin = () => {
    googleHandle()
      .then(() => {
  //  ইউজার লগইন ছাড়া কোন নিউজ ডিটেলস দেখতে চাইলে সরাসরি তাকে লগইন পেজে নিয়ে যাবে এবং লগইন করার পর আবার সেই নিউজেই তাকে নিয়ে আসবে
    if(location.state?.from){
    navigate(location.state?.from)
    }else{
   // কোন নিউজে এর ডিটেলসে না গিয়ে শুধু লগইন করার পর তাকে হোম পেজে নিয়ে যাবে
    navigate('/')
    }
      })
      .catch(error => {
        setError(error.message);
        console.log(error.message)
      });
  };

  // email log in
    const handleLogin = (e) => {
    e.preventDefault();
     setError('')
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log("Login Info:", { email, password });
    loginEmailPass(email,password)
    .then((result)=>{
    console.log(result)
      //  ইউজার লগইন ছাড়া কোন নিউজ ডিটেলস দেখতে চাইলে সরাসরি তাকে লগইন পেজে নিয়ে যাবে এবং লগইন করার পর আবার সেই নিউজেই তাকে নিয়ে আসবে
    if(location.state?.from){
    navigate(location.state?.from)
    }else{
      // কোন নিউজে এর ডিটেলসে না গিয়ে শুধু লগইন করার পর তাকে হোম পেজে নিয়ে যাবে
    navigate('/')
    }
    })
  .catch((error)=>{
    console.log(error.message)
    setError(error.message)
  })
 
  };
 
  // forget password
  const fogetPassword = ()=>{
    const email = emailRefs.current.value
    if(!email){
    return setError('password Reset email sent, please check your email')
    }else{
     setError('')
   return fogetpasswordHandle(email)
     .then(()=>{
      alert('password Reset email sent, please check your email')
    })
  .catch((error)=> {
  console.log(error.message)
  setError(error.message)
  })
    }
 
    
  }
    return (
 <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="card w-full max-w-md bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">Login</h2>
        
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="label text-sm font-semibold">Email</label>
            <input
            ref={emailRefs}
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
           
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="label text-sm font-semibold">Password</label>
            <input
                type={pass ? `text` : `password`}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
            <button type="button" onClick={()=> setPass(!pass)} className="absolute right-2 bottom-10">{pass ? <IoEyeSharp /> : <FaRegEyeSlash /> }</button>
            <div className="mt-1">

              <button onClick={fogetPassword} className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full bg-purple-600 text-white hover:bg-purple-700"
          >
            Login
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

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to={'/auth/register'} className="text-purple-600 font-medium hover:underline">
            Register
          </Link>
        </p>
      </div>
      
    </div>
    );
};

export default Login;