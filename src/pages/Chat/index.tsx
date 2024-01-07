import React, { useState } from "react";
import "./style.css";
import ChatList from "components/Chat/chatList";
import ChattingRoom from "components/Chat/chattingRoom";

function Chat() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const filterOptions = ["전체", "멘토챗", "그룹챗", "개인챗"];

  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);

  const handleFilterClick = (option: string) => {
    setSelectedFilter(option);
  };

  const chatData = [
    {
      chatId: "1",
      userName: "김유저",
      lastTime: "10분 전",
      previewMessage: "안녕하세요",
      newMsgCount: 2,
    },
    {
      chatId: "2",
      userName: "이유저",
      lastTime: "30분 전",
      previewMessage: "아니",
      newMsgCount: 1,
    },
    {
      chatId: "2",
      userName: "이민지",
      lastTime: "40분 전",
      previewMessage: "어떤 팀원을 구하시나요?",
      newMsgCount: 1,
    },
    {
      chatId: "2",
      userName: "이민지",
      lastTime: "40분 전",
      previewMessage: "어떤 팀원을 구하시나요?",
      newMsgCount: 1,
    },
    {
      chatId: "2",
      userName: "이민지",
      lastTime: "40분 전",
      previewMessage: "어떤 팀원을 구하시나요?",
      newMsgCount: 1,
    },
  ];

  const handleChatSelect = (chatId: string) => {
    setSelectedChat(chatId);
  };

  return (
    <div className="chatting">
      <div className="chatContainer">
        <aside className="chattingList">
          <div className="chatlistHeader">
            <span className="chatlistHeaderTitle">
              <h2>채팅</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M0 30L2.57143 20.8929C2.09524 19.869 1.75 18.8155 1.53571 17.7321C1.32143 16.6488 1.21429 15.5357 1.21429 14.3929C1.21429 12.3929 1.58929 10.5238 2.33929 8.78571C3.08929 7.04762 4.11905 5.52381 5.42857 4.21429C6.7381 2.90476 8.2619 1.875 10 1.125C11.7381 0.375 13.6071 0 15.6071 0C17.6071 0 19.4762 0.375 21.2143 1.125C22.9524 1.875 24.4762 2.90476 25.7857 4.21429C27.0952 5.52381 28.125 7.04762 28.875 8.78571C29.625 10.5238 30 12.3929 30 14.3929C30 16.3929 29.625 18.2619 28.875 20C28.125 21.7381 27.0952 23.2619 25.7857 24.5714C24.4762 25.881 22.9524 26.9107 21.2143 27.6607C19.4762 28.4107 17.6071 28.7857 15.6071 28.7857C14.4643 28.7857 13.3512 28.6786 12.2679 28.4643C11.1845 28.25 10.131 27.9048 9.10714 27.4286L0 30ZM14.5357 20.1429H16.6786V15.6071H21.25V13.4643H16.6786V8.89286H14.5357V13.4643H9.96428V15.6071H14.5357V20.1429Z"
                  fill="#196AFF"
                />
              </svg>
            </span>
            <div className="input-container">
              <input type="text" className="searchChatlist" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_1656_108489)">
                  <path
                    d="M12.9167 11.6667H12.2583L12.025 11.4417C12.8417 10.4917 13.3333 9.25833 13.3333 7.91667C13.3333 4.925 10.9083 2.5 7.91667 2.5C4.925 2.5 2.5 4.925 2.5 7.91667C2.5 10.9083 4.925 13.3333 7.91667 13.3333C9.25833 13.3333 10.4917 12.8417 11.4417 12.025L11.6667 12.2583V12.9167L15.8333 17.075L17.075 15.8333L12.9167 11.6667ZM7.91667 11.6667C5.84167 11.6667 4.16667 9.99167 4.16667 7.91667C4.16667 5.84167 5.84167 4.16667 7.91667 4.16667C9.99167 4.16667 11.6667 5.84167 11.6667 7.91667C11.6667 9.99167 9.99167 11.6667 7.91667 11.6667Z"
                    fill="#808080"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1656_108489">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="chatListFilter">
              {filterOptions.map((option) => (
                <span
                  key={option}
                  className={
                    option === selectedFilter
                      ? "selectedFilter"
                      : "unSelectedFilter"
                  }
                  onClick={() => handleFilterClick(option)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleFilterClick(option)
                  }
                  role="button"
                  tabIndex={0}
                >
                  {option}
                </span>
              ))}
            </div>
          </div>
          <ChatList onChatSelect={handleChatSelect} chatData={chatData} />{" "}
        </aside>
        <div className="chattingRoom">
          {selectedChat ? (
            <ChattingRoom chatId={selectedChat} />
          ) : (
            <div className="chattingRoomBag">
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "100%",
                  width: "209.921px",
                  height: "209.921px",
                  backgroundColor: "#F5F8FF",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="111"
                  height="104"
                  viewBox="0 0 111 104"
                  fill="none"
                >
                  <path
                    d="M31.6653 48.9406C33.2254 48.9406 34.5331 48.415 35.5884 47.3639C36.6438 46.3128 37.1715 45.0104 37.1715 43.4566C37.1715 41.9028 36.6438 40.6004 35.5884 39.5493C34.5331 38.4982 33.2254 37.9726 31.6653 37.9726C30.1053 37.9726 28.7975 38.4982 27.7422 39.5493C26.6869 40.6004 26.1592 41.9028 26.1592 43.4566C26.1592 45.0104 26.6869 46.3128 27.7422 47.3639C28.7975 48.415 30.1053 48.9406 31.6653 48.9406ZM56.03 48.9406C57.59 48.9406 58.8978 48.415 59.9531 47.3639C61.0084 46.3128 61.5361 45.0104 61.5361 43.4566C61.5361 41.9028 61.0084 40.6004 59.9531 39.5493C58.8978 38.4982 57.59 37.9726 56.03 37.9726C54.4699 37.9726 53.1622 38.4982 52.1069 39.5493C51.0515 40.6004 50.5238 41.9028 50.5238 43.4566C50.5238 45.0104 51.0515 46.3128 52.1069 47.3639C53.1622 48.415 54.4699 48.9406 56.03 48.9406ZM79.431 48.9406C80.9911 48.9406 82.2988 48.415 83.3542 47.3639C84.4095 46.3128 84.9372 45.0104 84.9372 43.4566C84.9372 41.9028 84.4095 40.6004 83.3542 39.5493C82.2988 38.4982 80.9911 37.9726 79.431 37.9726C77.871 37.9726 76.5633 38.4982 75.5079 39.5493C74.4526 40.6004 73.9249 41.9028 73.9249 43.4566C73.9249 45.0104 74.4526 46.3128 75.5079 47.3639C76.5633 48.415 77.871 48.9406 79.431 48.9406ZM22.5802 87.7397L7.57599 102.684C6.29122 103.963 4.79998 104.253 3.10225 103.553C1.40453 102.854 0.555664 101.604 0.555664 99.8045V8.22206C0.555664 6.02847 1.38158 4.10908 3.03342 2.46388C4.68527 0.81869 6.61241 -0.00390625 8.81487 -0.00390625H102.419C104.622 -0.00390625 106.549 0.81869 108.201 2.46388C109.852 4.10908 110.678 6.02847 110.678 8.22206V79.5138C110.678 81.7073 109.852 83.6267 108.201 85.2719C106.549 86.9171 104.622 87.7397 102.419 87.7397H22.5802Z"
                    fill="#CCDEFF"
                  />
                </svg>
              </span>
              <span className="chattingRoomText" style={{ marginTop: "30px" }}>
                대화를 시작해보세요.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;
