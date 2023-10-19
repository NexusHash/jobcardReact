import React from 'react'
import OrgNav from './components/orgNav/orgNav'
import '../org/org.scss'

const Organisation = () => {
  return (
    <div className='bgOrg'>
     <OrgNav/>
      <div className='main'>
        <div className='row'>
          <div className='block'>
            <div className='content'>
              <p className='header'>Name</p>
              <p className='txt-content'>Kevin Roberts</p>
            </div>
          </div>
          <div className='block'>
            <div className='content'>
              <p className='header'>Name</p>
              <p className='txt-content'>Kevin Roberts</p>
            </div>
          </div>
          <div className='block'>
            <div className='content'>
              <p className='header'>Name</p>
              <p className='txt-content'>Kevin Roberts</p>
            </div>
          </div>
        </div>

        <div className='row'>
          <div>
            12312312
          </div>
          <div>
            12312312
          </div>
          <div>
            12312312
          </div>
        </div>

        <div className='row'>
          <div>
            12312312
          </div>
          <div>
            12312312
          </div>
          <div>
            12312312
          </div>
        </div>
      </div>
    </div>
  )
}

export default Organisation