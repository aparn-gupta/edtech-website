import React from 'react'
import { Link } from 'react-router-dom'
import image10 from './home.png'

const Maths = () => {
  return (

    <div className='mx-14'> 
       <div class= 'flex'>
     
     <Link to='/'>  <img src= {image10} alt='homeicon image'/> </Link>
     <Link to='/flashcard'> &gt; Flashcard  &gt; </Link>
     <Link to= '/flashcard/maths'> Mathematics  &gt; </Link>
    <Link to='/flashcard/maths/relations' > Relations and Functions  &gt; </Link>
  </div>

<div className="flex flex-col w-1/4">
<Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4" to= '/flashcard/maths/relations'> Relations and Functions </Link>
<Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4"> Section 2 </Link>
<Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4"> Section 3 </Link>
<Link className="text-blue-800 text-3xl font-bold border-2 border-solid border-blue-800 rounded-xl my-2 py-3 px-4"> Section 4 </Link>

</div> </div>
   




  )
}

export default Maths
