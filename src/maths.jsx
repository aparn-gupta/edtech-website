import React from 'react'
import { Link } from 'react-router-dom'

import Homeiconelement from './homeiconelement'


const Maths = () => {
  return (

    <div className='mx-14'> 
       <div class= 'flex'>
     
    <Homeiconelement />
     <Link to='/flashcard' className="mx-2"> Flashcard  &gt; </Link>
     <Link to= '/flashcard/maths' className='text-blue-800 font-bold'> Mathematics  </Link>
   
  </div>


  <div class="flex justify-center h-72 w-3/4 p-36 bg-blue-400 my-24 mx-36">
        <div> Content awaited </div>       
  </div>

<div className="flex flex-col w-2/5">
<Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4" to= '/flashcard/maths/relations/study'> Relations and Functions </Link>
<Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4"> Topic 2 </Link>
<Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4"> Topic 3 </Link>
<Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4"> Topic 4 </Link>

</div>



 </div>
   




  )
}

export default Maths
