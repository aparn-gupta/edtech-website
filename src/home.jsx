import React from "react";
import { Link } from "react-router-dom";
import Contentawaited from './Contentawaited'

const Home = () => {
  return (
    <div class="mx-14">
   


   <Contentawaited />

      <div className="flex flex-col w-2/5">
      <Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4 truncate" to= '/flashcard'> Go to Flashcard </Link>
        <Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4 truncate"> Section 2 </Link>
        <Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4 truncate"> Section 3 </Link>
        <Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4 truncate"> Section 4 </Link>

      </div>

      



    </div>
  );
};

export default Home;
