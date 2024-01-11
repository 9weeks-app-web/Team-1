import React from "react";
import "./style.css";

interface MessageProps {
  user: string;
  message: string;
  work: string;
  category: string;
  time: string;
  profilePic: string;
  read: number;
}

// eslint-disable-next-line react/function-component-definition
const AlarmCard: React.FC<MessageProps> = ({
  user,
  message,
  work,
  category,
  time,
  profilePic,
  read,
}) => {
  return (
    <div className="alarmMsg">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div className={read === 1 ? "alarm-content" : "read-content"}>
        <span className="readState">{read}</span>
        <span className="alarmTitle">
          <p>{user}님</p>
          {work}
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
