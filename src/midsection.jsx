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


          <h1 class="mt-28 mb-12 bg-gradient-to-t from-blue-600 to-blue-900 inline-block text-transparent bg-clip-text text-5xl font-bold"> FAQ </h1>
       



    </div>
  );
};

export default Midsection;
