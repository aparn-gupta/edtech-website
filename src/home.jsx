import React from "react";
import { Link } from "react-router-dom";
import image10 from "./home.png";

const Home = () => {
  return (
    <div class="mx-14">
   


      <div class="flex justify-center h-72 w-3/4 p-36 bg-blue-400 my-24 mx-36">
        <div> Content awaited </div>       
  </div>

      <div className="flex flex-col w-1/4">
      <Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4" to= '/flashcard'> Go to Flashcard </Link>
        <Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4"> Section 2 </Link>
        <Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4"> Section 3 </Link>
        <Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4"> Section 4 </Link>

      </div>

      



    </div>
  );
};

export default Home;
