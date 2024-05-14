import React from "react";
import { Link } from "react-router-dom";

import Contentawaited from './Contentawaited'
import Homeiconelement from "./homeiconelement";


const Flashcard = () => {
  return (
    <div className=" mx-4 md:mx-14">
      <div class=" flex text-xs md:text-base">
      <Homeiconelement />
      <Link to="/flashcard" className="text-blue-800 font-bold">  Flashcard </Link></div>    

    <Contentawaited />     

      <div className="flex justify-center"> 
      <div className=" flex flex-col w-3/5 md:w-2/5">
      <Link className=" text-blue-800 md:text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4" to= '/flashcard/maths'> Mathematics </Link>
        <Link className="text-blue-800 md:text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4"> Course 2 </Link>
        <Link className="text-blue-800 md:text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4"> Course 3 </Link>
        <Link className="text-blue-800 md:text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4"> Course 4 </Link>

      </div>   </div>
      
    </div>
  );
};

export default Flashcard;
