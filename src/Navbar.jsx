import React from "react";
import image from "./hyggex.png";
import { NavLink } from "react-router-dom";
import menuicon from './menus.png'
import { Link } from "react-router-dom";

const Navbar = () => {

  const [navMenu, setnavmenu]  = React.useState(false)

  const toggle = () => {
    setnavmenu(prev => !prev)
  }
  let options = <div></div>

  const menubar = 
  <div>
       <div className=" flex flex-col my-6 md:hidden ">
    <div className="w-full  py-1  my-0.5  bg-gradient-to-t from-blue-500 to-blue-900   text-white text-center"> <Link to="/" className="  focus:text-black">Home </Link> </div>
<div  className="w-full  py-1 my-0.5  bg-gradient-to-t from-blue-500 to-blue-900   text-white text-center" >   <Link to="/flashcard" className="focus:text-black "> Flashcard  </Link> </div>
<div  className="w-full  py-1  my-0.5  bg-gradient-to-t from-blue-500 to-blue-900  text-white text-center">  <Link to="/contact" className=" focus:text-black "> Contact </Link></div>
<div className="w-full  py-1  my-0.5  bg-gradient-to-t from-blue-500 to-blue-900    text-white text-center"  >   <Link to="/faq" className=" focus:text-black  "> FAQ</Link></div>
<div className="w-full  py-1  my-0.5  bg-gradient-to-t from-blue-500 to-blue-900  text-white text-center" >  <Link to="/login" className=" focus:text-black "> Login </Link></div>

    </div>

  </div>
 



  navMenu ?  options = menubar : options = <div></div>





  return (
    <div className="mt-4 mb-8 md:mt-8 md:mb-16 md:text-base">
    
     
    <div className=" w-full flex justify-between font-sans ">
      <div className=" w-1/3 md:w-1/6 ">
        <img className=" w-full" src= {image} alt="myImage" />      
      </div>

      <img onClick={toggle} src= {menuicon} className="md:hidden h-9 w-9"/>

        
      <ul class=" hidden md:flex md:flex-wrap  md:w-2/5 md:justify-between md:text-base">

<li> <NavLink to="/" className=" py-1 px-2 focus:bg-gradient-to-t from-blue-500 to-blue-900  focus:text-white  md:py-2 text-center rounded-full md:px-5 ">Home </NavLink> </li>
<li>   <NavLink to="/flashcard" className="py-1 px-2 focus:bg-gradient-to-t from-blue-500 to-blue-900  md:py-2 text-center focus:text-white rounded-full md:px-5 "> Flashcard  </NavLink> </li>
<li>  <NavLink to="/contact" className="py-1 px-2 focus:bg-gradient-to-t from-blue-500 to-blue-900 focus:text-white md:py-2 text-center rounded-full md:px-5"> Contact </NavLink></li>
<li>   <NavLink to="/faq" className="px-2 py-1 focus:bg-gradient-to-t from-blue-500 to-blue-900  focus:text-white  md:py-2 text-center rounded-full md:px-5"> FAQ</NavLink></li>
<li>  <NavLink to="/login" className="px-2 py-1 focus:bg-gradient-to-t from-blue-500 to-blue-900  focus:text-white md:py-2 text-center rounded-full md:px-5"> Login </NavLink></li>



</ul>
   

     
  </div>

  <div className="md:hidden "> {options} </div>

 
 

  

  

  </div>

  )
}
 
  
 

export default Navbar;

