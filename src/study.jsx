import React from 'react'
import Relations from './relations'
import Slider from './sliders'
import Midsection from './midsection'

const Study = () => {
  return (
    <div>
      <Relations />

      <div className="mx-14">
          <Slider />
          <Midsection /> 
               
        </div>
    </div>
  )
}

export default Study
