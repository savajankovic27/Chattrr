import React from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import MessageContainer from './MessageContainer'
import useConversation from '../../zustand/useConversation'
import { AuthContext } from '../../context/AuthContext'
import { useRef, useEffect } from 'react'


const Messages = () => {
  const lastMessageRef = useRef();
  const { selectedConversation, setSelectedConversation } = useConversation();
  const {messages,loading} = useGetMessages();
  console.log("messages:", messages);

  useEffect(()=> {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior: "smooth"});
    }, 100);
  }, [messages])
  return (
    // Overflow auto prevents the screen from overflowing and instead includes a scroll tab
    <div className='px-4 flex-1 overflow-auto'>   
        {!loading && 
         messages.length >0 && 
         messages.map((message) => (
          <div key={message._id}
            ref={lastMessageRef}
          >
            <Message message={message} />
          </div>
        ))}

        {loading && [...Array(5)].map((_,idx) => <MessageSkeleton key={idx} />)}
        {!loading && messages.length === 0 && (
          <p className='text-center text-black' > Start a message with {selectedConversation.fullName}  on Chattr</p>
        )}
    </div>
  )
}

export default Messages