import React from 'react'

import { Link } from "react-router-dom";

const Menu = () => {
  return (
    
    <div className="flex justify-center my-20">
      <div> <Link to="/flashcard/maths/relations/study" className="mx-5 focus:text-blue-800 focus:underline focus:font-bold"  > Study</Link>  </div>
      <div>  <Link to="/flashcard/maths/relations/quiz" className="mx-5 focus:text-blue-800 focus:underline focus:font-bold" > Quiz</Link> </div>
      <div>  <Link to="/flashcard/maths/relations/test" className="mx-5 focus:text-blue-800 focus:underline focus:font-bold" > Test</Link> </div>
      <div> <Link to="/flashcard/maths/relations/game" className="mx-5 focus:text-blue-800 focus:underline focus:font-bold" > Game</Link> </div>
      <div> <Link to="/flashcard/maths/relations/others" className="mx-5 focus:text-blue-800 focus:underline focus:font-bold" > Others</Link> </div>        

    </div>
  )
}

export default Menu
