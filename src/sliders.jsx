import React from "react";
import { useState, useRef } from 'react';
import divs from "./divs";
import image1 from "./bulb.png";
import image2 from "./volume.png";
import image3 from './refresh-arrow.png'
import image6 from './arrow-right.png'
import image7 from './back.png'
import image11 from './expand.png'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import plusicon from './plus.png'
import minusicon from './minus.png'
import { Link } from "react-router-dom";



const Slider = () => {
  const [indexx, setIndexx] = React.useState(0);
  const audioRef = useRef(null);

  const nextDiv = () => {
    setIndexx((prev) => (prev === 9 ? 0 : prev + 1));
  };

  const prevDiv = () => {
    setIndexx((prev) => (prev === 0 ? 9 : prev - 1));
  };

  const displayed = divs[indexx];

  const handle = useFullScreenHandle();

 
    const [volume, setVolume] = useState(0.5); 
    const [volumeControls, setVolumeControls] = useState(false)

   

    const handleVolumeChange = (newVolume) => {
    
      newVolume = Math.min(Math.max(newVolume, 0), 1);
      setVolume(newVolume);
      setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }      
  
    }   


    const changeVolume = () => {
      setVolumeControls( prev => !prev)
    }
    
    let renderbutton = <div> </div>
  

    volumeControls ? renderbutton = <div>
      <img src={plusicon} onClick={() => handleVolumeChange(volume - 0.1)} />
      <span>Volume: {Math.round(volume * 100)}%</span>
      <img src= {minusicon} onClick={() => handleVolumeChange(volume + 0.1)}/> 
      {/* <audio ref={audioRef} src="" controls />  */}
      </div> : renderbutton = <div> </div> 

  return (

    <div> 
      
      

    
       <FullScreen handle={handle}>
        <div>

        <div class= 'flex justify-center '>

      <div class ="bg-gradient-to-tr from-blue-500 to-blue-900  rounded-3xl max-h-screen max-w-screen-lg w-1/2 h-96 ">

      <div class= 'flex justify-between m-9' >
       <img src={image1} onClick={() => {}}/>
       
       <img src={image2} onClick={changeVolume} />  
       
      </div>
      <div className="text-white flex justify-center"> {renderbutton} </div>

      <div class = 'flex justify-center'>  
      <div class= 'my-24 text-4xl text-white font-bold'> {displayed}     </div> 
        </div>  

</div>  

</div>  
          
        </div>       
       


      </FullScreen> 

      <div class="flex justify-center my-5">
          <div  class="mr-24"> <Link to= "/flashcard/maths/relations/study"> <img src={image3} /> </Link></div>
          <div  class="mx-8 "> <img class= 'h-12 w-12' src={image7} onClick={prevDiv} /></div>
          <div  class="mx-8 font-bold text-2xl"> {indexx + 1} / 10 </div>
          <div  class="mx-8">  <img class="h-12 w-12 mr-4" src={image6} onClick={nextDiv} />   </div>
          <div  class="ml-24"> <img class="mr-4" src={image11} onClick={handle.enter} /> </div>


      </div>

</div>       
    
    
  );
};

export default Slider;
