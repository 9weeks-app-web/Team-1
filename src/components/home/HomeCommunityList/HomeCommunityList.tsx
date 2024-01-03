import React, { useState } from "react";
import "./style.css";
import SinglePickChip from "components/Chips/SinglePickChip/SinglePickChip";
import { DUMMY_POSTS } from "constants/dummy";
import CommunityPostCard from "components/Cards/CommunityPostCard/CommunityPostCard";

function HomeCommunityList() {
  const [category, setCategory] = useState("디자인");

  return (
    <div className="home-community-list-container">
      <div className="category-selector">
        <SinglePickChip
          title="디자인"
          onClick={() => setCategory("디자인")}
          isActive={category === "디자인"}
        />
        <SinglePickChip
          title="기획"
          onClick={() => setCategory("기획")}
          isActive={category === "기획"}
        />
        <SinglePickChip
          title="포트폴리오 리뷰"
          onClick={() => setCategory("포트폴리오 리뷰")}
          isActive={category === "포트폴리오 리뷰"}
        />
        <SinglePickChip
          title="취업고민"
          onClick={() => setCategory("취업고민")}
          isActive={category === "취업고민"}
        />
        <SinglePickChip
          title="실무고민"
          onClick={() => setCategory("실무고민")}
          isActive={category === "실무고민"}
        />
      </div>
      <div className="home-postcard-list">
        {DUMMY_POSTS.map((el) => (
          <CommunityPostCard post={el} key={el.id} />
        ))}
      </div>
    </div>
  );
}

export default HomeCommunityList;
