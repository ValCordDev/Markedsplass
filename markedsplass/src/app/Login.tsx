import React from 'react'
import Link from 'next/link'
import Inputs from './Inputs'

const Login = () => {
  return (
    <div className="flex text-2xl font-bold bg-blue-50 text-gray-800 h-screen justify-center p-24 flex-col gap-10">
        <h1 className="flex flex-row text-5xl">Logg inn<div className=" text-blue-700">.</div></h1>
        
        <p className='text-sm'><Link href={'/'} className='text-blue-700 hover:underline'>Lag ny bruker</Link></p>

        <Inputs />
    </div>
  )
}

export default Login