import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Mainleyaut = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
           <Outlet></Outlet> 
            </div>
        
           <Footer></Footer>
        </div>
    );
};

export default Mainleyaut;