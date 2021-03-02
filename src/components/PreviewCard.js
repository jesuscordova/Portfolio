import React from "react";
import "./PreviewCard.scss";
import natureImage from "../images/nature.jpg";
import { Link } from "react-router-dom";
function PreviewCard() {
  return (
    <div className="card">
      <Link to="/Article-1" style={{ textDecoration: "none", color: "black" }}>
        <img className="preview-image" src={natureImage} alt="user-pic" />
        <h3 className="preview-title">This is a practice title </h3>
        <div className="first-section">
          <p className="subject">Subject:test </p>

          <p className="datestamp">December 15, 2025</p>
        </div>
        <hr></hr>
        <p className="author">By: Jesus Cordova</p>
      </Link>
    </div>
  );
}

export default PreviewCard;
