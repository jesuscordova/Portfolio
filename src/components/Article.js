import React, { useState } from "react";
import "./Article.scss";
import Navigation from "./Navigation";
import natureImage from "../images/nature.jpg";
import CommentCards from "./CommentCards";
import DisplayCommentCards from "./DisplayCommentCards";

function Article() {
  const [comments, setComments] = useState([]);
  
  function addComment(newComment) {

    setComments((prevComment) => {
      return [...prevComment, newComment];
    });
  }

  return (
    <div className="article-section">
      <Navigation />

      <div className="article-cont">
        <div className="article">
          <h1>Title of blog </h1>
          <p>Febuarary 11, 2019</p>
          <p>Subject: tesing purposes</p>
          <img className="article-image" src={natureImage} alt="user-pic" />
          <p className="body-text">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
      <div className="comment-section">
        <CommentCards onAdd={addComment} />
        <DisplayCommentCards/>

      </div>
    </div>
  );
}

export default Article;
