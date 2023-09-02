import MessageList from "./MessageList"
import ChatBox from "./Chatbox"

const Messaging = () => {
    

    return(
        <div className="flex flex-col lg:flex-row w-full">
            <MessageList/>
            <ChatBox />
        </div>
    )
}

export default Messaging