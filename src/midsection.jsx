import { Link } from "react-router-dom";
import React from "react";
import image4 from "./publogo.png";
import image5 from "./createfc.png";

const Midsection = () => {
  return (
    <div>


      <div class="flex justify-between my-12">

        <div class="h-20 w-56">
          <img src={image4} />
          </div>


          <div class = 'flex justify-between'>
            <Link to= "/create-flashcard" class = 'w-72 h-14'>
              <img src={image5} />
            </Link>         
          </div>

      </div>


       
       



    </div>
  );
};

export default Midsection;
