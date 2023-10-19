import React from 'react'
import './loginNav.scss'

const LoginNav = () => {
  return (
    <div className='navParent'>
        <div className='navItems'>
            <div className='navLeft'>
                <div className='item1'>
                    <p className='pLogo'></p>
                    <p className='pLogoName'> NexCards </p>
                </div>
                <div className='item2'>
                    <p className='menuItem'>Home</p>
                </div>
                <div className='item3'>
                    <p className='menuItem'>Join</p>
                </div>
            </div>
            <div className='navRight'>
                
            </div>
        </div>
    </div>
  )
}

export default LoginNav