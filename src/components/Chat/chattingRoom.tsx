import React, { useEffect, useState } from "react";
import "./style.css";

const loadMessagesForChat = async (chatId: string) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return [
    {
      id: 1,
      text: `${chatId} :안녕하세요 `,
      sender: "User1",
      time: "오전 10:43",
    },
    { id: 1, text: "안녕하세요.", sender: "me", time: "오전 10:44" },
    {
      id: 1,
      text: "어떤 팀원을 구하시나요?",
      sender: "User1",
      time: "오전 10:45",
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
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="53"
            viewBox="0 0 66 66"
            fill="none"
            className="profilePicture"
          >
            <ellipse cx="32.3" cy="32.3" rx="32.3" ry="32.3" fill="#D9D9D9" />
          </svg>
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
                  <span className="messageText">{message.text}</span>
                </div>
                <span className="bubbleTime">{message.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="chattingRoomInput">
        <div className="textareaContainer">
          <textarea placeholder="메세지를 입력해주세요" />
          <div className="textareaFooter">
            <button type="button" className="sendMsgBtn">
              전송
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChattingRoom;
