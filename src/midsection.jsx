import { Link } from "react-router-dom";
import React from "react";
import image4 from "./publogo.png";
import image5 from "./createfc.png";

const Midsection = () => {
  return (
   


      <div class="flex justify-between my-8 md:my-12">

        <div class="w-1/4"> 
          <img class = 'w-full' src={image4} />
          </div>


          <div class = 'w-1/4'>
            <Link to= "/create-flashcard" >
              <img class = 'w-full md:pt-12 pt-4' src={image5} />
            </Link>         
          </div>

      </div>


       
       



 
  );
};

export default Midsection;
