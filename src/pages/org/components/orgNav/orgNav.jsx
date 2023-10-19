import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Popup from 'reactjs-popup';
import man1 from'../../../../img/placeholder/pf/man1.jpg'

const OrgNav = () => {
  return (
    <div className='navParentOrg'>
        <div className='navItems'>
            <div className='navLeft'>
                <div className='item1'>
                    <p className='pLogo'></p>
                    <p className='pLogoName'> NexCards </p>
                </div>
                <div className='item2'>
                    <p className='menuItem'>Home</p>
                    <p className='menuItem'>Company</p>
                    <p className='menuItem'>Jobs</p>
                </div>
            </div>
            <div className='navRight'>
                <div className='item1'>
                    <p className='menuItem'> You are currently signed in as  </p>

                    <Popup
                      trigger={
                      <img className="pfImage" src={man1}/>}
                      position="bottom center"
                      nested
                      
                    >
                      <div className='popMenu'>
                        <p className='pMenu'>My Profile</p>
                        <p className='pMenu'>Edit Profile</p>
                        <p className='pMenu'>Company</p>
                        <p className='pMenu'>Jobs</p>
                        <p className='pMenu'>Sign Out</p>
                      </div>
                    </Popup>

                </div>
            </div>
        </div>
    </div>
  )
}

export default OrgNav