import React from 'react'
import Contentawaited from './Contentawaited'
import Homeiconelement from './homeiconelement'
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <div className='m-4 md:mx-14'>
       <div class="text-xs md:text-base flex">
      <Homeiconelement />
      <Link to="/faq" className="text-blue-800 font-bold">  FAQ </Link>
      </div>
     <Contentawaited />
    </div>
  )
}

export default Faq
