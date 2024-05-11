import React from "react";
import divs from "./divs";
import image1 from "./bulb.png";
import image2 from "./volume.png";
import image3 from './refresh-arrow.png'
import image6 from './arrow-right.png'
import image7 from './back.png'
import Fulll from "./fullscreen";
import  {useCallback} from 'react';
import image11 from './expand.png'
import { FullScreen, useFullScreenHandle } from "react-full-screen";



const Slider = () => {
  const [indexx, setIndexx] = React.useState(0);

  const nextDiv = () => {
    setIndexx((prev) => (prev === 9 ? 1 : prev + 1));
  };

  const prevDiv = () => {
    setIndexx((prev) => (prev === 0 ? 9 : prev - 1));
  };

  const displayed = divs[indexx];

  const handle = useFullScreenHandle();

 

  return (

    <div> 
      

    
       <FullScreen handle={handle}>
        
       <div class= 'flex justify-center '>

      <div class ="bg-gradient-to-tr from-blue-500 to-blue-900 w-1/2 h-96 rounded-3xl max-h-screen max-w-screen-lg">

        <div class= 'flex justify-between m-9' >
          <img src={image1} />
          <img src={image2} />  
            </div>

            <div class = 'flex justify-center'>  
            <div class= 'my-24 text-4xl text-white font-bold'> {displayed}     </div> 
              </div>  
   
   </div>  
   
   </div>  


      </FullScreen> 

      <div class="flex justify-center my-5">
          <div  class="mr-24"> <img src={image3} onClick={() => {window.location.reload()}}/></div>
          <div  class="mx-8 "> <img class= 'h-12 w-12' src={image7} onClick={prevDiv} /></div>
          <div  class="mx-8 font-bold text-2xl"> {indexx + 1} / 10 </div>
          <div  class="mx-8">  <img class="h-12 w-12 mr-4" src={image6} onClick={nextDiv} />   </div>
          <div  class="ml-24"> <img class="mr-4" src={image11} onClick={handle.enter} /></div>


      </div>





</div> 
      
    
    
  );
};

export default Slider;
