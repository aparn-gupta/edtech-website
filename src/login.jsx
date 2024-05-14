import React from 'react'
import Contentawaited from './Contentawaited'
import Homeiconelement from './homeiconelement'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='m-4 md:mx-14'>
       <div class=" flex text-xs md:text-base">
      <Homeiconelement />
      <Link to="/login" className="text-blue-800 font-bold">  Login </Link>
      </div>
     <Contentawaited />
    </div>
  )
}

export default Login
