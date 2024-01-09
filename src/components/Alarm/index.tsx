import React from "react";
import "./style.css";

interface MessageProps {
  user: string;
  message: string;
  category: string;
  time: string;
  profilePic: string;
}

// eslint-disable-next-line react/function-component-definition
const AlarmCard: React.FC<MessageProps> = ({
  user,
  message,
  category,
  time,
  profilePic,
}) => {
  return (
    <div className="alarmMsg">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div className="alarm-content">
        <span className="alarmTitle">
          <p>{user}님</p>이 댓글을 남겼습니다.
        </span>
        <span className="alarmMsgSec">{message}</span>
        <span className="alarmCardFooter">
          <span className="alarmCtg">{category}</span>|
          <span className="time-stamp">{time}</span>
        </span>
      </div>
    </div>
  );
};

export default AlarmCard;
