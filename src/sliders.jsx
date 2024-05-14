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
      <img className="h-4 w-4 md:h-12 md:w-12" src={minusicon} onClick={() => handleVolumeChange(volume - 0.1)} />
      <span>Volume: {Math.round(volume * 100)}%</span>
      <img className="h-4 w-4 md:h-12 md:w-12" src= {plusicon} onClick={() => handleVolumeChange(volume + 0.1)}/> 
      {/* <audio ref={audioRef} src="" controls />  */}
      </div> : renderbutton = <div> </div> 

  return (

    <div> 
      
      

    
       <FullScreen handle={handle}>
        <div>

        <div className= 'flex justify-center '>

      <div className="bg-gradient-to-tr from-blue-500 to-blue-900  rounded-3xl md:w-1/2 w-96 h-56 md:h-96 ">

      <div className= 'flex justify-between m-6 md:m-9' >

      <img className="h-4 w-4 md:h-10 md:w-10" src={image1} onClick={() => {console.log("idea")}} />  
       
       <img className="h-4 w-4 md:h-10 md:w-10" src={image2} onClick={changeVolume} />  
        
      </div>
      <div className="text-white flex justify-center ">{renderbutton} </div>

      <div className= 'flex justify-center'>  
      <div className= 'md:my-20 my-8 text-2xl md:text-4xl text-white font-bold'> {displayed}     </div> 
        </div>  

</div>  

</div>  
          
        </div>       
       


      </FullScreen> 

      <div className="flex justify-center my-5">
          <div> <img className="md:mr-24 mr-14 h-6 w-6 md:h-10 md:w-10" onClick={() => setIndexx(0)}  src={image3} /></div>
          <div> <img className= 'h-6 w-6 md:h-10 md:w-10 md:mx-8 mx-6' src={image7} onClick={prevDiv} /></div>
          <div className="md:mx-2 font-bold md:text-2xl"> {indexx + 1} / 10 </div>
          <div>  <img className="md:h-10 md:w-10 h-6 w-6 md:mx-8 mx-6" src={image6} onClick={nextDiv} />   </div>
          <div> <img className="md:ml-24 ml-14 h-6 w-6 md:h-10 md:w-10" src={image11} onClick={handle.enter} /> </div>


      </div>

</div>       
    
    
  );
};

export default Slider;
