import React from "react";
import {Textarea, Button} from "@nextui-org/react";
import {SendIcon, PhotoIcon} from "../icons/chatIcon";

const ChatInput = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div style={{width:"95%",left:"50%"}} className="flex absolute bottom-2 buttomchat-div right-0 items-center justify-between bg-black">
        

      <Textarea
        variant="flat"
        placeholder="Enter your message"
        className="w-full outline-0	"
        minRows={1}
        size="lg"
        startContent={
          <Button size="sm" className="mr-1" color="primary" isIconOnly aria-label="Take a photo">
            <PhotoIcon />
          </Button>
        }
        endContent={
          <Button size="sm"  className="focus:outline-none" isIconOnly type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
              <SendIcon />
          </Button>
        }
      />

    </div>
  
  );
}


export default ChatInput