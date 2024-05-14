import React from 'react'
import Contentawaited from './Contentawaited'
import { Link } from "react-router-dom";
import Homeiconelement from './homeiconelement';

const Contact = () => {
  return (
    <div className='m-4 md:mx-14'>
        <div class=" flex text-xs md:text-base">
      <Homeiconelement />
      <Link to="/contact" className="text-blue-800 font-bold">  Contact </Link>
      </div>
      <Contentawaited />
    
    </div>
  )
}

export default Contact
