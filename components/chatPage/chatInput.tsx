import React from "react";
import { Textarea, Button } from "@nextui-org/react";

import { SendIcon, PhotoIcon } from "../icons/chatIcon";

const ChatInput = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div
      className="flex fixed bot buttomchat-div right-0 items-center justify-between"
      style={{ width: "100%", left: "50%", backgroundColor: "#f4f4f5" }}
    >
      <Textarea
        className="w-full outline-0	pb-2"
        endContent={
          <Button
            isIconOnly
            aria-label="toggle password visibility"
            className="focus:outline-none"
            color="primary"
            size="sm"
            type="button"
            onClick={toggleVisibility}
          >
            <SendIcon />
          </Button>
        }
        minRows={1}
        placeholder="Enter your message"
        size="lg"
        startContent={
          <Button
            isIconOnly
            aria-label="Take a photo"
            className="mr-1"
            color="default"
            size="sm"
          >
            <PhotoIcon />
          </Button>
        }
        variant="solid"
      />
    </div>
  );
};

export default ChatInput;
