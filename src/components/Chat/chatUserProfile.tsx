import React from "react";
import "./style.css";

interface ChatUserProfileProps {
  chatId: string;
  profileP: string;
  userName: string;
  lastTime: string;
  previewMessage: string;
  newMsgCount: number;
  onChatSelect: (chatId: string) => void;
}

function ChatUserProfile({
  chatId,
  profileP,
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
      <img
        className="profilePicture"
        src={profileP}
        alt={`${userName}'s profile`}
      />

      <div className="listUserText">
        <div className="listUserPreview">
          <span className="listUserName">{userName}</span>
          <span className="listLastTime">{lastTime}</span>
        </div>
        <div className="listUserPreviewMsg">
          <div className="msgPreview">{previewMessage}</div>
        </div>
      </div>
      {newMsgCount > 0 && <div className="listNewMsgCount">{newMsgCount}</div>}
    </div>
  );
}

export default ChatUserProfile;
