import React, { useState } from "react";
import "./style.css";
import ChatList from "components/Chat/chatList";
import ChattingRoom from "components/Chat/chattingRoom";

function Chat() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  const handleChatSelect = (chatId: string) => {
    setSelectedChat(chatId);
  };

  return (
    <div className="chatting">
      <h1>김스팩님</h1>
      <div className="chatContainer">
        <aside className="chattingList">
          <div className="unreadMsg">
            안 읽은 메세지만 보기
            <input type="checkbox" id="unreadMsgCheck" />
          </div>
          <ChatList onChatSelect={handleChatSelect} />
          <ChatList onChatSelect={handleChatSelect} />
          <ChatList onChatSelect={handleChatSelect} />
          <ChatList onChatSelect={handleChatSelect} />
          <ChatList onChatSelect={handleChatSelect} />
          <ChatList onChatSelect={handleChatSelect} />
          <ChatList onChatSelect={handleChatSelect} />
          <ChatList onChatSelect={handleChatSelect} />
          <ChatList onChatSelect={handleChatSelect} />
          <ChatList onChatSelect={handleChatSelect} />
          <ChatList onChatSelect={handleChatSelect} />
        </aside>
        <div className="chattingRoom">
          {selectedChat ? (
            <ChattingRoom />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="250"
              height="250"
              viewBox="0 0 250 250"
              fill="none"
            >
              <path
                d="M237.5 50H212.5V162.5H50V187.5C50 194.375 55.625 200 62.5 200H200L250 250V62.5C250 55.625 244.375 50 237.5 50ZM187.5 125V12.5C187.5 5.625 181.875 0 175 0H12.5C5.625 0 0 5.625 0 12.5V187.5L50 137.5H175C181.875 137.5 187.5 131.875 187.5 125Z"
                fill="#0059FF"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;
