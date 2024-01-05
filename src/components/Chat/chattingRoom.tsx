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
    },
    { id: 1, text: "안녕하세요.", sender: "me" },
    {
      id: 1,
      text: "어떤 팀원을 구하시나요?",
      sender: "User1",
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
      <div className="chattingRoomHeader">채팅방헤더</div>
      <div className="chattingRoomMsg">
        {messages.map((message) => (
          <div
            key={message.id}
            className={
              message.sender === "me" ? "sentBubble" : "recievedBubble"
            }
          >
            {message.text}
          </div>
        ))}
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
