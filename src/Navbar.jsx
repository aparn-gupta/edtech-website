import React from "react";
import image from "./hyggex.png";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between my-8 font-sans">
        <div >
          <img className= "w-48 h-10" src={image} alt="myImage" />
        </div>
 
        <div class="flex" >
         
          <div > <NavLink to="/" className = " focus:bg-gradient-to-t from-blue-500 to-blue-900  focus:text-white px-5 py-2 text-center rounded-full basis-full" >Home </NavLink> </div>
          <div  >   <NavLink to="/flashcard" className = " focus:bg-gradient-to-t from-blue-500 to-blue-900 px-5 py-2 text-center focus:text-white rounded-full basis-full"   > Flashcard  </NavLink> </div>
          <div  >  <NavLink to="/contact" className = " focus:bg-gradient-to-t from-blue-500 to-blue-900 focus:text-white px-5 py-2 text-center rounded-full basis-full"> Contact </NavLink></div>
          <div >   <NavLink to="/faq" className = " focus:bg-gradient-to-t from-blue-500 to-blue-900  focus:text-white px-5 py-2 text-center rounded-full basis-full"> FAQ</NavLink></div>
          <div >  <NavLink to="/login" className = " focus:bg-gradient-to-t from-blue-500 to-blue-900  focus:text-white px-5 py-2 text-center rounded-full basis-full"> Login </NavLink></div>  
          
         
         

           
        </div>
      </div>
    </div>
  );
};

export default Navbar;
