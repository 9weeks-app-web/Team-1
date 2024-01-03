import React from "react";
import "./style.css";

interface ChatUserProfileProps {
  chatId: string;
  userName: string;
  lastTime: string;
  previewMessage: string;
  newMsgCount: number;
  onChatSelect: (chatId: string) => void;
}

function ChatUserProfile({
  chatId,
  userName,
  lastTime,
  previewMessage,
  newMsgCount,
  onChatSelect,
}: ChatUserProfileProps) {
  const handleSelectChat = () => {
    onChatSelect(chatId);
  };

  return (
    <div
      className="userProfile"
      onClick={handleSelectChat}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleSelectChat();
      }}
    >
      <span className="profileBadge">badge</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 61 60"
        fill="none"
      >
        <ellipse cx="30.1378" cy="30" rx="30.0714" ry="30" fill="#D9D9D9" />
      </svg>
      <div className="listUserText">
        <div className="listUserPreview">
          <span className="listUserName">{userName}</span>
          <span className="listLastTime">{lastTime}</span>
        </div>
        <div className="listUserPreviewMsg">
          <div className="msgPreview">{previewMessage}</div>
          <div className="listNewMsgCount">{newMsgCount}</div>
        </div>
      </div>
    </div>
  );
}

export default ChatUserProfile;
