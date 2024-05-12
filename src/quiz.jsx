import React from 'react'
import { Link } from "react-router-dom";
import Menu from './menu';
import Contentawaited from './Contentawaited'
import Relations from './relations';

const Quiz = () => {
  return (
    <div>
         {/* <div class="flex justify-center my-20">
        
        <Link class="mx-5 focus:text-blue-800 focus:underline focus:font-bold"  to="/flashcard/maths/relations/study"> Study</Link>
        <Link class="mx-5 focus:text-blue-800 focus:underline focus:font-bold" to="/flashcard/maths/relations/quiz"> Quiz</Link>
        <Link class="mx-5 focus:text-blue-800 focus:underline focus:font-bold" to="/flashcard/maths/relations/test"> Test</Link>
        <Link class="mx-5 focus:text-blue-800 focus:underline focus:font-bold" to="/flashcard/maths/relations/game"> Game</Link>
        <Link class="mx-5 focus:text-blue-800 focus:underline focus:font-bold" to="/flashcard/maths/relations/others"> Others</Link>
     
    </div> */}
    <Relations/>

    

   <Contentawaited />
    </div>
  )
}

export default Quiz
