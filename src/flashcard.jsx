import React from "react";
import { Link } from "react-router-dom";

import Contentawaited from './Contentawaited'
import Homeiconelement from "./homeiconelement";


const Flashcard = () => {
  return (
    <div className="mx-14">
      <div class=" flex">
      <Homeiconelement />
      <Link to="/flashcard" className="text-blue-800 font-bold">  Flashcard </Link></div>    

    <Contentawaited />     

    
      <div className="flex flex-col w-1/3">
      <Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4" to= '/flashcard/maths'> Mathematics </Link>
        <Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4"> Course 2 </Link>
        <Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4"> Course 3 </Link>
        <Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4"> Course 4 </Link>

      </div>   
    </div>
  );
};

export default Flashcard;
