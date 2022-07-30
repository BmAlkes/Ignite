import { Trash, ThumbsUp } from "phosphor-react";
import React from "react";
import "./style.css";

const Comment = () => {
  return (
    <div className="comment">
      <img
        src="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
        alt=""
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
            <button>
              <Trash size={24} />
            </button>
          </header>
          <p>Very Good!! congratulations!!👌👌👌</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Clap Hands
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
