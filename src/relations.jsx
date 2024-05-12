import React from "react";
import { Link } from "react-router-dom";
import Menu from "./menu";
import Homeiconelement from "./homeiconelement";



const Relations = () => {
  return (
    <div class="mx-14">
      <div class="flex">
       <Homeiconelement />
        <Link to="/flashcard" > Flashcard &gt; </Link>
        <Link to="/flashcard/maths" className="mx-2"> Mathematics &gt; </Link>
        <Link className="text-blue-800 font-bold" to="/flashcard/maths/relations/study"> Relations and Functions </Link>
      </div>

      <h1 class="my-10 bg-gradient-to-t from-blue-700 to-blue-900 inline-block text-transparent bg-clip-text text-3xl font-bold">
       
        Relations and Functions (Mathematics)
      </h1>

    <Menu />



    </div>
  );
};

export default Relations;
