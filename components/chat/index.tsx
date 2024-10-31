import ChatList from "./chatList";
import MatchList from "./matchList";
import ChatFiltermenu from "./chatFilterMenu";

const ChatPage = () => {
  return (
    <div style={{overflow:"scroll", maxHeight:"calc(100vh - 4rem)",paddingBottom:"6rem"}} className="w-full h-full px-6">
      <div className="flex justify-between py-2 items-center">
        <span className="text-large">Matches</span>
      </div>
      <MatchList />
      <div className="flex justify-between py-2 items-center">
        <span className="text-large">Chat</span>
        <span className="text-tiny text-default-400">
          <ChatFiltermenu />
        </span>
      </div>

      <ChatList />
    </div>
  );
};

export default ChatPage;
