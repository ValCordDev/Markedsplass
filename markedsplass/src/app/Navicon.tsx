import React from 'react'
import Link from 'next/link'

const Navicon = () => {
  return (
    <div className="navbar bg-none fixed z-10">
        <div className="flex-1">
            <Link href="/" passHref className='btn btn-ghost text-xl text-gray-800'>
                markedsplass
            </Link>
        </div>
    </div>
  )
}

export default Navicon