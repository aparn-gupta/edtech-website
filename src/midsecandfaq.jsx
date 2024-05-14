import React from 'react'
import Faqsection from './faqsection'
import faqData from './faqdata'


const Midsecandfaq = () => {
  return (
    

<div className="mx-4 md:mx-14 mb-24">   
        
        <h1 class="md:mt-28 md:mb-8 mb-5 mt-10 bg-gradient-to-t from-blue-600 to-blue-900  text-transparent bg-clip-text text-3xl md:text-5xl font-bold"> FAQ </h1>
       
          {faqData.map((item) => (
            <Faqsection key={item.id} Q={item.Q} A={item.A} />
          ))}

        </div>

      
   
  )
}

export default Midsecandfaq
