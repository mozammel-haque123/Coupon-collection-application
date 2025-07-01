import { CgProfile } from 'react-icons/cg';
import { IoMenu } from 'react-icons/io5';
import logo from '../../assets/logo.png';
import { useContext, useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io'; 
import { Link, NavLink } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { ContextApi } from '../AuthProvaider/AuthProvaider';
import { CiLogout } from 'react-icons/ci';

const Navbar = () => {
   const {user,logoutehandlae} = useContext(ContextApi)
  const [open, setOpen] = useState(false);
  // log out
 const logout = ()=>{
  logoutehandlae()
  .then((result)=>{
  console.log(result)
  })
.catch((error)=> {
     console.log(error.message)
})
 }
  return (
    <div className="">
      <nav className="mx-auto px-4 flex justify-between relative border-b border-b-gray-300 py-2 my-2">

        {/* Logo */}
        <div>
          <img className="w-28" src={logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        {/* lg divaise */}
        <div className="hidden md:flex gap-6 text-lg font-medium">
          <NavLink to={'/'} className="btn">Home</NavLink>
          <NavLink to={'/brands'} className="btn">Brands</NavLink>

         {user && <NavLink to={'/MyProfile'} className="flex gap-1 items-center btn">
            <CgProfile /> My Profile
          </NavLink>} 
          <NavLink to={'/aboutDev'} className="btn">About Dev</NavLink>
        </div>

        {/* Desktop Login */}
        <div className="hidden md:block">
       {
        user ? <div className='flex flex-col items-center gap-2'>
          <img className='w-16 h-16 rounded-full' src={user?.photoURL} alt="" />
          <p>{user?.email.slice(0,20)}</p>
          <Link onClick={logout} className="bg-white btn">
                 Log out   
                  <CiLogout size={24} /> </Link> </div> : <Link to={'/auth/login'} className="bg-white btn">
              <FiLogIn className="text-lg" />
            Login
          </Link>
       }
          
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <IoMdCloseCircle size={28} /> : <IoMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {/* mobile divaise */}
 {open && (
  <div className="md:hidden flex flex-col items-start gap-4 px-4 pb-4 py-4 text-base font-medium bg-purple-700 text-white rounded-b">
    <NavLink to="/" className="btn">Home</NavLink>
    <NavLink to="/brands" className="btn">Brands</NavLink>

    {user && (
      <NavLink to="/MyProfile" className="flex gap-1 items-center btn">
        <CgProfile /> My Profile
      </NavLink>
    )}

    <NavLink to="/aboutDev" className="btn">About Dev</NavLink>

    {user ? (
      <Link onClick={logout} className="bg-white text-purple-700 flex items-center gap-1 btn">
        Log out <CiLogout size={24} />
      </Link>
    ) : (
      <Link to="/auth/login" className="bg-white text-purple-700 flex items-center gap-1 btn">
        <FiLogIn className="text-lg" />
        Login
      </Link>
    )}
  </div>
)}

    </div>
  );
};

export default Navbar;
