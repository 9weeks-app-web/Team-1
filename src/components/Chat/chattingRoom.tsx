import React, { useEffect, useState } from "react";
import "./style.css";

const loadMessagesForChat = async (chatId: string) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return [
    {
      id: 1,
      text: `${chatId}안녕하세요. 어떤 팀원을 구하시나요?`,
      sender: "me",
      time: "오전 10:44",
    },
    {
      id: 1,
      text: `UXUI 경험을 해보고 싶은 분 누구나 가능합니다!!! `,
      sender: "이민지",
      time: "오전 10:43",
    },
    {
      id: 1,
      text: "오!! 프로젝트 경험 3회 있어요! 제 프로필에서 작업물도 확인 할 수 있어요 ㅎㅎ",
      sender: "me",
      time: "오전 10:44",
    },
    {
      id: 1,
      text: "아 그럼 작업물 확인해보겠습니다!!",
      sender: "이민지",
      time: "오전 10:45",
    },
    {
      id: 1,
      text: "네 확인해보시고 다시 연락주세요!! 감사합니다 ㅎㅎ",
      sender: "me",
      time: "오전 10:44",
    },
  ];
};

interface ChattingRoomProps {
  chatId: string;
}

interface Message {
  id: number;
  text: string;
  sender: string;
  time: string;
}

function ChattingRoom({ chatId }: ChattingRoomProps) {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const loadedMessages = await loadMessagesForChat(chatId);
        setMessages(loadedMessages);
      } catch (error) {
        console.error("Failed to load messages", error);
      }
    };

    fetchMessages();
  }, [chatId]);

  return (
    <div className="chattingRoomLayout">
      <div className="chattingRoomHeader">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="20"
          viewBox="0 0 13 20"
          fill="none"
        >
          <path
            d="M12.35 17.65L4.71667 10L12.35 2.35L10 0L0 10L10 20L12.35 17.65Z"
            fill="black"
          />
        </svg>
        <span className="chattingRoormHeadeProfile">
          <div className="header-profilePicture" />

          <span className="userInfo">
            <span className="userName">이민지</span>
            <span className="lastConnect">최근에 접속함</span>
          </span>
        </span>
      </div>
      <div className="chattingDate">2023년 12월 28일 목요일</div>
      <div className="msgLine">
        <div className="chattingRoomMsg">
          {messages.map((message) => (
            <div key={message.id} className="chattingRoomMsgP">
              <div
                className={
                  message.sender === "me" ? "sentBubble" : "recievedBubble"
                }
              >
                <span className="chattingRoomMsgProfile" />
                <div className="messageContent">
                  <span className="messageSender">{message.sender}</span>
                  <span className="msgText">
                    <span className="messageText">{message.text}</span>
                    <span className="bubbleTime">{message.time}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="chattingRoomInput">
        <div className="textareaContainer">
          <textarea placeholder="메세지를 입력해주세요" />
          <div className="textareaFooter">
            <span className="sendMsgBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clipPath="url(#clip0_2408_35311)">
                  <path d="M28 25.3333V6.66667C28 5.2 26.8 4 25.3333 4H6.66667C5.2 4 4 5.2 4 6.66667V25.3333C4 26.8 5.2 28 6.66667 28H25.3333C26.8 28 28 26.8 28 25.3333ZM11.8667 18.64L14.6667 22.0133L18.8 16.6933C19.0667 16.3467 19.6 16.3467 19.8667 16.7067L24.5467 22.9467C24.88 23.3867 24.56 24.0133 24.0133 24.0133H8.02667C7.46667 24.0133 7.16 23.3733 7.50667 22.9333L10.8267 18.6667C11.08 18.32 11.5867 18.3067 11.8667 18.64Z" />
                </g>
                <defs>
                  <clipPath id="clip0_2408_35311">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clipPath="url(#clip0_2408_35308)">
                  <path d="M4.53366 27.2007L27.8003 17.2273C28.8803 16.7607 28.8803 15.2407 27.8003 14.774L4.53366 4.80067C3.65366 4.41401 2.68033 5.06734 2.68033 6.01401L2.66699 12.1607C2.66699 12.8273 3.16033 13.4007 3.82699 13.4807L22.667 16.0007L3.82699 18.5073C3.16033 18.6007 2.66699 19.174 2.66699 19.8407L2.68033 25.9873C2.68033 26.934 3.65366 27.5873 4.53366 27.2007Z" />
                </g>
                <defs>
                  <clipPath id="clip0_2408_35308">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChattingRoom;
