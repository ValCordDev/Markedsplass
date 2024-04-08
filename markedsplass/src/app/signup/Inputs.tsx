import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/20/solid'

const Inputs = () => {
  return (
    <div className='flex justify-center flex-col gap-5'>
        <div className='xl:flex-row flex-col gap-5 flex xl:gap-0 lg:justify-between'>
          <input type="text" className="input input-bordered bg-white xl:w-64 w-auto" placeholder="Fornavn" />
          <input type="text" className="input input-bordered bg-white xl:w-64 w-auto" placeholder="Etternavn" />
        </div>

        <input type="mail" className="input input-bordered bg-white" placeholder="Mail" />
        
        <input type="password" className="input input-bordered bg-white" placeholder="Passord" />

        <button className="text-white hover:bg-blue-700 duration-300 rounded-lg p-3 text-base focus:border-2 bg-blue-600">Logg inn</button>
    </div>
  )
}

export default Inputs