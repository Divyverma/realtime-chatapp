import { useRouter } from 'next/navigation';
import { format } from "date-fns";

const ChatBox = ({ chat, currentUser, currentChatId }) => {
    const router = useRouter();

    const otherMembers = chat?.members?.filter((member) => member._id !== currentUser._id)
    const lastMessage = chat?.messages?.length > 0 && chat?.messages[chat?.messages.length - 1];

    const seen = lastMessage?.seenBy?.find((member) => member._id === currentUser._id)

    return (
        <div className={`chat-box ${chat._id === currentChatId ? "bg-blue-2" : ""}`}
            onClick={() => router.push(`/chats/${chat._id}`)} >
            <div className='chat-info'>
                {chat?.isGroup ? (
                    <img src={chat?.groupPhoto || 'assets/group.png'}
                        alt='group-photo' className='profilePhoto' />
                ) : (
                    <img src={otherMembers[0].profileImage || '/assets/person.jpg'}
                        className='profilePhoto' alt='profile-photo' />
                )}

                <div className='chat-1'>
                    {
                        chat?.isGroup ? (
                            <p className='chat-name' >{chat?.name}</p>
                        ) : (
                            <p className='chat-name'>{otherMembers[0]?.username}</p>
                        )
                    }

                    {
                        !lastMessage && <p className='last-chat'>Started a Chat</p>
                    }

                    {
                        lastMessage?.photo ? (
                            lastMessage?.sender?._id === currentUser._id ? (
                                <p className="text-small-medium text-grey-3">You sent a photo</p>
                            ) : (
                                <p className={`${seen ? "last-mes" : "last-mes-1"}`} >
                                    received a Photo
                                </p>
                            )
                        ) : (
                            <p className={`last-message ${seen ? "last-mes" : "last-mes-1"}`} >
                                {lastMessage?.text}
                            </p>
                        )
                    }
                </div>
            </div>

            <div>
                <p className='text-base-light text-gray-300' >
                    {
                        !lastMessage ?
                            format(new Date(chat?.createdAt), "p")
                            : format(new Date(chat?.lastMessageAt), "p")
                    }
                </p>
            </div>

        </div>
    )
}

export default ChatBox