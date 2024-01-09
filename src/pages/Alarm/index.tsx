import React from "react";
import "./style.css";
import Chip from "components/Chips/Chip";
import AlarmCard from "components/Alarm";
import { IMessageData } from "types/alarm";
import Profile from "../../assets/img/profile.jpg";

const messagesData: IMessageData[] = [
  {
    user: "김가영",
    message: "첫 번째 댓글이에요, 화이팅 입니다. 프로젝트 화이팅!",
    category: "포트폴리오",
    time: "10분 전",
    profilePic: Profile,
  },
  {
    user: "이가영",
    message: "두 번째 댓글이에요, 화이팅 입니다. 프로젝트 화이팅!",
    category: "포트폴리오",
    time: "22분 전",
    profilePic: Profile,
  },
  {
    user: "김쫑",
    message: "프로젝트 화이팅!",
    category: "프로젝트",
    time: "40분 전",
    profilePic: Profile,
  },
  {
    user: "주지훈",
    message: "좋아요",
    category: "프로젝트",
    time: "1일 전",
    profilePic: Profile,
  },
  {
    user: "이수진",
    message: "화이팅! 많이 배우고 갑니다.",
    category: "포트폴리오",
    time: "2일 전",
    profilePic: Profile,
  },
  {
    user: "김쫑",
    message: "프로젝트 화이팅!",
    category: "프로젝트",
    time: "2일전",
    profilePic: Profile,
  },
  {
    user: "주지훈",
    message: "좋아요",
    category: "프로젝트",
    time: "2일전",
    profilePic: Profile,
  },
  {
    user: "이수진",
    message: "화이팅! 많이 배우고 갑니다.",
    category: "포트폴리오",
    time: "4일 전",
    profilePic: Profile,
  },
];
function Alarm() {
  return (
    <div className="alarmAll">
      <div className="alarm">
        <div className="alarmTop">
          알림
          <div>
            <div className="alarmChips">
              <Chip title="전체" onClick={() => {}} />
              <Chip title="안읽음" onClick={() => {}} />
              <Chip title="팔로잉" onClick={() => {}} />
            </div>
            <div className="newAlarmContainer">
              <span>
                읽지않은 알림 <span className="newAlarm">8</span>개
              </span>
              <span>
                <input type="checkbox" className="newAlarmCheck" />
                모두 읽음 표시
              </span>
            </div>
            {messagesData.map((msg, index) => (
              <AlarmCard
                key={index}
                user={msg.user}
                message={msg.message}
                category={msg.category}
                time={msg.time}
                profilePic={msg.profilePic}
              />
            ))}

            <div className="alarmFooter">
              최근 14일 동안 받은 알림을 모두 확인했습니다.
              <span className="seeMoreBtn">이전 알림 더보기</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alarm;
