import React from "react";
import "./style.css";

interface ChatListProps {
  onChatSelect: (chatId: string) => void;
}

export function ChatList({ onChatSelect }: ChatListProps) {
  const handleSelectChat = (chatId: string) => {
    onChatSelect(chatId);
  };

  return (
    <div className="chatList">
      <div
        className="userProfile"
        onClick={() => handleSelectChat("someChatId")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSelectChat("someChatId");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="61"
          height="60"
          viewBox="0 0 61 60"
          fill="none"
        >
          <ellipse cx="30.1378" cy="30" rx="30.0714" ry="30" fill="#D9D9D9" />
        </svg>
        <div className="listUserText">
          <div className="listUserPreview">
            <span className="listUserName">채팅유저</span>
            <span className="listLastTime">10분 전</span>
          </div>
          <div className="msgPreview">메세지 미리보기 내용</div>
        </div>
        <div className="listNewMsgCount">1</div>
      </div>
    </div>
  );
}

export default ChatList;
