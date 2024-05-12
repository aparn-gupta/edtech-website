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

      <div class = 'w-3/5 border-2 border-solid border-blue-800 rounded-xl my-7 py-3 px-4 '>
        <div class = 'flex justify-between font-bold'>  {prop.Q} 
       <img class = 'h-6 w-6' src={image9} onClick={toggle}  />  </div>     
        
    {answer}      
      
    </div>



    </div>
  )
}

export default Faqsection
