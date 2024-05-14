import React from "react";
import { Link } from "react-router-dom";
import Menu from "./menu";
import Homeiconelement from "./homeiconelement";



const Relations = () => {
  return (
    <div class="mx-4 md:mx-14">
      <div class="flex text-xs md:text-base">
       <Homeiconelement />
        <Link to="/flashcard" > Flashcard &gt; </Link>
        <Link to="/flashcard/maths" className="hidden md:mx-2"> Mathematics &gt; </Link>
        <Link to="/flashcard/maths" className="md:hidden mx-0.5"> Maths &gt; </Link>
        <Link className="text-blue-800 font-bold" to="/flashcard/maths/relations/study"> Relations and Functions </Link>
      </div>

      <h1 class="my-10 md:mt-16 md:mb-6 bg-gradient-to-t from-blue-700 to-blue-900 inline-block text-transparent bg-clip-text md:text-3xl font-bold">
       
        Relations and Functions (Mathematics)
      </h1>

    <Menu />



    </div>
  );
};

export default Relations;
