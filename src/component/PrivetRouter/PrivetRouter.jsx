import { useContext } from "react";
import { ContextApi } from "../AuthProvaider/AuthProvaider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouter = ({children}) => {
       const {user,loder} = useContext(ContextApi)
       const location = useLocation()
       
      if(loder){
        return <div className="text-center my-10"><span className="loading loading-bars loading-xl"></span></div>
      }

       if(!user){
     //  ইউজার লগইন ছাড়া কোন নিউজ ডিটেলস দেখতে চাইলে সরাসরি তাকে লগইন পেজে নিয়ে যাবে এবং লগইন করার পর আবার সেই নিউজেই তাকে নিয়ে আসবে
      return <Navigate state={{from: location?.pathname}} to={'/auth/login'}  replace></Navigate>
       }
    return (
        <div>
        {children}
        </div>
    );
};

export default PrivetRouter;