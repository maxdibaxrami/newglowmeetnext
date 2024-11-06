"use client";
import "./style.css";
import { useTheme } from "next-themes";
const messages = [
  {
    type: "me",
    text: "Hey! How are you?",
    time: "11:00",
  },
  {
    type: "you",
    text: "I'm doing great, thanks! How about you?",
    time: "11:01",
  },
  {
    type: "me",
    text: "I'm good, just working on a project.",
    time: "11:05",
  },
  {
    type: "time",
    time: "11:05 yesterday",
  },
  {
    type: "you",
    text: "Sounds interesting! What's it about?",
    time: "11:07",
  },
  {
    type: "me",
    text: "I'm building a chat app in React!",
    time: "11:10",
  },
  {
    type: "you",
    text: "Nice! React is great for that.",
    time: "11:12",
  },
  {
    type: "me",
    text: "Totally! I love how reusable components are.",
    time: "11:15",
  },
  {
    type: "you",
    text: "Yeah, once you get the hang of it, it's very flexible.",
    time: "11:17",
  },
  {
    type: "me",
    text: "",
    time: "11:20",
    img: "https://via.placeholder.com/", // Image message
  },
  {
    type: "you",
    text: "That looks really nice!",
    time: "11:23",
  },
  {
    type: "me",
    text: "Thanks! What are you working on?",
    time: "11:25",
  },
  {
    type: "time",
    time: "11:05 yesterday",
  },
  {
    type: "you",
    text: "I'm working on a portfolio website for a client.",
    time: "11:27",
  },
  {
    type: "me",
    text: "",
    time: "11:30",
    img: "https://via.placeholder.com/", // Another image message
  },
  {
    type: "time",
    time: "11:05 today",
  },

  {
    type: "you",
    text: "That's a great layout! Simple and clean.",
    time: "11:32",
  },

  {
    type: "me",
    text: "Thanks! Let me know if you need help with anything.",
    time: "11:35",
  },
];

const MessageSection = () => {
  const Theme = useTheme();

  return (
    <div
      className={`${Theme.theme === "light" ? "message-container-light" : "message-container-dark"} w-full flex flex-col border-small px-1 gradient--telegram rounded-small border-default-200 dark:border-default-100`}
      style={{ maxHeight: "100%",height:"100%", overflow: "scroll" }}
    >
      {messages.map((msg, index) => {
        if (msg.type === "time") {
          return (
            <div key={index} className="mb-2">
              <p className="time">{msg.time}</p>
            </div>
          );
        }

        return (
          <div key={index} className={`chat-${msg.type} chat-m flex flex-col`}>
            <div className={`chat-bubble chat-${msg.type}`}>
              <p>{msg.text}</p>
              {msg.img && (
                <img alt="conversation" className="chat-image" src={msg.img} />
              )}
              <small className={`chat${msg.type}--time`}>{msg.time}</small>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageSection;
