import React from 'react'
import '../chat/chat.scss'
import chatbg from '../../img/bg/bg/chatbg.jpg'
import LeftBar from './components/leftBar/leftBar'

const Chat = () => {
  return (
    <div className='chatbg'>
      <div className='main'>
        <div className='left'>
          <LeftBar/>
        </div>
        <div className='center'>
          <img src={chatbg} className='chatbg' />
        </div>
        <div className='right'>
        </div>
      </div>
    </div>
  )
}

export default Chat