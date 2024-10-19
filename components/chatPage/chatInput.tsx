import React from "react";
import {Textarea, Button} from "@nextui-org/react";
import {SendIcon, PhotoIcon} from "../icons/chatIcon";

const ChatInput = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div style={{flexGrow:1}} className="flex items-center mt-2 justify-between">
        <Button isIconOnly color="primary" aria-label="Take a photo">
            <PhotoIcon />
        </Button>

      <Textarea
      variant="bordered"
      placeholder="Enter your message"
      minRows={1}
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
            <SendIcon />
        </button>
      }
      className="max-w-xs"
    />

    </div>
  
  );
}


export default ChatInput