import React from "react";
import "./style.css";
import ChatUserProfile from "./chatUserProfile";

interface ChatListProps {
  onChatSelect: (chatId: string) => void;
  chatData: Array<{
    chatId: string;
    profileP: string;
    userName: string;
    lastTime: string;
    previewMessage: string;
    newMsgCount: number;
  }>;
}

export function ChatList({ onChatSelect, chatData }: ChatListProps) {
  return (
    <div className="chatList">
      {chatData.map((chat) => (
        <ChatUserProfile
          key={chat.chatId}
          chatId={chat.chatId}
          profileP={chat.profileP}
          userName={chat.userName}
          lastTime={chat.lastTime}
          previewMessage={chat.previewMessage}
          newMsgCount={chat.newMsgCount}
          onChatSelect={onChatSelect}
        />
      ))}
    </div>
  );
}

export default ChatList;
