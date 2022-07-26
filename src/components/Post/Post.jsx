import React from "react";
import "./styles.css";

const Post = () => {
  return (
    <>
      <article className="post">
        <header>
          <div className="author">
            <img
              className="avatar"
              src="https://images.unsplash.com/photo-1527335480088-278dbeec0ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <div className="authorInfo">
              <strong>Bmalkes</strong>
              <span>Web Developer</span>
            </div>
          </div>
          <time dateTime="2022-07-26 21:48:30">Published a hour </time>
        </header>

        <div className="content">
          <p>Hey guys</p>
          <p>
            I just uploaded another project in my portfolio, and a project I did
            at the nlw rocketseat event
          </p>
          <p>
            <a href="#">#new project #nlw #rocketseat</a>
          </p>
        </div>
      </article>
    </>
  );
};

export default Post;
