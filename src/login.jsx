import React from 'react'
import Contentawaited from './Contentawaited'
import Homeiconelement from './homeiconelement'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='mx-14'>
       <div class=" flex">
      <Homeiconelement />
      <Link to="/login" className="text-blue-800 font-bold">  Login </Link>
      </div>
     <Contentawaited />
    </div>
  )
}

export default Login
