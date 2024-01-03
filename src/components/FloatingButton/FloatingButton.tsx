import React from "react";
import "./style.css";
import Icon from "components/Icon/Icon";
import { useNavigate } from "react-router-dom";

function FloatingButton() {
  const navigate = useNavigate();

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const newPost = () => {
    navigate("/project/write");
  };

  return (
    <div className="floating-button-container">
      <div className="to-top" role="presentation" onClick={toTop}>
        <Icon icon="expand_less" className="big-icon" />
      </div>
      <div className="edit" role="presentation" onClick={newPost}>
        <Icon icon="edit" />
        <span>새 글 쓰기</span>
      </div>
    </div>
  );
}

export default FloatingButton;
