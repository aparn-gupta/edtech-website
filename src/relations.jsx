import React from "react";
import { Link } from "react-router-dom";
import image10 from "./home.png";
import Slider from "./sliders";



const Relations = () => {
  return (
    <div class="mx-14">
      <div class="flex">
        <Link to="/">
          <img src={image10} alt="homeicon image"  className="h-6 w-6 mr-2"/>
        </Link>
        <Link to="/flashcard" > &gt; Flashcard &gt; </Link>
        <Link to="/flashcard/maths" className="mx-2"> Mathematics &gt; </Link>
        <Link className="text-blue-800 font-bold" to="/flashcard/maths/relations"> Relations and Functions </Link>
      </div>

      <h1 class="my-10 bg-gradient-to-t from-blue-700 to-blue-900 inline-block text-transparent bg-clip-text text-3xl font-bold">
        {" "}
        Relations and Functions (Mathematics)
      </h1>

      <div class="flex justify-center my-20">
        
          <Link class="mx-5 focus:text-blue-800 focus:underline focusfont-bold"  to="/flashcard/maths/relations/study"> Study</Link>
          <div class="mx-5 focus:text-blue-800 focus:underline " to="/quiz"> Quiz</div>
          <div class="mx-5 focus:text-blue-800 focus:underline" to="/test"> Test</div>
          <div class="mx-5 focus:text-blue-800 focus:underline" to="/game"> Game</div>
          <div class="mx-5 focus:text-blue-800 focus:underline" to="/others"> Others</div>
       
      </div>

      <div className="mx-14">
          <Slider />
               
        </div>





    </div>
  );
};

export default Relations;
