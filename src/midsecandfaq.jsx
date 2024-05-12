import React from 'react'
import Faqsection from './faqsection'
import faqData from './faqdata'


const Midsecandfaq = () => {
  return (
    <div>

<div className="mx-14">   
        
        <h1 class="mt-28 mb-12 bg-gradient-to-t from-blue-600 to-blue-900 inline-block text-transparent bg-clip-text text-5xl font-bold"> FAQ </h1>
       
          {faqData.map((item) => (
            <Faqsection key={item.id} Q={item.Q} A={item.A} />
          ))}

        </div>

      
    </div>
  )
}

export default Midsecandfaq
