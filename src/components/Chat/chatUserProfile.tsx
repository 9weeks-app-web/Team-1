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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="60"
        viewBox="0 0 66 66"
        fill="none"
        className="profilePicture"
      >
        <ellipse cx="32.3" cy="32.3" rx="32.3" ry="32.3" fill="#D9D9D9" />
      </svg>
      <div className="listUserText">
        <div className="listUserPreview">
          <span className="listUserName">{userName}</span>
          <span className="listLastTime">{lastTime}</span>
        </div>
        <div className="listUserPreviewMsg">
          <div className="msgPreview">{previewMessage}</div>
        </div>
      </div>
      <div className="listNewMsgCount">{newMsgCount}</div>
    </div>
  );
}

export default ChatUserProfile;
