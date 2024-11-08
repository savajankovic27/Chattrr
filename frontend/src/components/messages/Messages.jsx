import React from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import MessageContainer from './MessageContainer'
import useConversation from '../../zustand/useConversation'
import { AuthContext } from '../../context/AuthContext'



const Messages = () => {

  const { selectedConversation, setSelectedConversation } = useConversation();
  const {messages,loading} = useGetMessages();
  console.log("messages:", messages);
  return (
    // Overflow auto prevents the screen from overflowing and instead includes a scroll tab
    <div className='px-4 flex-1 overflow-auto'>   
        {!loading && messages.length >0 && messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}

        {loading && [...Array(5)].map((_,idx) => <MessageSkeleton key={idx} />)}
        {!loading && messages.length === 0 && (
          <p className='text-center text-black' > Start a message with {selectedConversation.fullName}  on Chattr</p>
        )}
    </div>
  )
}

export default Messages