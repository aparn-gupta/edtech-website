import React from 'react'
import image10 from "./home.png";
import { Link } from "react-router-dom";

const Homeiconelement = () => {
  return (
    <div className='flex'>
      <Link to="/">  <img src={image10} alt="homeicon image"  className="h-6 w-6" />  </Link>
      <div className="mx-2"> &gt;</div>
    </div>
  )
}

export default Homeiconelement
