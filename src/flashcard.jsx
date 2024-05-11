import React from "react";
import { Link } from "react-router-dom";
import image10 from "./home.png";

const Flashcard = () => {
  return (
    <div className="mx-14">
      <div class=" flex">
       <Link to="/">  <img src={image10} alt="homeicon image"  className="h-6 w-6" />  </Link>
      <div className="mx-2"> &gt;</div>
      <Link to="/flashcard" className="text-blue-800 font-bold">  Flashcard </Link>
      </div>
      

      

    

     <div class="flex justify-center h-72 w-3/4 p-36 bg-blue-400 my-24 mx-36">
        <div> Content awaited </div>
        
      </div>

      

    
      <div className="flex flex-col w-1/2">
      <Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4" to= '/flashcard/maths'> Mathematics </Link>
        <Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4"> Section 2 </Link>
        <Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4"> Section 3 </Link>
        <Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4"> Section 4 </Link>

      </div>


   



    </div>
  );
};

export default Flashcard;
