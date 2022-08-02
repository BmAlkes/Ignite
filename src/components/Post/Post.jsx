import React from "react";
import Avatar from "../../Avatar/Avatar";
import Comment from "../Comments/Comment";
import "./styles.css";

const Post = ({ author, publisheAt, content }) => {
  const dateFormat = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publisheAt);
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
          <p>{content[0].content}</p>
          <p>{content[1].content}</p>
          <p>
            <a href="#">{content[2].content}</a>
          </p>
        </div>
        <form className="commentForm">
          <strong>leave your feedback</strong>
          <textarea placeholder="leave a feedback" />
          <footer>
            <button type="submit">Comment</button>
          </footer>
        </form>
        <div className="commentList">
          <Comment />
        </div>
      </article>
    </>
  );
};

export default Post;
