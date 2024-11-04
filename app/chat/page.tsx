"use client";

import ChatLayout from "./layout";

import "swiper/css";
import "swiper/css/effect-creative";
import "./style.css";

import ChatProfileSection from "@/components/chatPage/chatProfileSection";
import MessageSection from "@/components/chatPage/message";
import ChatInput from "@/components/chatPage/chatInput";

export default function ChatPage() {
  return (
    <ChatLayout>
      <ChatProfileSection />
      <MessageSection />
      <ChatInput />
    </ChatLayout>
  );
}
