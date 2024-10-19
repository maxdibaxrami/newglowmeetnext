import React from "react";
import {Textarea, Button} from "@nextui-org/react";
import {SendIcon, PhotoIcon} from "../icons/chatIcon";

const ChatInput = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div style={{flexGrow:1,height:"10vh"}} className="flex items-center mt-2 px-2 justify-between">
        <Button className="mr-1" isIconOnly color="primary" aria-label="Take a photo">
            <PhotoIcon />
        </Button>

      <Textarea
      variant="bordered"
      placeholder="Enter your message"
      className="w-full"
      minRows={1}
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
            <SendIcon />
        </button>
      }
    />

    </div>
  
  );
}


export default ChatInput