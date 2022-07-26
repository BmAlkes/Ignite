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
    e.target.setCustomValidity("");
    setNewComments(e.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeleteOne);
  }

  const handleNewCommentInvalid = (e) => {
    e.target.setCustomValidity("Fucking new comment");
  };

  const isNewCommentEmpty = newComments.length === 0;

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
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type === "link") {
              return (
                <p key={line.content}>
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
            required
            onInvalid={handleNewCommentInvalid}
          />
          <footer>
            <button type="submit" disabled={isNewCommentEmpty}>
              Comment
            </button>
          </footer>
        </form>
        <div className="commentList">
          {comments.map((comment) => (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          ))}
        </div>
      </article>
    </>
  );
};

export default Post;
