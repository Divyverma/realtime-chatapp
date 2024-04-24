'use client'
import ChatDetail from '@component/ChatDetail';
import ChatList from '@component/ChatList';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

const ChatPage = () => {
  const { chatId } = useParams();

  const { data: session } = useSession();
  const currentUser = session?.user

  const seenMessages = async () => {
    try {
      await fetch(`/api/chats/${chatId}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          currentUserId: currentUser._id
        })
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (currentUser && chatId) seenMessages();
  }, [currentUser, chatId]);


  return (
    <div className='main-container'>
      <div className='chat-text'> <ChatList currentChatId={chatId} /> </div>
      <div className='chat-text-1' > <ChatDetail chatId={chatId} /> </div>
    </div>
  )
}

export default ChatPage