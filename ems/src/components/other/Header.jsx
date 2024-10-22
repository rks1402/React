import React from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {
  
  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello,<br /> <span className='text-3xl font-semibold'>{props.data.firstName} 🔥</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-sm hover:bg-red-700'>Log Out</button>
    </div>
  )
}

export default Header