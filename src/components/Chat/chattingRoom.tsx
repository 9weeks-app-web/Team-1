import React from "react";
import "./style.css";

// interface ChatingRoomProps {
//   chatId: string;
// }

export function ChattingRoom(/* { chatId }: ChatingRoomProps */) {
  return (
    <div className="chattingRoomLayout">
      <div className="chattingRoomHeader">채팅방헤더</div>
      <div className="chattingRoomMsg">
        <div className="sentBubble">어떤 팀원을 구하시나요</div>
        <div className="recievedBubble">
          UIUX 경험을 해보고 싶은 분 누구나 가능합니다.
        </div>
      </div>

      <div className="chattingRoomInput">
        <input type="text" placeholder="메세지를 입력해주세요" />
      </div>
    </div>
  );
}

export default ChattingRoom;
