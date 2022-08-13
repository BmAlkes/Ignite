import { Trash, ThumbsUp } from "phosphor-react";
import React, { useState } from "react";
import Avatar from "../../Avatar/Avatar";
import "./style.css";

const Comment = ({ content, onDeleteComment }) => {
  const handleDeleteComment = (e) => {
    onDeleteComment(content);
  };

  const [likesCount, setLikeCount] = useState(0);

  const handleLikeCount = () => {
    setLikeCount(likesCount + 1);
  };

  return (
    <div className="comment">
      <Avatar
        src={
          "https://images.unsplash.com/photo-1527335480088-278dbeec0ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }
        hasBorder={false}
      />
      <div className="commentBox">
        <div className="commentContent">
          <header>
            <div className="authorAndTime">
              <strong>Bmalkes</strong>
              <time dateTime="2022-07-26 21:48:30">
                Published around a hour ago{" "}
              </time>
            </div>
            <button onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp />
            Clap Hands
            <span>{likesCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
