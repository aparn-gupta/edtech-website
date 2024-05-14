import React from 'react'
import { Link } from 'react-router-dom'

import Homeiconelement from './homeiconelement'
import Contentawaited from './Contentawaited'


const Maths = () => {
  return (

    <div className='mx-4 md:mx-14 '> 
       <div class= 'flex text-xs md:text-base'>
     
    <Homeiconelement />
     <Link to='/flashcard' className="mx-2"> Flashcard  &gt; </Link>
     <Link to= '/flashcard/maths' className='text-blue-800 font-bold'> Mathematics  </Link>
   
  </div>


 <Contentawaited />

<div className='flex justify-center'> 
<div className="flex flex-col w-2/5">
<Link className="text-blue-800 md:text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4" to= '/flashcard/maths/relations/study'> Relations and Functions </Link>
<Link className="text-blue-800 md:text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4"> Topic 2 </Link>
<Link className="text-blue-800 md:text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4"> Topic 3 </Link>
<Link className="text-blue-800 md:text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4"> Topic 4 </Link>

</div>
</div>



 </div>
   




  )
}

export default Maths
