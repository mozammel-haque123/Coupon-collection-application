import {
  createBrowserRouter,
} from "react-router-dom";
import Mainleyaut from "../Mainleyaut/Mainleyaut";
import Home from "../Home/Home";
import Brands from "../Brands/Brands";
import BrandsDitails from "../BrandsDitails/BrandsDitails";
import Login from "../Login/Login";
import Register from "../Register/Register";
import MyProfile from "../MyProfile/MyProfile";
import UpdateProfaile from "../UpdateProfaile/UpdateProfaile";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import AboutDev from "../AboutDev/AboutDev";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainleyaut></Mainleyaut>,
    children: [
    {
      path:'/',
      element: <Home></Home>,
    },
    {
    path:'/brands',
    element: <Brands></Brands>,
    },
     {
  path:'/MyProfile',
  element: <PrivetRouter><MyProfile></MyProfile></PrivetRouter> 
  },
  {
  path: '/updateprofaile',
  element: <PrivetRouter><UpdateProfaile></UpdateProfaile></PrivetRouter> 
  },
  {
  path:'/aboutDev',
  element: <AboutDev></AboutDev>,
  }
    ],
  },
  {
  path:'/brandsDitails/:id',
  element: <PrivetRouter><BrandsDitails></BrandsDitails></PrivetRouter> ,
  loader: async ({params})=>{
  const res = await fetch('/data.json')
  const data = await res.json()
  const ditails = data.find((item)=> item._id === params.id)
  return ditails;
  },
  },
  {
 path:'/auth/login',
 element: <Login></Login>,
  },
  {
 path:'/auth/register',
 element: <Register></Register>,
  } 
]);

export default router;