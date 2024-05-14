import React from 'react'
import image9 from './down-arrow.png'


const Faqsection = (prop) => {
    const [shown, setShown]  = React.useState("false")
    
    function toggle() {
        setShown(prev => !prev)
    }

    let answer = 
        shown ? <div></div> : <div>{prop.A} </div>    
    


  return (
    <div>

      <div class = 'md:w-3/5 w-full border-2 border-solid border-blue-800 rounded-xl my-3 py-2 md:my-7 md:py-3 px-4 text-xs md:text-base '>
        <div class = 'flex justify-between font-bold'>  {prop.Q} 
       <img class = 'md:h-6 md:w-6 w-4 h-4' src={image9} onClick={toggle}  />  </div>     
        
    {answer}      
      
    </div>



    </div>
  )
}

export default Faqsection
