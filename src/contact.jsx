import React from 'react'
import Contentawaited from './Contentawaited'
import { Link } from "react-router-dom";
import Homeiconelement from './homeiconelement';

const Contact = () => {
  return (
    <div className='mx-14'>
        <div class=" flex">
      <Homeiconelement />
      <Link to="/contact" className="text-blue-800 font-bold">  Contact </Link>
      </div>
      <Contentawaited />
    
    </div>
  )
}

export default Contact
