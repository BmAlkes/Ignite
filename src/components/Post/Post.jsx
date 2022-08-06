import React, { useState } from "react";
import Avatar from "../../Avatar/Avatar";
import Comment from "../Comments/Comment";
import "./styles.css";

const Post = ({ author, publisheAt, content }) => {
  const [comments, setComments] = useState([]);
  const [newComments, setNewComments] = useState("");
  const dateFormat = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publisheAt);

  function handleCreateNewComment(e) {
    e.preventDefault();
    setComments([...comments, newComments]);

    e.target.comment.value = "";
  }
  function handleNewCommentChange(e) {
    setNewComments(e.target.value);
  }

  return (
    <>
      <article className="post">
        <header>
          <div className="author">
            <Avatar src={author.avatarUrl} />
            <div className="authorInfo">
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>
          <time dateTime="2022-07-26 21:48:30">{dateFormat} </time>
        </header>

        <div className="content">
          {content.map((line) => {
            if (line.type === "paragraph") {
              return <p>{line.content}</p>;
            } else if (line.type === "link") {
              return (
                <p>
                  <a href="">{line.content}</a>
                </p>
              );
            }
          })}
        </div>
        <form onSubmit={handleCreateNewComment} className="commentForm">
          <strong>leave your feedback</strong>
          <textarea
            placeholder="leave a feedback"
            name="comment"
            onChange={handleNewCommentChange}
          />
          <footer>
            <button type="submit">Comment</button>
          </footer>
        </form>
        <div className="commentList">
          {comments.map((comment, index) => (
            <Comment key={index} content={comment} />
          ))}
        </div>
      </article>
    </>
  );
};

export default Post;
