import React from "react";
import Navigation from "./Navigation";
import "./Blog.scss";
import PreviewCard from "./PreviewCard.js";

function Blog() {
  return (
    <div>
      <Navigation />
      <div className="cont">
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
      </div>
    </div>
  );
}

export default Blog;
