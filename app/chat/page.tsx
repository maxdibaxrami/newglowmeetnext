'use client'

import { title } from "@/components/primitives";
import ChatProfileSection from "@/components/chatPage/chatProfileSection";
import ChatLayout from "./layout";
import MessageSection from "@/components/chatPage/message";
import ChatInput from "@/components/chatPage/chatInput";

export default function ChatPage() {
  return (
    <ChatLayout>
      <ChatProfileSection/>
      <MessageSection/>
      <ChatInput/>
    </ChatLayout>
  );
}
