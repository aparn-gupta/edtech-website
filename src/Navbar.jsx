import React from "react";
import image from "./hyggex.png";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="mt-4 mb-8 md:mt-8 md:mb-16 md:text-base">
    <div className=" w-full flex justify-between font-sans ">
      <div className="w-1/6">
        <img className=" w-full" src={image} alt="myImage" />
      </div>

  
      <ul class="flex flex-wrap  md:w-2/5 justify-between text-xs md:text-base">

<li> <NavLink to="/" className=" py-1 px-2 focus:bg-gradient-to-t from-blue-500 to-blue-900  focus:text-white  md:py-2 text-center rounded-full md:px-5 ">Home </NavLink> </li>
<li>   <NavLink to="/flashcard" className="py-1 px-2 focus:bg-gradient-to-t from-blue-500 to-blue-900  md:py-2 text-center focus:text-white rounded-full md:px-5 "> Flashcard  </NavLink> </li>
<li>  <NavLink to="/contact" className="py-1 px-2 focus:bg-gradient-to-t from-blue-500 to-blue-900 focus:text-white md:py-2 text-center rounded-full md:px-5"> Contact </NavLink></li>
<li>   <NavLink to="/faq" className="px-2 py-1 focus:bg-gradient-to-t from-blue-500 to-blue-900  focus:text-white  md:py-2 text-center rounded-full md:px-5"> FAQ</NavLink></li>
<li>  <NavLink to="/login" className="px-2 py-1 focus:bg-gradient-to-t from-blue-500 to-blue-900  focus:text-white md:py-2 text-center rounded-full md:px-5"> Login </NavLink></li>



</ul>
   

     
  </div>

  </div>

  )
}
 
  
 

export default Navbar;
