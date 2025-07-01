import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";

const Marquees = () => {
    const [marque,setMarque] = useState([])
    useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setMarque(data))
    },[])
    return (
        <div>
   <div>
    <Marquee pauseOnHover={true} speed={100}>
   {
  marque.map((mar)=> <div className="drop-shadow-xl p-4 rounded-2xl hover:scale-[1.05] transition-all duration-300"> <NavLink to={'/brands'}> <img className="w-36 h-30 rounded-lg" src={mar.brand_logo}></img></NavLink></div> )
  }
    </Marquee>

  </div>
        </div>
    );
};

export default Marquees;