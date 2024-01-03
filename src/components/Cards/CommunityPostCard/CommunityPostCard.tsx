import React from "react";
import { IPostSummary } from "types/community";
import Badge from "components/Badges/Badge/Badge";
import Card from "../Card/Card";
import "./style.css";

interface ICommunityPostCardProps {
  post: IPostSummary;
}

function CommunityPostCard(props: ICommunityPostCardProps) {
  const { post } = props;

  return (
    <Card width="l">
      <div className="post-card-container">
        <div className="post-card-header">
          <div className="profile">
            <img className="profile-img" src={post.writer.profileImg} alt="" />
            <p>{post.writer.name}</p>
          </div>
          <div className="post-card-createdAt">{post.createdAt}</div>
        </div>
        <div className="post-card-post-info">
          <p className="post-card-title oneLineEllipsis">{post.title}</p>
          <p className="post-card-content oneLineEllipsis">{post.content}</p>
        </div>
        <div className="post-card-category oneLineEllipsis">
          {post.category.length &&
            post.category.map((el) => (
              <Badge key={el} text={el} type="orange" />
            ))}
        </div>
      </div>
    </Card>
  );
}

export default CommunityPostCard;
