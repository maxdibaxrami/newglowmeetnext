
import ChatList from './chatList'
import MatchList from './matchList'
import ChatFiltermenu from './chatFilterMenu'

const ChatPage = () => {
    return <div className='w-full h-full'>

        <MatchList/>
        <div className="flex justify-between py-2 items-center">
            <span className="text-large">Chat</span>
            <span className="text-tiny text-default-400">
                <ChatFiltermenu/>
            </span>
        </div>

        <ChatList/>
    </div>
}

export default ChatPage