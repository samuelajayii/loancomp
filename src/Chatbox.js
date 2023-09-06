
import ChatBoxHeader from './ChatBoxHeader'

import TextBar from './TextBar'
import MessageArea from './MessageArea'


const ChatBox = () => {
    return(
        <div className='lg:flex flex-col w-full lg:ml-4 mt-5 lg:mt-0 border border-[#c2c4c5] rounded-md overflow-hidden'>
            <div>
                <ChatBoxHeader />
            </div>
            <div className='lg:h-full overflow-y-scroll'>
                <MessageArea />
                <TextBar />
            </div>
        </div>
    )
}

export default ChatBox