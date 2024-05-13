import React from "react";
import image from "./hyggex.png";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="md:my-8 my-3 text-base">
    <div className=" w-full flex justify-between font-sans ">
      <div className="w-1/5">
        <img className=" w-full" src={image} alt="myImage" />
      </div>

  
      <ul class="flex w-2/5 justify-between text-base">

<li> <NavLink to="/" className=" text-base focus:bg-gradient-to-t from-blue-500 to-blue-900  focus:text-white  py-2 text-center rounded-full px-5 ">Home </NavLink> </li>
<li>   <NavLink to="/flashcard" className=" text-base focus:bg-gradient-to-t from-blue-500 to-blue-900  py-2 text-center focus:text-white rounded-full px-5 "> Flashcard  </NavLink> </li>
<li>  <NavLink to="/contact" className=" text-base focus:bg-gradient-to-t from-blue-500 to-blue-900 focus:text-white py-2 text-center rounded-full px-5"> Contact </NavLink></li>
<li>   <NavLink to="/faq" className=" text-base focus:bg-gradient-to-t from-blue-500 to-blue-900  focus:text-white  py-2 text-center rounded-full px-5"> FAQ</NavLink></li>
<li>  <NavLink to="/login" className=" text-base focus:bg-gradient-to-t from-blue-500 to-blue-900  focus:text-white py-2 text-center rounded-full px-5"> Login </NavLink></li>



</ul>
   

     
  </div>

  </div>

  )
}
 
  
 

export default Navbar;
