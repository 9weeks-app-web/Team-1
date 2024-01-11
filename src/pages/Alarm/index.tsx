import React from "react";
import "./style.css";
import Chip from "components/Chips/Chip";
import AlarmCard from "components/Alarm";
import { IMessageData } from "types/alarm";
import alarm1 from "../../assets/img/alarm1.png";
import alarm2 from "../../assets/img/alarm2.png";
import alarm3 from "../../assets/img/alarm3.png";
import alarm4 from "../../assets/img/alarm4.png";
import alarm5 from "../../assets/img/alarm5.png";
import alarm6 from "../../assets/img/alarm6.png";
import alarm7 from "../../assets/img/alarm7.png";
import alarm8 from "../../assets/img/alarm8.png";

const messagesData: IMessageData[] = [
  {
    user: "더킹",
    read: 1,
    work: "외 2명이 회원님의 게시물을 공유했습니다.",
    message: "",
    category: "포트폴리오",
    time: "1분 전",
    profilePic: alarm1,
  },
  {
    user: "어침조",
    read: 1,
    work: "이 회원님의 게시물에 좋아요를 눌렀습니다.",
    message: "",
    category: "커뮤니티",
    time: "2분 전",
    profilePic: alarm2,
  },
  {
    user: "dummy",
    read: 0,
    work: "이 댓글을 남겼습니다.",
    message: "포트폴리오 멋져요!",
    category: "포트폴리오",
    time: "5분 전",
    profilePic: alarm3,
  },
  {
    user: "yall",
    read: 0,
    work: "외 5명이 회원님의 게시물을 좋아요를 눌렀습니다.",
    message: "",
    category: "포트폴리오",
    time: "30분 전",
    profilePic: alarm4,
  },
  {
    user: "크리스탈",
    read: 0,
    work: "외 2명이 회원님의 댓글에 좋아요를 눌렀습니다.",
    message: "",
    category: "커뮤니티",
    time: "1시간 전",
    profilePic: alarm5,
  },
  {
    user: "더레드",
    read: 0,
    work: "외 3명이 회원님의 게시물을 공유했습니다.",
    message: "",
    category: "포트폴리오",
    time: "2시간 전",
    profilePic: alarm6,
  },
  {
    user: "강동우",
    read: 0,
    work: "이 댓글을 남겼습니다.",
    message: "안목이 좋으시네요.",
    category: "포트폴리오",
    time: "1일 전",
    profilePic: alarm7,
  },
  {
    user: "조용훈",
    read: 0,
    work: "이 댓글을 남겼습니다.",
    message:
      "그건 때에 따라 다를 것 같네요. 하지만 실무에서는 보통 제외하는 편입니다.",
    category: "커뮤니티",
    time: "4일 전",
    profilePic: alarm8,
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
                읽지않은 알림 <span className="newAlarm">2</span>개
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
                read={msg.read}
                work={msg.work}
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
