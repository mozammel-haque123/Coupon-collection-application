import { useContext } from 'react';
import welcome from '../../assets/welcom.jpg'
import { ContextApi } from '../AuthProvaider/AuthProvaider';
import { NavLink } from 'react-router-dom';
const MyProfile = () => {
       const {user} = useContext(ContextApi)
    return (
        <div>
          {/* ইউজার কে স্বাগতম ম্যাসাজ */}
    <p className='text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 jumping transition-all duration-700 hover:from-yellow-400 hover:to-green-400 hover:scale-110 text-center my-4'> You are welcome {user && user?.displayName}</p>



    {/* user email */}
     <p className='text-center my-4'>{user && user?.email}</p>
   <div className='flex justify-center items-center text-center'>
    {
      // user photo
    user && <img className='w-[400px] h-[370px] object-cover rounded-full' src={user?.photoURL} alt="" />
    }
   </div>
    
   <div className='text-center my-8'>
    {/* user info update */}
    <NavLink to={'/updateprofaile'} className='btn'>Update profaile</NavLink>
   </div>
          {/*  cover img */}
         <div className="h-[500px] w-[700px] flex items-center justify-center mx-auto" style={{
             backgroundImage: `url(${welcome})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
           }}>

         </div>
        </div>
    );
};

export default MyProfile;