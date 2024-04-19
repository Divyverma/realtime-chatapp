import ChatList from "@component/ChatList"
import Contacts from "@component/Contacts"


const Chats = () => {
  return (
    <div className="main-container" >
      <div className="w-1/3 max-lg:1/2 max-md:w-full">
        <ChatList/>
      </div>
      <div className="w-2/3 max-lg:1/2 max-md:hidden">
        <Contacts/>
      </div>
    </div>
  )
}

export default Chats