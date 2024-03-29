import React from 'react'
import { Link } from 'react-router-dom'

const BottomWarning = ({label,buttontext,to}) => {
  return<div className=' py-2 text-sm justify-center'>
    <div>
        {label}
    </div>
    
        <Link className='pointer underline pl-1 cursor-pointer' to={to}>
        {buttontext}
        </Link>
    
  </div>
}

export default BottomWarning
